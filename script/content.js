import {showNoteEditor, saveNotesContent} from './editor.js';
import CryptoJS from '../libs/crypto-js.min.js';
import { toggleFullscreen } from './fullScreenMindMap/mindMapFullscreen.js';
class HTMLNoteHighlighter {
  constructor() {
    this.isActive = false;
    this.noteCounter = 0;
    this.highlightButton = null; 
    this.defaultColor = getDefaultColor(); 
    this.init();
  }

  init() {
    
    this.setupEventListeners();
    
    this.restoreHighlights();
    
    
    load_groupId_list(window.location.href);
    show_loose_highlightElement(window.location.href);
  }


  
  
  setDefaultColor(color) {
    this.defaultColor = color;
    localStorage.setItem('html-note-default-color', color);
  }

  setupEventListeners() {
    
    document.addEventListener('selectionchange', () => {
      
      this.showHighlightButtonForSelection();
    });
    


    
    document.addEventListener('click', (e) => {


      
      if (e.target.classList.contains('html-note-highlight')) {
        const groupId = e.target.getAttribute('data-group-id');


        if (groupId) {
          

          const allSpans = document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]');

          
          this.showToolbarForHighlight(allSpans[0], groupId,e);

          showNoteEditor(allSpans[0], groupId, e);

          
        } else {

          this.showToolbarForHighlight(e.target, undefined, e);
          showNoteEditor(e.target, undefined, e);
        }
      } else {

      }
    });
    document.addEventListener('mouseover',(e)=>{
      highlightElement_mouseOverHandler(e);
    })
    document.addEventListener('mouseout',(e)=>{
      highlightElement_mouseOutHandler(e);
    })

        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            // console.log('message:', message);
            if (message.type === 'sync_mindMap_data') {
                chrome.runtime.sendMessage({type: 'sync_mindMap_data_ready', pageUrl: window.location.href});
            }
            if (message.type === 'toggle_fullscreen') {
                // chrome.runtime.sendMessage({ type: 'close_side_panel' });
                toggleFullscreen(window.location.href);
            }
            if (message.type == 'context_menu_item_clicked') {
                chrome.runtime.sendMessage({type: 'open_side_panel'});
            }
            if (message.type === 'side_panel_ready') {
                // console.log('pageurl:', window.location.href);
                chrome.runtime.sendMessage({type: 'init_mindmap', pageUrl: window.location.href});
            }
            if (message.type === 'remove_content_editor') {
                remove_content_editor();
            }
        });


    }


  showHighlightButtonForSelection() {
    
    if (this.highlightButton) {
      this.highlightButton.remove();
      this.highlightButton = null;
    }
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) return;
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;
    
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
        //         console.log('[debug] 没有有效的选区');
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

            
            const groupId = 'note-group-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
            this._currentHighlightGroupId = groupId;

            
            this.wrapRangeWithSpan(range, this.createHighlightSpan(groupId));

            selection.removeAllRanges();
            const highlightElement = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');

            if (highlightElement) {

                storageHighlight(highlightElement, window.location.href);
            } else {
                console.error(`highlightElement is null for groupId: ${groupId}`);
            }
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
    
    const color = getDefaultColor();
    
    highlightSpan.style.backgroundColor = color;
    highlightSpan.setAttribute('data-color', color);
    if (groupId) highlightSpan.setAttribute('data-group-id', groupId);
    return highlightSpan;
  }


    wrapRangeWithSpan(range, highlightSpan) {
        try {
            
            const groupId = highlightSpan.getAttribute('data-group-id');
            if (this.isCrossBlockSelection(range)) {
                const color = highlightSpan.getAttribute('data-color') || getDefaultColor();
                
                this.wrapCrossBlockSelection(range, color, groupId);
            } else {
                
                const contents = range.extractContents();
                highlightSpan.appendChild(contents);
                range.insertNode(highlightSpan);
            }
            
            this.cleanupEmptyNodes(highlightSpan);
        } catch (error) {
      //       console.error('wrapRangeWithSpan 报错:', error);
            throw error;
        }
    }

  isCrossBlockSelection(range) {
    
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;
    
    
    if (startContainer === endContainer) {
      return false;
    }
    
    
    const nodes = [];
    let node = startContainer;
    
    while (node && node !== endContainer.nextSibling) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        nodes.push(node);
      }
      node = this.getNextNode(node, endContainer);
    }
    
    
    const blockElements = nodes.filter(node => 
      this.isBlockElement(node)
    );
    
    
    if (blockElements.length === 1) {
      const blockElement = blockElements[0];
      const startNode = range.startContainer;
      const endNode = range.endContainer;
      
      
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
            color = getDefaultColor();
        }
    //     console.log('[debug] wrapCrossBlockSelection 用的 color:', color);
        try {
            const textNodes = this.getTextNodesInRange(range);
            if (textNodes.length === 0) {
                this.fallbackHighlight(range, color);
                return;
            }
            const highlightSpans = [];
            textNodes.forEach(({node, startOffset, endOffset}) => {
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
      //       console.error('跨块级元素高亮失败，尝试备用方法:', error);
            this.fallbackHighlight(range, color);
        }
    }

    getTextNodesInRange(range) {
        const textNodes = [];
        const {startContainer, endContainer, startOffset, endOffset} = range;
        const ancestor = range.commonAncestorContainer;

    
    const walker = document.createTreeWalker(
      ancestor.nodeType === 1 ? ancestor : ancestor.parentNode,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          
          if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
          
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
                textNodes.push({node, startOffset: nodeStart, endOffset: nodeEnd});
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
    
    const selectedText = range.toString();
    if (!selectedText.trim()) return;
    
    
    if (!color) {
      color = getDefaultColor();
    }
    
    
    const textNode = document.createTextNode(selectedText);
    const highlightSpan = createHighlightSpanWithColor(color, this._currentHighlightGroupId, ++this.noteCounter);
    highlightSpan.appendChild(textNode);
    
    
    range.deleteContents();
    range.insertNode(highlightSpan);
  }

  getNodesInRange(range) {
    const nodes = [];
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;
    
    
    if (startContainer === endContainer) {
      nodes.push(startContainer);
      return nodes;
    }
    
    
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
        
        current.appendChild(next);
        next.parentNode.removeChild(next);
        highlightSpans.splice(i + 1, 1);
        i--; 
      }
    }
  }

  cleanupEmptyNodes(element) {
    
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

  
  showToolbarForHighlight(highlightElement, groupId,mouseEvent) {
    
    document.querySelectorAll('.html-note-toolbar-float, .note-editor, .color-picker-float').forEach(el => el.remove());
    
    
    const toolbar = document.createElement('div');
    toolbar.className = 'html-note-toolbar-float';
    let left, top;
    
    
    const rect = highlightElement.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    
    if (mouseEvent) {
      
      left = mouseEvent.clientX + scrollX - 90; 
      top = mouseEvent.clientY + scrollY - 50;
    } else {
      
      left = rect.left + scrollX + rect.width / 2 - 90;
      top = rect.top + scrollY - 50;
    }

    
    
    
    
    
    
    
    
    
    toolbar.style.left = `${left}px`;
    toolbar.style.top = `${top}px`;
    document.body.appendChild(toolbar);
    
    
    requestAnimationFrame(() => {
      toolbar.classList.add('show');
    });

        
        const colorBtn = document.createElement('button');
        colorBtn.className = 'toolbar-float-btn';
        colorBtn.title = '更改颜色';
        colorBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" fill="' + (highlightElement.getAttribute('data-color') || this.defaultColor) + '"/></svg>';
        colorBtn.onclick = (ev) => {
            ev.stopPropagation();
            this.showColorPickerForHighlight(highlightElement, toolbar);
        };

        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'toolbar-float-btn';
        copyBtn.title = '复制文本';
        copyBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="6" y="6" width="10" height="10" rx="2" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#bfc4d1" stroke-width="1.5"/></svg>';
        copyBtn.onclick = (ev) => {
            ev.stopPropagation();
            
            let text = '';
            if (groupId) {
                document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach(span => {
                    text += span.textContent;
                });
            } else {
                text = highlightElement.textContent;
            }
            navigator.clipboard.writeText(text);
            this.showNotification('已复制高亮文本');
        };
        
        const noteBtn = document.createElement('button');
        noteBtn.className = 'toolbar-float-btn';
        noteBtn.title = '添加/编辑笔记';
        noteBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="4" width="14" height="14" rx="4" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><text x="11" y="16" text-anchor="middle" font-size="12" fill="#bfc4d1">"</text></svg>';
        noteBtn.onclick = (ev) => {
            ev.stopPropagation();
            chrome.runtime.sendMessage({
                type: 'add_noteCard_to_mindMap',
                pageUrl: window.location.href,
                groupId: groupId
            });
        };
        
        const delBtn = document.createElement('button');
        delBtn.className = 'toolbar-float-btn';
        delBtn.title = '删除高亮';
        delBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="5" width="12" height="12" rx="3" fill="#fff" stroke="#e57373" stroke-width="1.5"/><line x1="8" y1="8" x2="14" y2="14" stroke="#e57373" stroke-width="2"/><line x1="14" y1="8" x2="8" y2="14" stroke="#e57373" stroke-width="2"/></svg>';
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (groupId) {
                
                document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach(span => {
                    this.removeHighlight(span);
                });
            } else {
                
                this.removeHighlight(highlightElement);
            }
            
            toolbar.remove();
            document.querySelectorAll('.note-editor').forEach(el => el.remove());
            document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
            
            if (this._toolbarCloseHandler) {
                document.removeEventListener('mousedown', this._toolbarCloseHandler);
                this._toolbarCloseHandler = null;
            }
            this.showNotification('高亮已删除');
        };

        
        toolbar.append(colorBtn, copyBtn, noteBtn, delBtn);
    
        
    
        if (this._toolbarCloseHandler) {
            document.removeEventListener('mousedown', this._toolbarCloseHandler);
        }

        
        this._toolbarCloseHandler = (ev) => {

            
            const isInToolbar = toolbar.contains(ev.target);
            const isInEditor = ev.target.closest('.note-editor');
            const isInColorPicker = ev.target.closest('.color-picker-float');

            if (!isInToolbar && !isInEditor && !isInColorPicker) {

                toolbar.remove();
                
                document.querySelectorAll('.note-editor').forEach(el => el.remove());
        //         console.log(`[debug] fuck u ')}`);

                
                document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
                
                document.removeEventListener('mousedown', this._toolbarCloseHandler);
                this._toolbarCloseHandler = null;
            }
        };

        
        document.addEventListener('mousedown', this._toolbarCloseHandler);
    }


  showColorPickerForHighlight(highlightElement, toolbar) {
    document.querySelectorAll('.color-picker-float').forEach(el => el.remove());
    
    const picker = document.createElement('div');
    picker.className = 'color-picker-float';
    console.log('[debug] showColorPickerForHighlight 用的 toolbar:');
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
        clearTimeout(hoverTimer);  
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
        clearTimeout(hoverTimer); 
      });
      
      swatch.addEventListener('mouseleave', () => {
        hoverTimer = setTimeout(() => {
          if (swatch.contains(setDefaultBtn)) {
            swatch.removeChild(setDefaultBtn);
          }
        }, 100);  
      });
      setDefaultBtn.onclick = (ev) => {

        ev.stopPropagation();
        this.setDefaultColor(color);

                this.showNotification('已设为默认颜色');
                picker.remove();
                swatch.removeChild(setDefaultBtn);
            };

     
      
      picker.appendChild(swatch);
    });
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    

    
    
    document.body.appendChild(picker);
    
    
    setTimeout(() => {
      document.addEventListener('mousedown', function closePicker(ev) {
        
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
    
    const contents = [];
    let child = highlightElement.firstChild;
    
    while (child) {
      const nextChild = child.nextSibling;
      contents.push(child);
      child = nextChild;
    }
    
    
    const parent = highlightElement.parentNode;
    contents.forEach(node => {
      parent.insertBefore(node, highlightElement);
    });
    
    
    parent.removeChild(highlightElement);
    
    
    this.normalizeTextNodes(parent);
    
    
    if (this._toolbarCloseHandler) {
      document.removeEventListener('mousedown', this._toolbarCloseHandler);
      this._toolbarCloseHandler = null;
    }
    
    remove_all_highlightElementStorage(window.location.href);
  }

  normalizeTextNodes(element) {
    
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
    
    
    for (let i = 0; i < textNodes.length - 1; i++) {
      const current = textNodes[i];
      const next = textNodes[i + 1];
      
      if (current.parentNode === next.parentNode && 
          current.nextSibling === next) {
        current.textContent += next.textContent;
        next.parentNode.removeChild(next);
        textNodes.splice(i + 1, 1);
        i--; 
      }
    }
  }


  restoreHighlights() {
    
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

  
  
  
    
  
  
  
  
  
    
  
  

  showNotification(message) {
    
    const existingNotification = document.querySelector('.html-note-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'html-note-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }
}


const highlighter = new HTMLNoteHighlighter();
window.HTMLNoteHighlighter = highlighter;
window.HTMLNoteHighlighter.showToolbarForHighlight = highlighter.showToolbarForHighlight.bind(highlighter);


function createHighlightSpanWithColor(color, groupId, noteCounter) {
  if (!color) {
    color = getDefaultColor();
  }

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


function changeColorbyGroupId(color, groupId) {
    
    const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);

    if (highlightElements.length === 0) {
    //     console.warn(`未找到groupId为"${groupId}"的高亮元素`);
        return;
    }

    
    highlightElements.forEach(highlightElement => {
        
        highlightElement.style.setProperty('background-color', color, 'important');
        
        highlightElement.setAttribute('data-color', color);
    });

    update_storage_color(groupId, color);
}


function createhighlightBotton(rect) {
    const btn = document.createElement('button');
    btn.className = 'html-note-highlight-btn';
    btn.title = '高亮所选文本';
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="14" width="14" height="3" rx="1.5" fill="#f7c2d6"/><rect x="6" y="3" width="8" height="10" rx="2" fill="#333"/></svg>';
    btn.style.position = 'fixed';
    btn.style.left = `${rect.left + rect.width / 2 - 16}px`;
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

function highlightElement_mouseOverHandler(e) {
    if (e.target.classList.contains('html-note-highlight')) {
        const groupId = e.target.getAttribute('data-group-id');
        if (groupId) {
            const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
            highlightElements.forEach(highlightElement => {
                highlightElement.classList.add('html-note-highlight-hover');
            })
        }
    }
}

function highlightElement_mouseOutHandler(e) {
    if (e.target.classList.contains('html-note-highlight')) {
        const groupId = e.target.getAttribute('data-group-id');
        if (groupId) {
            const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
            highlightElements.forEach(highlightElement => {
                highlightElement.classList.remove('html-note-highlight-hover');
            })
        }
    }
}

function storageHighlight(highlightElement, pageUrl) {
    const groupId = highlightElement.getAttribute('data-group-id');
    const highlightElement_data = highlightElement_dataStructure(highlightElement);
    if (!highlightElement_data) {
    //     console.log(`highlightElement_dataStructure is null for highlightElement: ${highlightElement}`);
        return;
    }

    chrome.storage.local.get(pageUrl, function (result) {
        let groupId_list = result[pageUrl];
        if (!groupId_list) {
            groupId_list = [groupId];
      //       console.log(`[debug] can not group id list : ${groupId_list}`);
        } else {
            groupId_list = update_groupId_list(groupId_list, groupId);
        }

    chrome.storage.local.set({
      [groupId]: highlightElement_data,
      [pageUrl]: groupId_list
   
  
  
    })
  })
  
  
  
  
  
  

  



    


}
function highlightElement_data_hash(element){
  const hash = CryptoJS.SHA256(element.innerText).toString();
  
  return hash;
}

function highlightElement_data(highlightElement){
  
  const parentNode = highlightElement.parentNode;
  if (parentNode){
//     console.log(`[debug] parentNode: ${parentNode.innerText}`);
    const hash_parentNode = highlightElement_data_hash(parentNode);
    
    const hash_highlightElement = highlightElement_data_hash(highlightElement);
    const index_highlightElement = parentNode.innerText.indexOf(highlightElement.innerText);
//     console.log(`[debug] parentNode.innerText.26:${parentNode.innerText.substring(index_highlightElement,index_highlightElement+highlightElement.innerText.length)}`);
//     console.log(`[debug] index_highlightElement: ${index_highlightElement}`);
    const color = highlightElement.getAttribute('data-color')||getDefaultColor();

    return {
      hash_parentNode: hash_parentNode,
      index_highlightElement: index_highlightElement,
      highlightElement_text: highlightElement.innerText,
      length: highlightElement.innerText.length,
      highlightElement_tag: highlightElement.tagName,
      parentNode_tag: parentNode.tagName,
    }
  }
  else{
//     console.log(`[debug] parentNode is null for highlightElement: ${highlightElement}`);
  }


}

function highlightElement_dataStructure(highlightElement) {
    const groupId = highlightElement.getAttribute('data-group-id');
    const highlightElements_group = [];
    if (groupId) {
        const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
        if (!highlightElements) {
            return null;
        }
        const note = highlightElements[0].getAttribute('data-note');
        highlightElements.forEach(highlightElement => {
            highlightElements_group.push(highlightElement_data(highlightElement));
        })
//         console.log(`[debug] type of highlightElements_group: ${Array.isArray(highlightElements_group)}`);
//         console.log(`[debug] highlightElements_group: ${highlightElements_group}`);
        const color = highlightElements[0].getAttribute('data-color') || getDefaultColor();
        return {
            groupId: groupId,
            highlightElements: highlightElements_group,
            note: note,
            color: color,
        }

    }
    return null;

}
function update_groupId_list(groupId_list, groupId){
//   console.log(`update_groupId_list: ${groupId_list}, ${groupId}`);
  if (!groupId_list){
    return null;
  }
  if(groupId_list.length === 0){
    groupId_list = [groupId];
    return groupId_list;
  }
  if (groupId_list.includes(groupId)){
    return groupId_list;
  }
  else{
    groupId_list.push(groupId);
  }
  
  return groupId_list;

}

function load_groupId_list(pageUrl) {
    chrome.storage.local.get(pageUrl, function (result) {
        const groupId_list = result[pageUrl];
        if (groupId_list) {
//             console.log(`load_groupId_list: ${groupId_list}`);
            load_groupId_list_Handler(groupId_list, pageUrl);

        } else {
//             console.log(`load_groupId_list failed: ${pageUrl}`);
            return null;
        }
    })

}
function load_highilightElement_data_Structure(groupId,pageUrl){
//   console.log(`load_highlightElement_data_Structure:`);
  chrome.storage.local.get(groupId, function(result){
    
    
    
    


//         console.log(`[debug] length of result[groupId].highlightElements: ${result[groupId].highlightElements.length}`);
        for (const highlightElement_dataSet of result[groupId].highlightElements) {
//             console.log(`[debug] highlightElement_dataSet: ${highlightElement_dataSet}`);
            const loose_flag = searchAndInsertHighlightElement(groupId, highlightElement_dataSet, result[groupId].note, result[groupId].color, null);
            if (!loose_flag) {
//                 console.log(`[debug] storage_loose_highlightElement: ${loose_flag}`);
                storage_loose_highlightElement(pageUrl, 1);
                break;
            }
        }

    })
}
function load_groupId_list_Handler(groupId_list,pageUrl){
 
  if (groupId_list){
//     console.log(`[debug] groupId_list: ${groupId_list}`);
    groupId_list.forEach(groupId=>{
      load_highilightElement_data_Structure(groupId,pageUrl);
    })
  }
  show_loose_highlightElement(pageUrl);
}
function searchAndInsertHighlightElement(groupId, highlightElement_dataSet, note,color,next_priority_parentNode){
//     console.log(`[debug] load_highilightElement_data_Handler: ${highlightElement_dataSet}`);
    const parent_tag = highlightElement_dataSet.parentNode_tag;
    const all_elements = document.querySelectorAll(parent_tag);
    if (all_elements.length === 0){
//       console.log(`[debug] all_elements is empty for parent_tag: ${parent_tag}`);
      return false;
    }
    for (const element of all_elements) {
      const element_hash = highlightElement_data_hash(element);
      
      if (element_hash === highlightElement_dataSet.hash_parentNode){
        const index_highlightElement = highlightElement_dataSet.index_highlightElement;
        const highlightElement_length = highlightElement_dataSet.length;
        const target_text = highlightElement_dataSet.highlightElement_text;
//         console.log(`[debug] element.outerHTML: ${element.outerHTML}`);
//         console.log(`[debug] target_text: ${target_text}`);
        
        
        
        
        
        if (element.innerText.substring(index_highlightElement,index_highlightElement+highlightElement_length).includes(target_text)){
          for (const node of element.childNodes){
            const target_node = find_textNode(node,target_text);
            if (target_node===null){
//               console.error(`[debug] target_node is null`);
              return false;
            }
            if (target_node.textContent.includes(target_text)){
//               console.log(`[debug] target_node.textContent: ${target_node.textContent}`);
              const index_target_text = target_node.textContent.indexOf(target_text);
              insert_highlightElement(target_text,index_target_text,target_node.textContent.length-index_target_text,color,groupId,target_node,note);
//               console.log(`[debug] target_node.textContent: ${target_node.textContent}`);
              return true;
            }
            else{
              continue;
          }
          
          
          
          }

          const string_content = element.innerText;
          const text_node = document.createTextNode(string_content);
          for (const node of element.childNodes){
            element.removeChild(node);
          }
          element.innerHTML = '';
          element.appendChild(text_node);
//           console.log(`target_text in searchAndInsertHighlightElement: ${target_text}`);
          insert_highlightElement(target_text,text_node.textContent.indexOf(target_text),target_text.length,color,groupId,text_node,note);
          return true;
        }
        else{
//           console.log(`[debug] target text :${target_text}`)
          console.error(`[debug] target_node.textContent.substring(index_highlightElement,index_highlightElement+highlightElement_length) is not equal to target_text: ${target_node.textContent.substring(index_highlightElement,index_highlightElement+highlightElement_length)}`);
          return false;
        }
      }
      else{
        
        
      }
    }

}
  
function getDefaultColor(){
  const storedColor = localStorage.getItem('html-note-default-color');
  return storedColor || '#ffeb3b';

}

function make_highlightElement(element, color) {
}

function find_textNode(element, text) {
    if (!element) {
        return null;
    }
    if (element.nodeType === Node.TEXT_NODE) {
        return element;
    }
    const nodes = Array.from(element.childNodes);
    if (nodes.length === 0) {
        return null;
    }
    for (const node of nodes) {
        const found_node = find_textNode(node, text);
        if (found_node) {
            return found_node;
        }
    }
    return null;
}
function insert_highlightElement(target_text,index_highlightElement,highlightElement_length,color,groupId,target_node,note){
  const highlightSpan = createHighlightSpanWithColor(color,groupId,0);
  highlightSpan.textContent = target_text;
  highlightSpan.setAttribute('data-note',note);
//   console.log(`[debug] highlightSpan.getAttribute('data-note'): ${highlightSpan.getAttribute('data-note')}`);
  const element = target_node.parentNode;
  if (!element){
    console.error(`[debug] element is null`);
    return;
  }
//   console.log(`[debug] element.querySelectorAll('data-group-id').length: ${element.querySelectorAll('data-group-id').length}`);
  if (index_highlightElement > 0 && element.querySelectorAll('data-group-id').length === 0){
    const before_text = target_node.textContent.substring(0,index_highlightElement);
    const before_node = document.createTextNode(before_text);
    
    element.insertBefore(before_node,target_node);
  }
  highlightSpan.setAttribute('data-group-id',groupId);
  element.insertBefore(highlightSpan,target_node);
  
  
  
  
  
  
  
  
  
  
  if (target_node.textContent.indexOf(target_text)+target_text.length < target_node.textContent.length){
    const after_text = target_node.textContent.substring(target_node.textContent.indexOf(target_text)+target_text.length);
    const after_node = document.createTextNode(after_text);
    element.insertBefore(after_node,highlightSpan.nextSibling);
    
  }
  
  
  element.removeChild(target_node);
  
  

}

function remove_highlightElementStorage(highlightElement, pageUrl) {
    const groupId = highlightElement.getAttribute('data-group-id');

    chrome.storage.local.remove(groupId, function (result) {
        if (result) {
            remove_groupIdFromListStorage(pageUrl, groupId);
        }
    })
}

find_target_text_in_node

function remove_groupIdFromListStorage(pageUrl, groupId) {
    chrome.storage.local.get(pageUrl, function (result) {
        if (result) {
            const groupId_list = result[pageUrl];
            if (groupId_list) {
                if (groupId_list.includes(groupId)) {
                    groupId_list.splice(groupId_list.indexOf(groupId), 1);
                    chrome.storage.local.set({
                        [pageUrl]: groupId_list
                    })
                }
            }
        }
    })
}
function remove_all_highlightElementStorage(pageUrl){
  chrome.storage.local.get(pageUrl, function(result){
    if (result){
      const groupId_list = result[pageUrl];
      if (groupId_list){
        groupId_list.forEach(groupId=>{
          chrome.storage.local.remove(groupId, function(result){
            if (result){
//               console.log(`[debug] remove_all_highlightElementStorage: ${result}`);
            }
          })
        })
      }
    }
  })
  chrome.storage.local.remove(pageUrl, function(result){
    if (result){
//       console.log(`[debug] remove_all_highlightElementStorage: ${result}`);
    }
  })
}
function find_target_text_in_node(target_text,target_node,element,index_highlightElement,highlightElement_length,groupId,color){
  const highlightSpan = createHighlightSpanWithColor(color,groupId,0);
//   console.log(`target text in find_target_text_in_node: ${target_text}`);
//   console.log(`target_node.textContent in find_target_text_in_node: ${target_node.textContent}`);
//   console.log(`target_node.textContent.includes(target_text): ${target_node.textContent.includes(target_text)}`);
//   console.log(`target_node.textContent.length: ${target_node.textContent.length}`);
//   console.log(`target_text.length: ${target_text.length}`);
  if (target_node.textContent.includes(target_text)&&target_node.textContent.length === target_text.length){
    insert_highlightElement(target_text,index_highlightElement,highlightElement_length,color,groupId,target_node);
    return;
  }
  else{
    
  }
  
  return;
}
function find_target_node(target_text,element,index_highlightElement,highlightElement_length,groupId,color){
  const nodes = Array.from(element.childNodes);
  let count = 0;
  for (const node of nodes){
    if (node.nodeType === Node.TEXT_NODE){
      count = parse_fragement_element(node, index_highlightElement,highlightElement_length,color,groupId,count);
      
      continue;
    }
    if (node.nodeType === Node.ELEMENT_NODE){
      found_node = find_textNode(node,target_text);
      if (found_node){
//         console.log(`index_highlightElement: ${index_highlightElement}`);
        count = parse_fragement_element(found_node, index_highlightElement,highlightElement_length,color,groupId,count);
        continue;
      }
    }
    
}}
function parse_fragement_element(node, index_highlightElement,highlightElement_length,color,groupId,count){
//   console.log(`[debug] parse_fragement_element: ${node.textContent}`);
  if (count+node.textContent.length > index_highlightElement){
    let preNode_index = index_highlightElement-count;
    if (preNode_index <0){
      preNode_index = 0;
    }
    const pre_target_text = node.textContent.substring(preNode_index);
    let pre_text_length = 0;
    const target_element_end_index = index_highlightElement+highlightElement_length;
    const current_node_end_index = count+pre_target_text.length;
//     console.log(`[debug] current_node_end_index: ${current_node_end_index}`);
//     console.log(`[debug] target_element_end_index: ${target_element_end_index}`);
//     console.log(`[debug] pre_target_text: ${pre_target_text.length}`);
//     console.log(`[debug] preNode_index: ${preNode_index}`);
//     console.log(`[debug] count: ${count}`);
//     console.log(`[debug] index_highlightElement: ${index_highlightElement}`);
    if (current_node_end_index > target_element_end_index){
      pre_text_length = target_element_end_index-count;
//       console.log(`[debug] pre_text_length: ${pre_text_length}`);
    }
    else{
      pre_text_length = pre_target_text.length-preNode_index;
    }
    insert_highlightElement(pre_target_text,preNode_index,pre_text_length,color,groupId,node);
    return count+pre_text_length;
  }
  count += node.textContent.length;
  return count;
}
function loop_textNode(target_text,target_node,element,index_highlightElement,highlightElement_length,groupId,color){
  const nodes = Array.from(element.childNodes);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

    
  
  const already_inserted_node = element.querySelectorAll('.html-note-highlight');
  if (already_inserted_node.length > 0){
    const nodes  = Array.from(element.childNodes);
    for (const node of nodes){
      if (node.tagName === 'SPAN'){
        if (node.classList.contains('html-note-highlight')){
          continue;
        }
      }
      if (node.textContent.includes(target_text)){
        insert_highlightElement(target_text,index_highlightElement,highlightElement_length,color,groupId,node);
        return true;
      }
    }
  }
  else{
    const string_content  = element.innerText;
    const text_node = document.createTextNode(string_content);
    for (const node of nodes){
      element.removeChild(node);
    }
    element.appendChild(text_node);
    if (element.innerText.includes(target_text)){
      insert_highlightElement(target_text,index_highlightElement,highlightElement_length,color,groupId,text_node);
      return true;
    }
    return false;

    }


}
function insert_highlightElement_fragement(target_text,target_node,element,index_highlightElement,highlightElement_length,groupId,color){
  const highlightSpan = createHighlightSpanWithColor(color,groupId,0);
//   console.log(`[debug] insert_highlightElement_fragement: ${target_text}`);
//   console.log(`[debug] target_node.textContent in insert_highlightElement_fragement: ${target_node.textContent}`);
//   console.log(`[debug] element.innerText in insert_highlightElement_fragement: ${element.innerText}`);
//   console.log(`[debug] index_highlightElement in insert_highlightElement_fragement: ${index_highlightElement}`);
//   console.log(`[debug] highlightElement_length in insert_highlightElement_fragement: ${highlightElement_length}`);
  const element_innerText = element.innerText;
  if (element_innerText.substring(index_highlightElement,index_highlightElement+highlightElement_length).includes(target_node.textContent)){
    highlightSpan.textContent = target_node.textContent;
    element.insertBefore(highlightSpan,target_node.nextSibling);
    element.removeChild(target_node);
    return;
  }
}

function find_textNode_in_element(target_node) {
    if (target_node.nodeType === Node.ELEMENT_NODE) {
        return target_node;
    } else {
        return find_textNode_in_element(target_node.parentNode);
    }

}

function storage_loose_highlightElement(pageUrl, loose_amount) {
    const string_loose_key = 'loose_highlightElement' + pageUrl;
    chrome.storage.local.get(string_loose_key, function (result) {
        if (result) {
            const current_loose_amount = result[string_loose_key] + loose_amount;
            chrome.storage.local.set({
                [string_loose_key]: current_loose_amount
            })
        } else {// if there is no loose key
            chrome.storage.local.set({
                [string_loose_key]: 0
            })
        }


    })
}
function show_loose_highlightElement(pageUrl){
  const string_loose_key =  'loose_highlightElement'+pageUrl;
  chrome.storage.local.get(string_loose_key, function(result){
    if (result){
     if (result[string_loose_key] > 0){
//       console.log(`[debug] show_loose_highlightElement: ${result[string_loose_key]}`);
      window.showNotification(`[debug] show_loose_highlightElement: ${result[string_loose_key]}`);
     }

        }
    })

}

function update_storage_color(groupId, color) {
    chrome.storage.local.get(groupId, function (result) {
        if (result) {
            result[groupId].color = color;
            chrome.storage.local.set({
                [groupId]: result[groupId]
            })
        }
    })
}

function groupId_generator(highlightElement) {
    const key_groupId = 'groupId';
    chrome.storage.local.get(key_groupId, function (result) {
        if (result) {
            const groupId_current = result[key_groupId] + 1;
            highlightElement.setAttribute('data-group-id', groupId_current);
            chrome.storage.local.set({
                [key_groupId]: groupId_current
            })
            return groupId_current;
        } else {
            const groupId_current = 0;
            highlightElement.setAttribute('data-group-id', groupId_current);
            chrome.storage.local.set({
                [key_groupId]: groupId_current
            })
            return groupId_current;
        }
    })
}
function remove_content_editor() {
    const content_editor = document.querySelector('.note-editor');
    if (!content_editor) {
        return;
    }
    const groupId = content_editor.getAttribute('data-group-id');
    const textArea = document.querySelector('#editor');
    if (!textArea) {
        return;
    }
    // find highlight element by groupId
    const highlightElement = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
    if (!highlightElement) {
        return;
    }
    const tags = document.querySelector('.note-editor-tags');
    saveNotesContent(textArea, tags, groupId, window.location.href);
    document.querySelectorAll('.html-note-toolbar-float, .note-editor, .color-picker-float').forEach(el => el.remove());


}
