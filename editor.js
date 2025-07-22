
function showNoteEditor(highlightElement, groupId, mouseEvent) {
  document.querySelectorAll('.note-editor').forEach(el => el.remove());
  // 取同组第一个的 data-note
  let currentNote = highlightElement.getAttribute('data-note') || '';
  let tagsString = highlightElement.getAttribute('data-tags') || '';
  if (groupId) {
    const first = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
    if (first) currentNote = first.getAttribute('data-note') || '';
    if (first) tagsString = first.getAttribute('data-tags') || '';

  }

  // 创建tag bubble的辅助函数
  function createTagBubble(tagText, tagsBar, highlightElement, groupId) {
    const tagBubble = document.createElement('div');
    tagBubble.className = 'tag-bubble';
    tagBubble.innerHTML = tagText;
    
    // 创建删除按钮
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'tag-delete-btn';
    deleteBtn.title = '删除标签';
    
    // 添加删除功能
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止事件冒泡
      
      // 从DOM中移除tag bubble
      tagBubble.remove();
      
      // 更新tagsString
      const currentPageUrl = window.location.href;
      const currentTags = tagsString ? tagsString.split(',').filter(tag => tag.trim() !== '') : [];
      const tagIndex = currentTags.indexOf(tagText);
      if (tagIndex > -1) {
        currentTags.splice(tagIndex, 1);
        tagsString = currentTags.join(',');
        
        // 更新highlight element的data-tags属性
        if (groupId) {
          document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach(span => {
            span.setAttribute('data-tags', tagsString);
          });
        } else {
          highlightElement.setAttribute('data-tags', tagsString);
        }
        
        // 保存到存储
        if (currentTags.length > 0) {
          saveTagsToStorage(currentPageUrl, currentTags);
        } else {
          // 如果没有tags了，清除存储
          const storageKey = `html_note_tags_${currentPageUrl}`;
          chrome.storage.local.remove([storageKey]);
        }
        
        console.log('[debug] 删除tag后，tagsString:', tagsString);
      }
    });
    
    tagBubble.appendChild(deleteBtn);
    return tagBubble;
  }

  const editor = document.createElement('div');
  editor.className = 'note-editor';
  if (currentNote=='') {
    if (tagsString=='') {
    editor.innerHTML = `
      <div class="note-editor-header" >

        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea" contenteditable="true" rows="1" placeholder="type your note" ></div>
    `;
    }
    else {
      editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea" contenteditable="true" rows="1" placeholder="type your note" ></div>
    `;
    const tagsBar = editor.querySelector('.note-editor-header');
    console.log('[debug] display tagsString:', tagsString);
    tagsString.split(',').forEach(tag => {
      if (tag.trim() !== '') {
        const tagBubble = createTagBubble(tag.trim(), tagsBar, highlightElement, groupId);
        tagsBar.insertBefore(tagBubble, tagsBar.firstChild);
      }
    });
    }
  }
  else {
    if (tagsString=='') {
    editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea" contenteditable="true" placeholder="${!currentNote ? 'type your note' : ''}" >${currentNote ? currentNote : ''}</div>
    `;
    }
    else {
      editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea" contenteditable="true" placeholder="${!currentNote ? 'type your note' : ''}" >${currentNote ? currentNote : ''}</div>
    `;
    const tagsBar = editor.querySelector('.note-editor-header');
    tagsString.split(',').forEach(tag => {
      if (tag.trim() !== '') {
        const tagBubble = createTagBubble(tag.trim(), tagsBar, highlightElement, groupId);
        tagsBar.insertBefore(tagBubble, tagsBar.firstChild);
      }
    });
    }
  }
  // 获取高亮元素相对于视口的位置，并加上滚动偏移
  const rect = highlightElement.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
  // 计算编辑器的最终位置
  let left, top;
  if (mouseEvent) {
    // 使用鼠标点击位置，编辑器中心对准点击位置
    left = mouseEvent.clientX + scrollX - 170; // 170 = editor宽度一半
    top = mouseEvent.clientY + scrollY + 15;
    // renderMarkdown(textArea);
    // console.log("text",text);
  } else {
    // 使用高亮元素位置，编辑器中心对准高亮元素中心
    left = rect.left + scrollX + rect.width / 2 - 170;
    top = rect.bottom + scrollY + 10;
  }
  
  // 添加调试信息
  console.log('[debug] 编辑器位置计算:', {
    rect: { left: rect.left, top: rect.top, bottom: rect.bottom, width: rect.width },
    scroll: { x: scrollX, y: scrollY },
    mouseEvent: mouseEvent ? { clientX: mouseEvent.clientX, clientY: mouseEvent.clientY } : null,
    calculated: { left, top }
  });  
  
  // 设置编辑器初始位置（向下偏移，准备滑动）
  editor.style.left = `${left}px`;
  editor.style.top = `${top}px`;
  editor.style.position = 'absolute';
  document.body.appendChild(editor);
  
  // 使用 requestAnimationFrame 确保DOM已渲染，然后添加滑动特效
  requestAnimationFrame(() => {
    editor.classList.add('show');
  });

  const textArea = editor.querySelector('.note-editor-textarea');
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
        if(tagsString == '') {
          const tagBubble = createTagBubble(tagsValue, tagsBar, highlightElement, groupId);
          tagsBar.insertBefore(tagBubble, tagsBar.firstChild);
        }
        else {
          const previousTag = tagsBar.querySelector('.tag-bubble');
          const tagBubble = createTagBubble(tagsValue, tagsBar, highlightElement, groupId);
          // place tagbubble after previousTag
          tagsBar.insertBefore(tagBubble, previousTag.nextSibling);
        }
        // 更新 tagsString，确保格式正确
        const currentTags = tagsString ? tagsString.split(',').filter(tag => tag.trim() !== '') : [];
        currentTags.push(tagsValue);
        tagsString = currentTags.join(',');
        console.log('[debug] tagsString:', tagsString);
        saveTagsToStorage(currentPageUrl, tagsValue);
        // clear the tag input box
        // save the tag bubble for the highlight element
        highlightElement.setAttribute('data-tags', tagsString);
        tagsInput.value = '';
        }
      }
    });
  });
  tags.onblur = () => {
  textArea.addEventListener('input', () => {
    //renderMarkdown(textArea)
    textArea.style.height = 'auto'; // 先清空高度
    textArea.style.height = textArea.scrollHeight + 'px'; // 根据内容撑开

  });
  console.log("enter renderMarkdown");
  renderMarkdown(textArea)
  //如果textarea有内容，则自动展开
  if (currentNote!='') {
    textArea.style.height = 'auto'; // 先清空高度
    textArea.style.height = textArea.scrollHeight + 'px'; // 根据内容撑开
  }
  // 失焦时保存内容
  textArea.onblur = () => {
    // 使用setTimeout延迟检查，确保事件处理的正确性
    setTimeout(() => {
      // 检查是否是因为点击了tag输入框而导致的失焦
      const activeElement = document.activeElement;
      if (activeElement && activeElement.classList.contains('note-editor-tags')) {
        return; // 如果焦点转移到了tag输入框，不关闭编辑器
      }
      
      const note = textArea.value.trim();
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
    // 检查点击的目标是否在editor内，包括tag输入框和删除按钮
    // 如果点击的是tag输入框或删除按钮，不要关闭编辑器
    if (ev.target.classList.contains('note-editor-tags') || ev.target.classList.contains('tag-delete-btn')) {
      return; // 如果点击的是tag输入框或删除按钮，不关闭编辑器
    }
    
    // 检查是否点击了工具栏或颜色选择器
    const isInToolbar = ev.target.closest('.html-note-toolbar-float');
    const isInColorPicker = ev.target.closest('.color-picker-float');
    
    if (!editor.contains(ev.target) && !isInToolbar && !isInColorPicker) {
      textArea.blur();
    }
  }
  document.addEventListener('mousedown', onDocMouseDown);

  textArea.focus();
  //textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
  textArea.onfocus = () => {
    textArea.selectionStart = currentNote.length;
    textArea.selectionEnd = currentNote.length;
  };
  const tagsBar = editor.querySelector('.note-editor-header');
  //TODO: 这里加入tags的编辑功能
  
}
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
}
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

// /**
//  * 添加tags功能 - 读取tag输入框的内容，当用户按Enter时保存到本地存储
//  * @param {string} currentPageUrl - 当前页面URL
//  * @param {HTMLElement} editor - 编辑器元素
//  */
// function addTags(currentPageUrl, editor) {

// }
function rendeMarkdown(text) {
  // 使用marked.js渲染markdown
}
