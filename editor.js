
function showNoteEditor(highlightElement, groupId, mouseEvent) {
  document.querySelectorAll('.note-editor').forEach(el => el.remove());
  // 取同组第一个的 data-note
  let currentNote = highlightElement.getAttribute('data-note') || '';
  if (groupId) {
    const first = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
    if (first) currentNote = first.getAttribute('data-note') || '';
  }
    // 读取已有tags
    let tagsArr = [];
    if (highlightElement.hasAttribute('data-tags')) {
      tagsArr = highlightElement.getAttribute('data-tags').split(',').filter(Boolean);
    }

  const editor = document.createElement('div');
  editor.className = 'note-editor';
  if (currentNote=='') {
    editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <textarea class="note-editor-textarea" rows="1" placeholder="type your note" ></textarea>
    `;
  }
  else {
    editor.innerHTML = `
      <div class="note-editor-header" >
        <div class = "tag-bubble"></div>
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <textarea class="note-editor-textarea" placeholder="${!currentNote ? 'type your note' : ''}" >${currentNote ? currentNote : ''}</textarea>
    `;
    
  }
  // 定位
  if (mouseEvent) {
    editor.style.left = `${mouseEvent.clientX}px`;
    editor.style.top = `${mouseEvent.clientY + 10}px`;
  } else {
    const rect = highlightElement.getBoundingClientRect();
    editor.style.left = `${rect.left}px`;
    editor.style.top = `${rect.bottom + 10}px`;
  }
  editor.style.position = 'fixed'; // 别忘了加定位
  document.body.appendChild(editor);

  const textarea = editor.querySelector('.note-editor-textarea');
  const tags = editor.querySelector('.note-editor-tags');
  
  // 为tag输入框添加事件处理，防止编辑器意外关闭
  tags.addEventListener('mousedown', (ev) => {
    ev.stopPropagation(); // 阻止事件冒泡
  });
  
  // 加载已保存的tags到输入框
  const currentPageUrl = window.location.href;
  
  tags.addEventListener('click', (ev) => {
    const tagsBar = editor.querySelector('.note-editor-header');
    const tagsInput = tagsBar.querySelector('.note-editor-tags'); 
    tagsInput.focus();
    console.log('[debug] addTags');
    tagsInput.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        const tagsValue = tagsInput.value.trim();
        // make tagsValue into a tag bubble
        if (tagsValue) {
        const tagBubble = document.createElement('div');
        tagBubble.className = 'tag-bubble';
        tagBubble.innerHTML = tagsValue;
        tagsBar.insertBefore(tagBubble, tagsBar.firstChild);

        saveTagsToStorage(currentPageUrl, tagsValue);
        // clear the tag input box
        tagsInput.value = '';
        }
      }
    });
  });

  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // 先清空高度
    textarea.style.height = textarea.scrollHeight + 'px'; // 根据内容撑开

  });
  //如果textarea有内容，则自动展开
  if (currentNote!='') {
    textarea.style.height = 'auto'; // 先清空高度
    textarea.style.height = textarea.scrollHeight + 'px'; // 根据内容撑开
  }
  // 失焦时保存内容
  textarea.onblur = () => {
    // 使用setTimeout延迟检查，确保事件处理的正确性
    setTimeout(() => {
      // 检查是否是因为点击了tag输入框而导致的失焦
      const activeElement = document.activeElement;
      if (activeElement && activeElement.classList.contains('note-editor-tags')) {
        return; // 如果焦点转移到了tag输入框，不关闭编辑器
      }
      
      const note = textarea.value.trim();
      const tagsValue = tags.value.trim();
      
      // 保存tags到本地存储
      if (tagsValue) {
        const tagsArray = tagsValue.split(',').map(tag => tag.trim()).filter(Boolean);
        saveTagsToStorage(currentPageUrl, tagsArray);
      }
      
      if (groupId) {
        if (note != ''||currentNote!='') {
          document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach(span => {
            span.setAttribute('data-note', note);
            span.title = note ;
          });
        }
      } else {
        if (note != ''||currentNote!='') {
          highlightElement.setAttribute('data-note', note);
          highlightElement.title = note ;
        }
      }
      editor.remove();
      document.removeEventListener('mousedown', onDocMouseDown);
    }, 10); // 延迟10ms检查
  };

  // 点击外部关闭编辑器
  function onDocMouseDown(ev) {
    // 检查点击的目标是否在editor内，包括tag输入框
    // 如果点击的是tag输入框，不要关闭编辑器
    if (ev.target.classList.contains('note-editor-tags')) {
      return; // 如果点击的是tag输入框，不关闭编辑器
    }
    
    if (!editor.contains(ev.target)) {
      textarea.blur();
    }
  }
  document.addEventListener('mousedown', onDocMouseDown);

  textarea.focus();
  //textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
  textarea.onfocus = () => {
    textarea.selectionStart = currentNote.length;
    textarea.selectionEnd = currentNote.length;
  };
  const tagsBar = editor.querySelector('.note-editor-header');
  //TODO: 这里加入tags的编辑功能
  
}

/**
 * 保存tags到Chrome本地存储
 * @param {string} pageUrl - 当前页面URL，用作存储键的一部分
 * @param {Array} tags - 要保存的tags数组
 */
function saveTagsToStorage(pageUrl, tags) {
  if (!pageUrl || !tags || !Array.isArray(tags)) {
    console.error('saveTagsToStorage: 参数无效');
    return;
  }
  
  const storageKey = `html_note_tags_${pageUrl}`;
  const tagsData = {
    url: pageUrl,
    tags: tags,
    timestamp: Date.now()
  };
  
  chrome.storage.local.set({ [storageKey]: tagsData }, () => {
    if (chrome.runtime.lastError) {
      console.error('保存tags失败:', chrome.runtime.lastError);
    } else {
      console.log('tags已保存到本地存储:', tags);
    }
  });
  
/**
 * 从Chrome本地存储读取tags
 * @param {string} pageUrl - 当前页面URL，用作存储键的一部分
 * @param {Function} callback - 回调函数，参数为读取到的tags数组
 */
function loadTagsFromStorage(pageUrl, callback) {
  if (!pageUrl || typeof callback !== 'function') {
    console.error('loadTagsFromStorage: 参数无效');
    callback([]);
    return;
  }
  
  const storageKey = `html_note_tags_${pageUrl}`;
  
  chrome.storage.local.get([storageKey], (result) => {
    if (chrome.runtime.lastError) {
      console.error('读取tags失败:', chrome.runtime.lastError);
      callback([]);
      return;
    }
    
    const tagsData = result[storageKey];
    if (tagsData && tagsData.tags && Array.isArray(tagsData.tags)) {
      console.log('从本地存储读取到tags:', tagsData.tags);
      callback(tagsData.tags);
    } else {
      console.log('未找到保存的tags');
      callback([]);
    }
  });
}

/**
 * 添加tags功能 - 读取tag输入框的内容，当用户按Enter时保存到本地存储
 * @param {string} currentPageUrl - 当前页面URL
 * @param {HTMLElement} editor - 编辑器元素
 */
function addTags(currentPageUrl, editor) {

}
}


/*
使用示例：

// 保存tags
const pageUrl = window.location.href;
const tags = ['重要', '待复习', '技术'];
saveTagsToStorage(pageUrl, tags);

// 读取tags
loadTagsFromStorage(pageUrl, (savedTags) => {
  console.log('读取到的tags:', savedTags);
  // 在这里处理读取到的tags
});

// 在编辑器中使用
// 编辑器会自动加载已保存的tags并显示在tag输入框中
// 当用户编辑完成后，tags会自动保存到本地存储
*/

