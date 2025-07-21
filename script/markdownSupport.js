// markdown.js
function renderMarkdown(text) {
    try {

      return window.marked.parse("text");  // ✅ 注意这里：不用 import，直接用 window.marked
    
    } catch (e) {
      console.error("Markdown 渲染失败", e);
      return text;
    }
  }
  