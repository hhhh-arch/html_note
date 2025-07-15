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
  editor.innerHTML = `
    <div class="note-editor-header" >
      <input type="text" class="note-editor-tags" placeholder="Tags" />
    </div>
    <textarea class="note-editor-textarea" placeholder="${!currentNote ? 'type your note' : ''}" >${currentNote ? currentNote : ''}</textarea>
  `;

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
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // 先清空高度
    textarea.style.height = textarea.scrollHeight + 'px'; // 根据内容撑开
  });
  // 失焦时保存内容
  textarea.onblur = () => {
    const note = textarea.value.trim();
    if (groupId) {
      if (note != '') {
        document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach(span => {
          span.setAttribute('data-note', note);
          span.title = note ;
        });
      }
    } else {
      if (note != '') {
        highlightElement.setAttribute('data-note', note);
        highlightElement.title = note ;
      }
    }
    editor.remove();
    document.removeEventListener('mousedown', onDocMouseDown);
  };

  // 点击外部关闭编辑器
  function onDocMouseDown(ev) {
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
  // TODO： 这里加入tags的编辑功能
}
