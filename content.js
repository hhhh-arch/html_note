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
        const groupId = e.target.getAttribute('data-group-id');
        if (groupId) {
          // 选中所有同组的高亮
          const allSpans = document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]');
          // 传第一个span和groupId给工具栏
          this.showToolbarForHighlight(allSpans[0], groupId);
          this.showNoteEditor(allSpans[0], groupId, e);
        } else {
          this.showToolbarForHighlight(e.target);
          this.showNoteEditor(e.target, undefined, e);
        }
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

    // 读取当前颜色并创建高亮元素
    chrome.storage && chrome.storage.sync && chrome.storage.sync.get('highlightColor', ({ highlightColor }) => {
      const color = highlightColor || '#ffeb3b';

      try {
        // 使用更健壮的方法来处理复杂选区
        const highlightSpan = this.createHighlightSpanWithColor(color, this._currentHighlightGroupId);
        this.wrapRangeWithSpan(range, highlightSpan);
        selection.removeAllRanges();
        // 自动弹出笔记编辑器
        setTimeout(() => {
          this.showNoteEditor(highlightSpan, this._currentHighlightGroupId);
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
    try {
      const selection = window.getSelection();
      if (!selection || !selection.rangeCount || selection.isCollapsed) {
        console.log('[debug] 没有有效的选区');
        return;
      }
  
      const range = selection.getRangeAt(0);
      const selectedText = selection.toString().trim();
      if (selectedText.length === 0) return;
  
      if (this.isAlreadyHighlighted(range)) {
        this.showNotification('该文本已经高亮过了');
        selection.removeAllRanges();
        return;
      }
  
      // 生成本次高亮的 group id
      const groupId = 'note-group-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
      this._currentHighlightGroupId = groupId;
  
      // 👇 使用 extract + insert 替代 surround，绕过 DOMException
      this.wrapRangeWithSpan(range, this.createHighlightSpan(groupId));
  
      selection.removeAllRanges();
      setTimeout(() => {
        if (typeof this.showToolbarForHighlight === 'function') {
          // 传递 groupId，显示工具栏时可用
          this.showToolbarForHighlight(document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]'), groupId);
        }
      }, 100);
    } catch (error) {
      console.error('高亮文本时出错:', error);
      this.showNotification('高亮失败（可能选中内容结构复杂）');
    }
  }

  createHighlightSpan(groupId) {
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'html-note-highlight';
    highlightSpan.setAttribute('data-note-id', `note-${++this.noteCounter}`);
    highlightSpan.setAttribute('data-note', '');
    highlightSpan.setAttribute('data-timestamp', Date.now().toString());
    // 默认色
    const color = '#f7c2d6';
    highlightSpan.style.backgroundColor = color;
    highlightSpan.setAttribute('data-color', color);
    if (groupId) highlightSpan.setAttribute('data-group-id', groupId);
    return highlightSpan;
  }

  createHighlightSpanWithColor(color, groupId) {
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'html-note-highlight';
    highlightSpan.setAttribute('data-note-id', `note-${++this.noteCounter}`);
    highlightSpan.setAttribute('data-note', '');
    highlightSpan.setAttribute('data-timestamp', Date.now().toString());
    highlightSpan.style.backgroundColor = color;
    highlightSpan.setAttribute('data-color', color);
    if (groupId) highlightSpan.setAttribute('data-group-id', groupId);
    return highlightSpan;
  }

  wrapRangeWithSpan(range, highlightSpan) {
    try {
      // 检查是否是跨块级元素的选区
      const groupId = highlightSpan.getAttribute('data-group-id');
      if (this.isCrossBlockSelection(range)) {
        const color = highlightSpan.getAttribute('data-color') || '#f7c2d6';
        this.wrapCrossBlockSelection(range, color, groupId);
      } else {
        // 对于简单的选区，使用原来的方法
        const contents = range.extractContents();
        highlightSpan.appendChild(contents);
        range.insertNode(highlightSpan);
      }
      // 清理可能的空文本节点
      this.cleanupEmptyNodes(highlightSpan);
    } catch (error) {
      console.error('wrapRangeWithSpan 报错:', error);
      throw error;
    }
  }

  isCrossBlockSelection(range) {
    // 检查选区是否跨越多个块级元素
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;
    
    // 如果开始和结束是同一个节点，不是跨块级元素
    if (startContainer === endContainer) {
      return false;
    }
    
    // 获取选区内的所有节点
    const nodes = [];
    let node = startContainer;
    
    while (node && node !== endContainer.nextSibling) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        nodes.push(node);
      }
      node = this.getNextNode(node, endContainer);
    }
    
    // 检查是否有多个块级元素
    const blockElements = nodes.filter(node => 
      this.isBlockElement(node)
    );
    
    // 如果只有一个块级元素，检查是否跨越了多个子元素
    if (blockElements.length === 1) {
      const blockElement = blockElements[0];
      const startNode = range.startContainer;
      const endNode = range.endContainer;
      
      // 检查是否跨越了多个子元素
      if (startNode !== endNode) {
        return true;
      }
    }
    
    return blockElements.length > 1;
  }

  isBlockElement(element) {
    const blockTags = ['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'MAIN', 'ASIDE', 'NAV', 'BLOCKQUOTE', 'PRE', 'LI', 'DT', 'DD'];
    return blockTags.includes(element.tagName);
  }

  getNextNode(node, endNode) {
    if (node === endNode) return null;
    
    if (node.firstChild) {
      return node.firstChild;
    }
    
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
    
    return null;
  }

  wrapCrossBlockSelection(range, color = '#f7c2d6', groupId) {
    try {
      const textNodes = this.getTextNodesInRange(range);
      if (textNodes.length === 0) {
        this.fallbackHighlight(range, color);
        return;
      }
      const highlightSpans = [];
      textNodes.forEach(({ node, startOffset, endOffset }) => {
        if (startOffset === endOffset) return;
        const textContent = node.textContent;
        const selectedText = textContent.substring(startOffset, endOffset);
        if (selectedText.trim()) {
          const highlightSpan = this.createHighlightSpanWithColor(color, groupId);
          highlightSpan.textContent = selectedText;
          const beforeText = textContent.substring(0, startOffset);
          const afterText = textContent.substring(endOffset);
          if (beforeText) {
            const beforeNode = document.createTextNode(beforeText);
            node.parentNode.insertBefore(beforeNode, node);
          }
          node.parentNode.insertBefore(highlightSpan, node.nextSibling);
          highlightSpans.push(highlightSpan);
          if (afterText) {
            const afterNode = document.createTextNode(afterText);
            node.parentNode.insertBefore(afterNode, highlightSpan.nextSibling);
          }
          node.parentNode.removeChild(node);
        }
      });
      this.mergeAdjacentHighlights(highlightSpans);
    } catch (error) {
      console.error('跨块级元素高亮失败，尝试备用方法:', error);
      this.fallbackHighlight(range, color);
    }
  }

  getTextNodesInRange(range) {
    const textNodes = [];
    const { startContainer, endContainer, startOffset, endOffset } = range;
    const ancestor = range.commonAncestorContainer;

    // 用 TreeWalker 遍历所有文本节点
    const walker = document.createTreeWalker(
      ancestor.nodeType === 1 ? ancestor : ancestor.parentNode,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // 只处理有内容的文本节点
          if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
          // 判断节点和选区的关系
          const nodeRange = document.createRange();
          nodeRange.selectNodeContents(node);
          if (
            nodeRange.compareBoundaryPoints(Range.END_TO_START, range) <= 0 &&
            nodeRange.compareBoundaryPoints(Range.START_TO_END, range) >= 0
          ) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      },
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      let nodeStart = 0;
      let nodeEnd = node.textContent.length;
      if (node === startContainer) nodeStart = startOffset;
      if (node === endContainer) nodeEnd = endOffset;
      if (nodeStart < nodeEnd) {
        textNodes.push({ node, startOffset: nodeStart, endOffset: nodeEnd });
      }
    }
    return textNodes;
  }

  getAllTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    return textNodes;
  }

  fallbackHighlight(range, color) {
    // 备用方法：只高亮文本内容，不改变HTML结构
    const selectedText = range.toString();
    if (!selectedText.trim()) return;
    
    // 创建一个文本节点来替换选区
    const textNode = document.createTextNode(selectedText);
    const highlightSpan = this.createHighlightSpanWithColor(color, this._currentHighlightGroupId);
    highlightSpan.appendChild(textNode);
    
    // 删除原始内容并插入高亮span
    range.deleteContents();
    range.insertNode(highlightSpan);
  }

  getNodesInRange(range) {
    const nodes = [];
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;
    
    // 如果开始和结束是同一个节点
    if (startContainer === endContainer) {
      nodes.push(startContainer);
      return nodes;
    }
    
    // 获取所有在选区内的节点
    let node = startContainer;
    const endNode = endContainer.nextSibling;
    
    while (node && node !== endNode) {
      nodes.push(node);
      node = this.getNextNode(node, endContainer);
    }
    
    return nodes;
  }

  mergeAdjacentHighlights(highlightSpans) {
    for (let i = 0; i < highlightSpans.length - 1; i++) {
      const current = highlightSpans[i];
      const next = highlightSpans[i + 1];
      
      if (current.nextSibling === next) {
        // 合并相邻的高亮span
        current.appendChild(next);
        next.parentNode.removeChild(next);
        highlightSpans.splice(i + 1, 1);
        i--; // 重新检查当前位置
      }
    }
  }

  cleanupEmptyNodes(element) {
    // 清理空的文本节点
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const nodesToRemove = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim() === '') {
        nodesToRemove.push(node);
      }
    }
    
    nodesToRemove.forEach(node => {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
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

  showToolbarForHighlight(highlightElement, groupId) {
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
      // 复制同组所有高亮文本
      let text = '';
      if (groupId) {
        document.querySelectorAll('.html-note-highlight[data-group-id="'+groupId+'"]').forEach(span => {
          text += span.textContent;
        });
      } else {
        text = highlightElement.textContent;
      }
      navigator.clipboard.writeText(text);
      this.showNotification('已复制高亮文本');
    };
    // 注释按钮
    const noteBtn = document.createElement('button');
    noteBtn.className = 'toolbar-float-btn';
    noteBtn.title = '添加/编辑笔记';
    noteBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="4" width="14" height="14" rx="4" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><text x="11" y="16" text-anchor="middle" font-size="12" fill="#bfc4d1">"</text></svg>';
    noteBtn.onclick = (ev) => {
      ev.stopPropagation();
      this.showNoteEditor(highlightElement, groupId);
    };
    // 删除按钮
    const delBtn = document.createElement('button');
    delBtn.className = 'toolbar-float-btn';
    delBtn.title = '删除高亮';
    delBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="5" width="12" height="12" rx="3" fill="#fff" stroke="#e57373" stroke-width="1.5"/><line x1="8" y1="8" x2="14" y2="14" stroke="#e57373" stroke-width="2"/><line x1="14" y1="8" x2="8" y2="14" stroke="#e57373" stroke-width="2"/></svg>';
    delBtn.onclick = (ev) => {
      ev.stopPropagation();
      if (groupId) {
        document.querySelectorAll('.html-note-highlight[data-group-id="'+groupId+'"]').forEach(span => {
          this.removeHighlight(span);
        });
      } else {
        this.removeHighlight(highlightElement);
      }
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
    const groupId = highlightElement.getAttribute('data-group-id');
    colors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch-float';
      swatch.style.background = color;
      if (highlightElement.getAttribute('data-color') === color) {
        swatch.style.outline = '2px solid #333';
      }
      swatch.onclick = (ev) => {
        ev.stopPropagation();
        if (groupId) {
          document.querySelectorAll('.html-note-highlight[data-group-id="'+groupId+'"]').forEach(span => {
            span.style.backgroundColor = color;
            span.setAttribute('data-color', color);
          });
        } else {
          highlightElement.style.backgroundColor = color;
          highlightElement.setAttribute('data-color', color);
        }
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

  showNoteEditor(highlightElement, groupId, mouseEvent) {
    document.querySelectorAll('.note-editor').forEach(el => el.remove());
    // 取同组第一个的 data-note
    let currentNote = highlightElement.getAttribute('data-note') || '';
    if (groupId) {
      const first = document.querySelector('.html-note-highlight[data-group-id="'+groupId+'"]');
      if (first) currentNote = first.getAttribute('data-note') || '';
    }
    const editor = document.createElement('div');
    editor.className = 'note-editor';
    editor.innerHTML = `
      <div class="note-editor-header">
        <span>Tags</span>
        <button class="note-editor-close">&times;</button>
      </div>
      <textarea class="note-editor-textarea" placeholder="Take a note ...">${currentNote}</textarea>
    `;
    // 定位：优先用鼠标事件，否则用高亮元素
    if (mouseEvent) {
      editor.style.left = `${mouseEvent.clientX}px`;
      editor.style.top = `${mouseEvent.clientY + 10}px`;
    } else {
      const rect = highlightElement.getBoundingClientRect();
      editor.style.left = `${rect.left}px`;
      editor.style.top = `${rect.bottom + 10}px`;
    }
    document.body.appendChild(editor);
    const textarea = editor.querySelector('.note-editor-textarea');
    const closeBtn = editor.querySelector('.note-editor-close');
    textarea.onblur = () => {
      const note = textarea.value.trim();
      if (groupId) {
        document.querySelectorAll('.html-note-highlight[data-group-id="'+groupId+'"]').forEach(span => {
          span.setAttribute('data-note', note);
          span.title = note || '点击编辑笔记';
        });
      } else {
        highlightElement.setAttribute('data-note', note);
        highlightElement.title = note || '点击编辑笔记';
      }
    };
    closeBtn.onclick = () => editor.remove();
    textarea.focus();
  }

  removeHighlight(highlightElement) {
    // 获取高亮元素内的所有内容
    const contents = [];
    let child = highlightElement.firstChild;
    
    while (child) {
      const nextChild = child.nextSibling;
      contents.push(child);
      child = nextChild;
    }
    
    // 将内容移回父元素
    const parent = highlightElement.parentNode;
    contents.forEach(node => {
      parent.insertBefore(node, highlightElement);
    });
    
    // 移除高亮元素
    parent.removeChild(highlightElement);
    
    // 合并相邻的文本节点
    this.normalizeTextNodes(parent);
  }

  normalizeTextNodes(element) {
    // 合并相邻的文本节点
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    // 合并相邻的文本节点
    for (let i = 0; i < textNodes.length - 1; i++) {
      const current = textNodes[i];
      const next = textNodes[i + 1];
      
      if (current.parentNode === next.parentNode && 
          current.nextSibling === next) {
        current.textContent += next.textContent;
        next.parentNode.removeChild(next);
        textNodes.splice(i + 1, 1);
        i--; // 重新检查当前位置
      }
    }
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
window.HTMLNoteHighlighter.showNoteEditor = highlighter.showNoteEditor.bind(highlighter);