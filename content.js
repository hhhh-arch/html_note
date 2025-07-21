// HTML Note Highlighter - Content Script
// 主要功能：高亮文本、添加笔记、保存页面
// 
// 核心功能：
// 1. 文本高亮：用户可以选择文本并添加高亮效果
// 2. 颜色管理：支持多种高亮颜色，可以批量更改同组高亮颜色
// 3. 笔记功能：为高亮文本添加笔记和标签
// 4. 工具栏：提供复制、删除、颜色更改等操作
// 5. 页面保存：将带有高亮和笔记的页面保存为HTML文件
// 6. 快捷键支持：Ctrl+Shift+H 切换高亮模式，Ctrl+Shift+S 保存页面
//
// 技术特点：
// - 支持跨块级元素的高亮
// - 使用组ID管理相关高亮元素
// - 响应式设计，适配不同屏幕尺寸
// - 深色模式支持
// - 打印时隐藏高亮元素
class HTMLNoteHighlighter {
  constructor() {
    this.isActive = false;
    this.noteCounter = 0;
    this.highlightButton = null; // 悬浮高亮按钮
    this.defaultColor = this.getDefaultColor(); // 获取存储的默认颜色
    this.init();
  }

  init() {
    // 初始化事件监听
    this.setupEventListeners();
    // 恢复已保存的高亮和笔记
    this.restoreHighlights();
    // 创建工具栏
    //this.createToolbar();
  }

  /**
   * 获取存储的默认颜色，如果没有则返回默认值
   * @returns {string} 默认颜色
   */
  getDefaultColor() {
    const storedColor = localStorage.getItem('html-note-default-color');
    return storedColor || '#ffeb3b';
  }

  /**
   * 设置默认颜色并保存到localStorage
   * @param {string} color - 要设置的默认颜色
   */
  setDefaultColor(color) {
    this.defaultColor = color;
    localStorage.setItem('html-note-default-color', color);
  }

  setupEventListeners() {
    // 监听选区变化，弹出高亮按钮
    document.addEventListener('selectionchange', () => {
      //console.log('showHighlightButtonForSelection')
      this.showHighlightButtonForSelection();
    });
    


    // 监听点击高亮区域，弹出工具栏和编辑框
    document.addEventListener('click', (e) => {
//       console.log('[debug] 点击事件触发，目标元素:', e.target);
//       console.log('[debug] 目标元素类名:', e.target.className);
      
      if (e.target.classList.contains('html-note-highlight')) {
        const groupId = e.target.getAttribute('data-group-id');
//         console.log('[debug] 点击了高亮元素，groupId:', groupId);

        if (groupId) {
          // 选中所有同组的高亮
//           console.log('[debug] 有groupId，查找同组元素');
          const allSpans = document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]');
//           console.log('[debug] 找到同组元素数量:', allSpans.length);
          // 传第一个span和groupId给工具栏
          this.showToolbarForHighlight(allSpans[0], groupId,e);
//           console.log('[debug] showToolbarForHighlight 调用完成');
          showNoteEditor(allSpans[0], groupId, e);
//           console.log('[debug] showNoteEditor 调用完成');
          //TODO: 这里点击编辑框出不来
        } else {
//           console.log('[debug] 没有groupId，直接处理单个元素');
          this.showToolbarForHighlight(e.target, undefined, e);
          showNoteEditor(e.target, undefined, e);
        }
      } else {
//         console.log('[debug] 点击的不是高亮元素');
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
    const btn = createhighlightBotton(rect);
   
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

      // setTimeout(() => {
      //   if (typeof this.showToolbarForHighlight === 'function') {
      //     // 传递 groupId，显示工具栏时可用
      //     this.showToolbarForHighlight(document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]'), groupId);
      //   }
      // }, 100);
    } catch (error) {
      console.error('高亮文本时出错:', error);
      this.showNotification('高亮失败（可能选中内容结构复杂）');
    }
  }

  /**
   * 创建高亮span元素（使用默认颜色）
   * @param {string} groupId - 高亮组的ID，用于批量操作
   * @returns {HTMLElement} 创建的高亮span元素
   */
  createHighlightSpan(groupId) {
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'html-note-highlight';
    highlightSpan.setAttribute('data-note-id', `note-${++this.noteCounter}`);
    highlightSpan.setAttribute('data-note', '');
    highlightSpan.setAttribute('data-timestamp', Date.now().toString());
    // 每次都重新获取最新的默认颜色
    const color = this.getDefaultColor();
    console.log('[debug] createHighlightSpan 用的 color:', color);
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
        const color = highlightSpan.getAttribute('data-color') || this.getDefaultColor();
        console.log('[debug] wrapRangeWithSpan 传入 wrapCrossBlockSelection 的 color:', color);
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

  wrapCrossBlockSelection(range, color = null, groupId) {
    if (!color) {
      color = this.getDefaultColor();
    }
    console.log('[debug] wrapCrossBlockSelection 用的 color:', color);
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
          const highlightSpan = createHighlightSpanWithColor(color, groupId, ++this.noteCounter);
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
    
    // 如果没有指定颜色，使用默认颜色
    if (!color) {
      color = this.getDefaultColor();
    }
    
    // 创建一个文本节点来替换选区
    const textNode = document.createTextNode(selectedText);
    const highlightSpan = createHighlightSpanWithColor(color, this._currentHighlightGroupId, ++this.noteCounter);
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

  /**
   * 为高亮元素显示工具栏
   * @param {HTMLElement} highlightElement - 要高亮显示的元素
   * @param {string} groupId - 高亮组的ID，用于批量操作同组高亮
   */
  showToolbarForHighlight(highlightElement, groupId,mouseEvent) {
    // 移除已存在的工具栏、编辑框和颜色选择器
    document.querySelectorAll('.html-note-toolbar-float, .note-editor, .color-picker-float').forEach(el => el.remove());
    
    // 创建工具栏容器
    const toolbar = document.createElement('div');
    toolbar.className = 'html-note-toolbar-float';
    let left, top;
    
    // 获取高亮元素相对于视口的位置，并加上滚动偏移
    const rect = highlightElement.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // 计算工具栏的最终位置
    if (mouseEvent) {
      // 使用鼠标点击位置，工具栏中心对准点击位置
      left = mouseEvent.clientX + scrollX - 90; // 90 = toolbar宽度一半
      top = mouseEvent.clientY + scrollY - 50;
    } else {
      // 使用高亮元素位置，工具栏中心对准高亮元素中心
      left = rect.left + scrollX + rect.width / 2 - 90;
      top = rect.top + scrollY - 50;
    }

    // 添加调试信息
    console.log('[debug] 工具栏位置计算:', {
      rect: { left: rect.left, top: rect.top, width: rect.width },
      scroll: { x: scrollX, y: scrollY },
      mouseEvent: mouseEvent ? { clientX: mouseEvent.clientX, clientY: mouseEvent.clientY } : null,
      calculated: { left, top }
    });
    
    // 设置工具栏初始位置（向上偏移，准备滑动）
    toolbar.style.left = `${left}px`;
    toolbar.style.top = `${top}px`;
    document.body.appendChild(toolbar);
    
    // 使用 requestAnimationFrame 确保DOM已渲染，然后添加滑动特效
    requestAnimationFrame(() => {
      toolbar.classList.add('show');
    });

    // 创建颜色按钮
    const colorBtn = document.createElement('button');
    colorBtn.className = 'toolbar-float-btn';
    colorBtn.title = '更改颜色';
    colorBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" fill="'+(highlightElement.getAttribute('data-color')||this.defaultColor)+'"/></svg>';
    colorBtn.onclick = (ev) => {
      ev.stopPropagation();
      this.showColorPickerForHighlight(highlightElement, toolbar);
    };
    
    // 创建复制按钮
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
      showNoteEditor(highlightElement, groupId);
    };
    // 删除按钮
    const delBtn = document.createElement('button');
    delBtn.className = 'toolbar-float-btn';
    delBtn.title = '删除高亮';
    delBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="5" width="12" height="12" rx="3" fill="#fff" stroke="#e57373" stroke-width="1.5"/><line x1="8" y1="8" x2="14" y2="14" stroke="#e57373" stroke-width="2"/><line x1="14" y1="8" x2="8" y2="14" stroke="#e57373" stroke-width="2"/></svg>';
    delBtn.onclick = (ev) => {
      ev.stopPropagation();
      if (groupId) {
        // 删除同组所有高亮
        document.querySelectorAll('.html-note-highlight[data-group-id="'+groupId+'"]').forEach(span => {
          this.removeHighlight(span);
        });
      } else {
        // 只删除当前高亮
        this.removeHighlight(highlightElement);
      }
      // 清理所有相关元素
      toolbar.remove();
      document.querySelectorAll('.note-editor').forEach(el => el.remove());
      document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
      // 清理事件监听器
      if (this._toolbarCloseHandler) {
        document.removeEventListener('mousedown', this._toolbarCloseHandler);
        this._toolbarCloseHandler = null;
      }
      this.showNotification('高亮已删除');
    };
    
    // 将所有按钮添加到工具栏
    toolbar.append(colorBtn, copyBtn, noteBtn, delBtn);
    //document.body.appendChild(toolbar);
    
    // 移除已存在的工具栏关闭事件监听器
    if (this._toolbarCloseHandler) {
      document.removeEventListener('mousedown', this._toolbarCloseHandler);
    }
    
    // 创建新的工具栏关闭事件处理函数
    this._toolbarCloseHandler = (ev) => {
      console.log('[debug] mousedown');
      // 检查点击的目标是否在工具栏或编辑器中
      const isInToolbar = toolbar.contains(ev.target);
      const isInEditor = ev.target.closest('.note-editor');
      const isInColorPicker = ev.target.closest('.color-picker-float');
      
      if (!isInToolbar && !isInEditor && !isInColorPicker) {
        console.log('[debug] mousedown remove toolbar');
        toolbar.remove();
        // 同时移除编辑器
        document.querySelectorAll('.note-editor').forEach(el => el.remove());
        // 移除颜色选择器
        document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
        // 移除事件监听器
        document.removeEventListener('mousedown', this._toolbarCloseHandler);
        this._toolbarCloseHandler = null;
      }
    };
    
    // 添加事件监听器
    document.addEventListener('mousedown', this._toolbarCloseHandler);
  }

  /**
   * 显示颜色选择器浮窗
   * @param {HTMLElement} highlightElement - 要高亮显示的元素
   * @param {HTMLElement} toolbar - 工具栏元素，用于定位颜色选择器
   */
  showColorPickerForHighlight(highlightElement, toolbar) {
    // 移除已存在的颜色选择器浮窗
    document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
    
    // 创建颜色选择器容器
    const picker = document.createElement('div');
    picker.className = 'color-picker-float';
    console.log('[debug] showColorPickerForHighlight 用的 toolbar:');
    // 设置颜色选择器位置（相对于工具栏）
    picker.style.left = toolbar.style.left;
    picker.style.top = `${parseInt(toolbar.style.top) - 56}px`;
    
    // 定义可选择的颜色数组
    const colors = ['#f7c2d6','#ffeb3b','#b2f7ef','#ffd6e0','#c2e9fb','#fff9c4'];
    
    // 获取当前高亮元素的组ID（用于批量修改同组高亮）
    const groupId = highlightElement.getAttribute('data-group-id');
    
    // 为每个颜色创建色块
    colors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch-float';
      swatch.style.background = color;
      
      // 如果当前高亮元素使用的是这个颜色，添加选中状态
      if (highlightElement.getAttribute('data-color') === color) {
        swatch.style.outline = '2px solid #333';
      }
      
      // 如果这个颜色是默认颜色，添加勾选标记
      if (color === this.defaultColor) {
        const checkmark = document.createElement('div');
        checkmark.style.position = 'absolute';
        checkmark.style.top = '2px';
        checkmark.style.right = '2px';
        checkmark.style.width = '8px';
        checkmark.style.height = '8px';
        checkmark.style.background = '#333';
        checkmark.style.borderRadius = '50%';
        checkmark.style.display = 'flex';
        checkmark.style.alignItems = 'center';
        checkmark.style.justifyContent = 'center';
        checkmark.innerHTML = '✓';
        checkmark.style.color = '#fff';
        checkmark.style.fontSize = '6px';
        checkmark.style.fontWeight = 'bold';
        swatch.style.position = 'relative';
        swatch.appendChild(checkmark);
      }
      
      // 点击色块时的处理逻辑
      swatch.onclick = (ev) => {
        ev.stopPropagation(); // 阻止事件冒泡
        
        if (groupId) {
          // 如果有组ID，批量修改同组所有高亮元素的颜色
          changeColorbyGroupId(color, groupId);
        } else {
          // 只修改当前高亮元素的颜色
          highlightElement.style.setProperty('background-color', color, 'important');
          highlightElement.setAttribute('data-color', color);
        }
        
        // 移除颜色选择器
        picker.remove();
        // 更新toolbar颜色icon
        const colorBtnSvg = toolbar.querySelector('button.toolbar-float-btn:first-child svg rect');
        if (colorBtnSvg) {
          colorBtnSvg.setAttribute('fill', color);
        }
      };
      let hoverTimer;

      const setDefaultBtn = document.createElement('div');
      setDefaultBtn.className = 'set-default-btn';
      setDefaultBtn.innerHTML = '✓';
      
      setDefaultBtn.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimer);  // 鼠标进入按钮，取消隐藏
      });
      
      setDefaultBtn.addEventListener('mouseleave', () => {
        hoverTimer = setTimeout(() => {
          if (swatch.contains(setDefaultBtn)) {
            swatch.removeChild(setDefaultBtn);
          }
        }, 100);
      });
      
      swatch.addEventListener('mouseenter', () => {
        if (!swatch.contains(setDefaultBtn)) {
          swatch.appendChild(setDefaultBtn);
        }
        clearTimeout(hoverTimer); // 鼠标进入 swatch，取消隐藏
      });
      
      swatch.addEventListener('mouseleave', () => {
        hoverTimer = setTimeout(() => {
          if (swatch.contains(setDefaultBtn)) {
            swatch.removeChild(setDefaultBtn);
          }
        }, 100);  // 稍微延迟一下，给用户鼠标移动时间
      });
      setDefaultBtn.onclick = (ev) => {
        console.log('[debug] setDefaultBtn.onclick');
        ev.stopPropagation();
        this.setDefaultColor(color);

        this.showNotification('已设为默认颜色');
        picker.remove();
        swatch.removeChild(setDefaultBtn);
      };

     
      // 将色块添加到颜色选择器中
      picker.appendChild(swatch);
    });
    //TODO: 更改默认颜色的设置
    // if mouse is over the color swatch, show the set default button

    // 添加"设为默认"按钮
    // const setDefaultBtn = document.createElement('div');
    // setDefaultBtn.className = 'set-default-btn';
    // setDefaultBtn.style.marginTop = '8px';
    // setDefaultBtn.style.padding = '6px 8px';
    // setDefaultBtn.style.background = '#f5f5f5';
    // setDefaultBtn.style.border = '1px solid #ddd';
    // setDefaultBtn.style.borderRadius = '4px';
    // setDefaultBtn.style.fontSize = '12px';
    // setDefaultBtn.style.cursor = 'pointer';
    // setDefaultBtn.style.textAlign = 'center';
    // setDefaultBtn.style.color = '#666';
    // setDefaultBtn.textContent = '设为默认颜色';
    

    

    
    // 将颜色选择器添加到页面
    document.body.appendChild(picker);
    
    // 添加点击外部关闭颜色选择器的功能
    setTimeout(() => {
      document.addEventListener('mousedown', function closePicker(ev) {
        // 检查点击的目标是否在颜色选择器、工具栏或编辑器中
        const isInPicker = picker.contains(ev.target);
        const isInToolbar = ev.target.closest('.html-note-toolbar-float');
        const isInEditor = ev.target.closest('.note-editor');
        
        if (!isInPicker && !isInToolbar && !isInEditor) {
          picker.remove();
          document.removeEventListener('mousedown', closePicker);
        }
      });
    }, 10);
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
    
    // 清理相关的事件监听器
    if (this._toolbarCloseHandler) {
      document.removeEventListener('mousedown', this._toolbarCloseHandler);
      this._toolbarCloseHandler = null;
    }
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

  // showStats() {
  //   const highlights = document.querySelectorAll('.html-note-highlight');
  //   const notes = Array.from(highlights).filter(h => h.getAttribute('data-note'));
    
  //   const stats = `
  //     总高亮数: ${highlights.length}
  //     有笔记的高亮: ${notes.length}
  //     无笔记的高亮: ${highlights.length - notes.length}
  //   `;
    
  //   alert(stats);
  // }

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

/**
 * 创建高亮span元素（使用指定颜色）
 * @param {string} color - 高亮颜色
 * @param {string} groupId - 高亮组的ID，用于批量操作
 * @param {number} noteCounter - 笔记计数器
 * @returns {HTMLElement} 创建的高亮span元素
 */
function createHighlightSpanWithColor(color, groupId, noteCounter) {
  if (!color) {
    color = highlighter.getDefaultColor();
  }
  console.log('[debug] createHighlightSpanWithColor 用的 color:', color);
  const highlightSpan = document.createElement('span');
  highlightSpan.className = 'html-note-highlight';
  highlightSpan.setAttribute('data-note-id', `note-${noteCounter}`);
  highlightSpan.setAttribute('data-note', '');
  highlightSpan.setAttribute('data-timestamp', Date.now().toString());
  highlightSpan.style.backgroundColor = color;
  highlightSpan.setAttribute('data-color', color);
  if (groupId) highlightSpan.setAttribute('data-group-id', groupId);
  return highlightSpan;
}

/**
 * 根据组ID批量更改高亮元素的背景颜色
 * @param {string} color - 新的背景颜色
 * @param {string} groupId - 高亮组的ID
 */
function changeColorbyGroupId(color, groupId) {
  // 查找所有具有相同groupId的高亮元素
  const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
  
  if (highlightElements.length === 0) {
    console.warn(`未找到groupId为"${groupId}"的高亮元素`);
    return;
  }
  
  // 遍历所有匹配的高亮元素并更改颜色
  highlightElements.forEach(highlightElement => {
    // 使用setProperty方法设置!important样式，确保覆盖CSS规则
    highlightElement.style.setProperty('background-color', color, 'important');
    // 更新data-color属性以保持数据一致性
    highlightElement.setAttribute('data-color', color);
  });
  
  
}
  // editor.js
  function showNoteEditor(highlightElement, groupId, mouseEvent) {
    // ...
  }

function createhighlightBotton(rect) {
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
  return btn;
}
