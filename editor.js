function showNoteEditor(highlightElement, groupId, mouseEvent) {
  document.querySelectorAll('.note-editor').forEach(el => el.remove());
  // 取同组第一个的 data-note
  let currentNote = highlightElement.getAttribute('data-note') || '';
  if (groupId) {
    const first = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
    if (first) currentNote = first.getAttribute('data-note') || '';
  }
  if (currentNote == '') {
    currentNote = 'Take a note ...';
  }

  const editor = document.createElement('div');
  editor.className = 'note-editor';
  editor.innerHTML = `
    <div class="note-editor-header" style="background:#232734;padding:14px 18px 0 18px;display:flex;align-items:center;font-size:15px;font-weight:500;color:#bfc4d1;border-radius:12px 12px 0 0;">
      <input type="text" class="note-editor-tags" placeholder="Tags" style="background:#232734;color:#bfc4d1;border:1px solid #35394a;border-radius:6px;font-size:14px;padding:2px 8px;outline:none;width:120px;height:28px;" />
    </div>
    <textarea class="note-editor-textarea" placeholder="${currentNote}" style="width:100%;min-height:60px;background:#232734;color:#bfc4d1;border:none;border-radius:0 0 12px 12px;font-size:15px;padding:16px 18px 18px 18px;resize:vertical;box-sizing:border-box;outline:none;margin-top:2px;"></textarea>
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

  // 失焦时保存内容
  textarea.onblur = () => {
    const note = textarea.value.trim();
    if (groupId) {
      if (note != '') {
        document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach(span => {
          span.setAttribute('data-note', note);
          span.title = note || '点击编辑笔记';
        });
      }
    } else {
      if (note != '') {
        highlightElement.setAttribute('data-note', note);
        highlightElement.title = note || '点击编辑笔记';
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
}