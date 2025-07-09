// HTML Note Highlighter - Popup Script
// 处理弹出界面的交互逻辑

class PopupManager {
  constructor() {
    this.init();
  }

  async init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
    } else {
      this.setupEventListeners();
    }
    
    // 初始化状态
    await this.updateStatus();
  }

  setupEventListeners() {
    // 切换高亮模式按钮
    const toggleBtn = document.getElementById('toggleHighlight');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleHighlightMode());
    }

    // 保存页面按钮
    const saveBtn = document.getElementById('savePage');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.savePage());
    }

    // 清除所有高亮按钮
    const clearBtn = document.getElementById('clearAll');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearAllHighlights());
    }

    // 高亮模式开关
    const highlightModeCheckbox = document.getElementById('highlightMode');
    if (highlightModeCheckbox) {
      highlightModeCheckbox.addEventListener('change', (e) => {
        this.setHighlightMode(e.target.checked);
      });
    }

    // 定期更新状态
    setInterval(() => this.updateStatus(), 1000);
  }

  async toggleHighlightMode() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          if (window.HTMLNoteHighlighter) {
            window.HTMLNoteHighlighter.toggleHighlightMode();
            return window.HTMLNoteHighlighter.isActive;
          }
          return false;
        }
      });
      
      // 更新状态
      await this.updateStatus();
      
    } catch (error) {
      console.error('切换高亮模式失败:', error);
      this.showError('无法切换高亮模式，请刷新页面后重试');
    }
  }

  async savePage() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          if (window.HTMLNoteHighlighter) {
            window.HTMLNoteHighlighter.savePage();
            return true;
          }
          return false;
        }
      });
      
      this.showSuccess('页面保存成功！');
      
    } catch (error) {
      console.error('保存页面失败:', error);
      this.showError('保存页面失败，请重试');
    }
  }

  async clearAllHighlights() {
    if (!confirm('确定要清除所有高亮吗？此操作不可撤销。')) {
      return;
    }

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          if (window.HTMLNoteHighlighter) {
            const highlights = document.querySelectorAll('.html-note-highlight');
            highlights.forEach(highlight => {
              const parent = highlight.parentNode;
              while (highlight.firstChild) {
                parent.insertBefore(highlight.firstChild, highlight);
              }
              parent.removeChild(highlight);
            });
            return highlights.length;
          }
          return 0;
        }
      });
      
      this.showSuccess('所有高亮已清除');
      await this.updateStatus();
      
    } catch (error) {
      console.error('清除高亮失败:', error);
      this.showError('清除高亮失败，请重试');
    }
  }

  async setHighlightMode(enabled) {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: (enabled) => {
          if (window.HTMLNoteHighlighter) {
            if (enabled && !window.HTMLNoteHighlighter.isActive) {
              window.HTMLNoteHighlighter.toggleHighlightMode();
            } else if (!enabled && window.HTMLNoteHighlighter.isActive) {
              window.HTMLNoteHighlighter.toggleHighlightMode();
            }
            return window.HTMLNoteHighlighter.isActive;
          }
          return false;
        },
        args: [enabled]
      });
      
    } catch (error) {
      console.error('设置高亮模式失败:', error);
      this.showError('无法设置高亮模式');
    }
  }

  async updateStatus() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          if (window.HTMLNoteHighlighter) {
            const highlights = document.querySelectorAll('.html-note-highlight');
            const notes = Array.from(highlights).filter(h => h.getAttribute('data-note'));
            
            return {
              isActive: window.HTMLNoteHighlighter.isActive,
              highlightCount: highlights.length,
              noteCount: notes.length
            };
          }
          return {
            isActive: false,
            highlightCount: 0,
            noteCount: 0
          };
        }
      });

      if (results && results[0] && results[0].result) {
        const status = results[0].result;
        
        // 更新高亮模式状态
        const highlightModeCheckbox = document.getElementById('highlightMode');
        if (highlightModeCheckbox) {
          highlightModeCheckbox.checked = status.isActive;
        }
        
        // 更新计数
        const highlightCountElement = document.getElementById('highlightCount');
        if (highlightCountElement) {
          highlightCountElement.textContent = status.highlightCount;
        }
        
        const noteCountElement = document.getElementById('noteCount');
        if (noteCountElement) {
          noteCountElement.textContent = status.noteCount;
        }
      }
      
    } catch (error) {
      console.error('更新状态失败:', error);
      // 静默处理错误，不影响用户体验
    }
  }

  showSuccess(message) {
    this.showNotification(message, 'success');
  }

  showError(message) {
    this.showNotification(message, 'error');
  }

  showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `popup-notification ${type}`;
    notification.textContent = message;
    
    // 样式
    notification.style.cssText = `
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 10000;
      animation: slideInDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }
}

// 初始化弹出界面管理器
const popupManager = new PopupManager();

// 导出到全局作用域（用于调试）
window.PopupManager = popupManager; 