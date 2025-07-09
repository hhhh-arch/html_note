// HTML Note Highlighter - Content Script
// 主要功能：高亮文本、添加笔记、保存页面

class HTMLNoteHighlighter {
  constructor() {
    this.isActive = false;
    this.noteCounter = 0;
    this.highlightButton = null; // 悬浮高亮按钮
    this.init();
  }

  init() {
    // 初始化事件监听
    this.setupEventListeners();
    // 恢复已保存的高亮和笔记
    this.restoreHighlights();
    // 创建工具栏
    this.createToolbar();
  }

  setupEventListeners() {
    // 监听选区变化，弹出高亮按钮
    document.addEventListener('selectionchange', () => {
      this.showHighlightButtonForSelection();
    });

    // 监听鼠标选择文本
    document.addEventListener('mouseup', (e) => {
      if (this.isActive) {
        this.handleTextSelection();
      }
    });

    // 监听点击高亮区域，弹出工具栏和编辑框
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('html-note-highlight')) {
        this.showToolbarForHighlight(e.target);
      }
    });

    // 监听键盘快捷键
    document.addEventListener('keydown', (e) => {
      // Ctrl+Shift+H 切换高亮模式
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        this.toggleHighlightMode();
      }
      // Ctrl+Shift+S 保存页面
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        this.savePage();
      }
    });
  }

  toggleHighlightMode() {
    this.isActive = !this.isActive;
    this.updateToolbarStatus();
    
    if (this.isActive) {

      this.showNotification('高亮模式已开启 - 选择文本进行高亮');
    } else {
      document.body.style.cursor = 'default';
      this.showNotification('高亮模式已关闭');
    }
  }

  handleTextSelection() {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();
    
    if (selectedText.length === 0) return;

    // 检查是否已经高亮
    if (this.isAlreadyHighlighted(range)) {
      this.showNotification('该文本已经高亮过了');
      selection.removeAllRanges();
      return;
    }

    // 创建高亮元素
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'html-note-highlight';
    highlightSpan.setAttribute('data-note-id', `note-${++this.noteCounter}`);
    highlightSpan.setAttribute('data-note', '');
    highlightSpan.setAttribute('data-timestamp', Date.now().toString());
    
    // 读取当前颜色并包裹选中文本
    chrome.storage && chrome.storage.sync && chrome.storage.sync.get('highlightColor', ({ highlightColor }) => {
      const color = highlightColor || '#ffeb3b';
      highlightSpan.style.backgroundColor = color;
      highlightSpan.setAttribute('data-color', color);

      // 包裹选中的文本
      try {
        range.surroundContents(highlightSpan);
        selection.removeAllRanges();
        // 自动弹出笔记编辑器
        setTimeout(() => {
          this.showNoteEditor(highlightSpan);
        }, 100);
      } catch (error) {
        console.error('高亮文本时出错:', error);
        this.showNotification('高亮失败，请重试');
      }
    });
  }

  showHighlightButtonForSelection() {
    // 移除已有按钮
    if (this.highlightButton) {
      this.highlightButton.remove();
      this.highlightButton = null;
    }
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) return;
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;
    // 创建按钮
    const btn = document.createElement('button');
    btn.className = 'html-note-highlight-btn';
    btn.title = '高亮所选文本';
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="14" width="14" height="3" rx="1.5" fill="#f7c2d6"/><rect x="6" y="3" width="8" height="10" rx="2" fill="#333"/></svg>';
    btn.style.position = 'fixed';
    btn.style.left = `${rect.left + rect.width/2 - 16}px`;
    btn.style.top = `${rect.top - 36}px`;
    btn.style.zIndex = 10010;
    btn.style.background = '#fff';
    btn.style.border = '1px solid #eee';
    btn.style.borderRadius = '6px';
    btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
    btn.style.padding = '4px';
    btn.style.cursor = 'pointer';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.transition = 'box-shadow 0.2s';
    btn.onmouseenter = () => btn.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
    btn.onmouseleave = () => btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
    document.body.appendChild(btn);
    this.highlightButton = btn;
    btn.onclick = () => {
      this.highlightSelectionWithDefaultColor();
      btn.remove();
      this.highlightButton = null;
    };
  }

  highlightSelectionWithDefaultColor() {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) return;
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();
    if (selectedText.length === 0) return;
    if (this.isAlreadyHighlighted(range)) {
      this.showNotification('该文本已经高亮过了');
      selection.removeAllRanges();
      return;
    }
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'html-note-highlight';
    highlightSpan.setAttribute('data-note-id', `note-${++this.noteCounter}`);
    highlightSpan.setAttribute('data-note', '');
    highlightSpan.setAttribute('data-timestamp', Date.now().toString());
    // 默认色
    const color = '#f7c2d6';
    highlightSpan.style.backgroundColor = color;
    highlightSpan.setAttribute('data-color', color);
    try {
      range.surroundContents(highlightSpan);
      selection.removeAllRanges();
      setTimeout(() => {
        window.HTMLNoteHighlighter.showToolbarForHighlight(highlightSpan);
      }, 100);
    } catch (error) {
      console.error('高亮文本时出错:', error);
      this.showNotification('高亮失败，请重试');
    }
  }

  isAlreadyHighlighted(range) {
    let node = range.startContainer;
    while (node && node !== range.endContainer) {
      if (node.nodeType === Node.ELEMENT_NODE && 
          node.classList && 
          node.classList.contains('html-note-highlight')) {
        return true;
      }
      node = node.nextSibling || node.parentNode;
    }
    return false;
  }

  showToolbarForHighlight(highlightElement) {
    // 移除已存在的工具栏和编辑框
    document.querySelectorAll('.html-note-toolbar-float, .note-editor, .color-picker-float').forEach(el => el.remove());
    const rect = highlightElement.getBoundingClientRect();
    // 工具栏
    const toolbar = document.createElement('div');
    toolbar.className = 'html-note-toolbar-float';
    toolbar.style.left = `${rect.left + rect.width/2 - 90}px`;
    toolbar.style.top = `${rect.top - 50}px`;
    // 颜色按钮
    const colorBtn = document.createElement('button');
    colorBtn.className = 'toolbar-float-btn';
    colorBtn.title = '更改颜色';
    colorBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" fill="'+(highlightElement.getAttribute('data-color')||'#f7c2d6')+'"/></svg>';
    colorBtn.onclick = (ev) => {
      ev.stopPropagation();
      this.showColorPickerForHighlight(highlightElement, toolbar);
    };
    // 复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'toolbar-float-btn';
    copyBtn.title = '复制文本';
    copyBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="6" y="6" width="10" height="10" rx="2" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#bfc4d1" stroke-width="1.5"/></svg>';
    copyBtn.onclick = (ev) => {
      ev.stopPropagation();
      navigator.clipboard.writeText(highlightElement.textContent);
      this.showNotification('已复制高亮文本');
    };
    // 注释按钮
    const noteBtn = document.createElement('button');
    noteBtn.className = 'toolbar-float-btn';
    noteBtn.title = '添加/编辑笔记';
    noteBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="4" width="14" height="14" rx="4" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><text x="11" y="16" text-anchor="middle" font-size="12" fill="#bfc4d1">"</text></svg>';
    noteBtn.onclick = (ev) => {
      ev.stopPropagation();
      this.showNoteEditor(highlightElement, toolbar);
    };
    // 删除按钮
    const delBtn = document.createElement('button');
    delBtn.className = 'toolbar-float-btn';
    delBtn.title = '删除高亮';
    delBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="5" width="12" height="12" rx="3" fill="#fff" stroke="#e57373" stroke-width="1.5"/><line x1="8" y1="8" x2="14" y2="14" stroke="#e57373" stroke-width="2"/><line x1="14" y1="8" x2="8" y2="14" stroke="#e57373" stroke-width="2"/></svg>';
    delBtn.onclick = (ev) => {
      ev.stopPropagation();
      this.removeHighlight(highlightElement);
      toolbar.remove();
      document.querySelectorAll('.note-editor').forEach(el => el.remove());
      this.showNotification('高亮已删除');
    };
    toolbar.append(colorBtn, copyBtn, noteBtn, delBtn);
    document.body.appendChild(toolbar);
  }

  showColorPickerForHighlight(highlightElement, toolbar) {
    document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
    const picker = document.createElement('div');
    picker.className = 'color-picker-float';
    picker.style.left = toolbar.style.left;
    picker.style.top = `${parseInt(toolbar.style.top) - 56}px`;
    const colors = ['#f7c2d6','#ffeb3b','#b2f7ef','#ffd6e0','#c2e9fb','#fff9c4'];
    colors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch-float';
      swatch.style.background = color;
      if (highlightElement.getAttribute('data-color') === color) {
        swatch.style.outline = '2px solid #333';
      }
      swatch.onclick = (ev) => {
        ev.stopPropagation();
        highlightElement.style.backgroundColor = color;
        highlightElement.setAttribute('data-color', color);
        picker.remove();
        // 更新toolbar颜色icon
        const colorBtnSvg = toolbar.querySelector('button.toolbar-float-btn:first-child svg rect');
        if (colorBtnSvg) colorBtnSvg.setAttribute('fill', color);
      };
      picker.appendChild(swatch);
    });
    document.body.appendChild(picker);
    setTimeout(() => {
      document.addEventListener('mousedown', function closePicker(ev) {
        if (!picker.contains(ev.target)) {
          picker.remove();
          document.removeEventListener('mousedown', closePicker);
        }
      });
    }, 10);
  }

  showNoteEditor(highlightElement, toolbar) {
    document.querySelectorAll('.note-editor').forEach(el => el.remove());
    const currentNote = highlightElement.getAttribute('data-note') || '';
    const editor = document.createElement('div');
    editor.className = 'note-editor';
    editor.innerHTML = `
      <div class="note-editor-header">
        <span>Tags</span>
        <button class="note-editor-close">&times;</button>
      </div>
      <textarea class="note-editor-textarea" placeholder="Take a note ...">${currentNote}</textarea>
    `;
    const rect = highlightElement.getBoundingClientRect();
    editor.style.left = `${rect.left}px`;
    editor.style.top = `${rect.bottom + 10}px`;
    document.body.appendChild(editor);
    const textarea = editor.querySelector('.note-editor-textarea');
    const closeBtn = editor.querySelector('.note-editor-close');
    textarea.onblur = () => {
      highlightElement.setAttribute('data-note', textarea.value.trim());
      highlightElement.title = textarea.value.trim() || '点击编辑笔记';
    };
    closeBtn.onclick = () => editor.remove();
    textarea.focus();
  }

  removeHighlight(highlightElement) {
    const parent = highlightElement.parentNode;
    while (highlightElement.firstChild) {
      parent.insertBefore(highlightElement.firstChild, highlightElement);
    }
    parent.removeChild(highlightElement);
  }

  savePage() {
    try {
      // 获取当前页面的HTML
      const html = document.documentElement.outerHTML;
      
      // 创建下载链接
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `笔记版-${document.title}-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      URL.revokeObjectURL(url);
      this.showNotification('页面已保存为HTML文件');
      
    } catch (error) {
      console.error('保存页面时出错:', error);
      this.showNotification('保存失败，请重试');
    }
  }

  restoreHighlights() {
    // 恢复已保存的高亮样式和事件
    const highlights = document.querySelectorAll('.html-note-highlight');
    highlights.forEach(highlight => {
      const note = highlight.getAttribute('data-note');
      if (note) {
        highlight.title = note;
      }
    });
  }

  createToolbar() {
    // 移除已存在的工具栏
    const existingToolbar = document.querySelector('.html-note-toolbar');
    if (existingToolbar) {
      existingToolbar.remove();
    }

    const toolbar = document.createElement('div');
    toolbar.className = 'html-note-toolbar';
    toolbar.innerHTML = `
      <button class="toolbar-btn toggle-btn" title="切换高亮模式 (Ctrl+Shift+H)">
        <span class="toolbar-icon">✏️</span>
        <span class="toolbar-text">高亮模式</span>
      </button>
      <button class="toolbar-btn save-btn" title="保存页面 (Ctrl+Shift+S)">
        <span class="toolbar-icon">💾</span>
        <span class="toolbar-text">保存页面</span>
      </button>
      <button class="toolbar-btn stats-btn" title="查看统计">
        <span class="toolbar-icon">📊</span>
        <span class="toolbar-text">统计</span>
      </button>
    `;

    document.body.appendChild(toolbar);

    // 绑定工具栏事件
    const toggleBtn = toolbar.querySelector('.toggle-btn');
    const saveBtn = toolbar.querySelector('.save-btn');
    const statsBtn = toolbar.querySelector('.stats-btn');

    toggleBtn.addEventListener('click', () => {
      this.toggleHighlightMode();
    });

    saveBtn.addEventListener('click', () => {
      this.savePage();
    });

    statsBtn.addEventListener('click', () => {
      this.showStats();
    });
  }

  updateToolbarStatus() {
    const toggleBtn = document.querySelector('.toggle-btn');
    if (toggleBtn) {
      if (this.isActive) {
        toggleBtn.classList.add('active');
        toggleBtn.querySelector('.toolbar-text').textContent = '高亮开启';
      } else {
        toggleBtn.classList.remove('active');
        toggleBtn.querySelector('.toolbar-text').textContent = '高亮模式';
      }
    }
  }

  showStats() {
    const highlights = document.querySelectorAll('.html-note-highlight');
    const notes = Array.from(highlights).filter(h => h.getAttribute('data-note'));
    
    const stats = `
      总高亮数: ${highlights.length}
      有笔记的高亮: ${notes.length}
      无笔记的高亮: ${highlights.length - notes.length}
    `;
    
    alert(stats);
  }

  showNotification(message) {
    // 移除已存在的通知
    const existingNotification = document.querySelector('.html-note-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'html-note-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }
}

// 初始化插件
const highlighter = new HTMLNoteHighlighter();
window.HTMLNoteHighlighter = highlighter;
window.HTMLNoteHighlighter.showToolbarForHighlight = highlighter.showToolbarForHighlight.bind(highlighter); 