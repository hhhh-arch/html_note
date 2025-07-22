// markdown.js
function renderMarkdown(textArea) {
    try {
        console.log("textArea",textArea);
      textArea.addEventListener("keydown",(e)=>{
        console.log("e.key",e.key);
        if (e.key === 'Enter') {
            // 延迟一帧等待 DOM 插入新行
            setTimeout(() => {
              const sel = window.getSelection();
              const range = sel.getRangeAt(0);
              const container = range.startContainer;
        
              // 获取上一行内容（可能是 textNode 或 <div>）
              let lineNode = container;
              while (lineNode && lineNode.nodeType !== 1 && lineNode.parentNode !== editor) {
                lineNode = lineNode.parentNode;
              }
        
              if (lineNode && lineNode.innerText.trim()) {
                const markdown = lineNode.innerText;
                const html = DOMPurify.sanitize(marked.parse(markdown));
        
                const temp = document.createElement('div');
                temp.innerHTML = html;
                textArea.insertBefore(temp.firstChild, lineNode);
                //console.log("temp.firstChild",temp.firstChild);
                textArea.removeChild(lineNode);
              }
            }, 0);
          }
        });
      } catch (e) {
        console.error("Markdown 渲染失败", e);
        return text;
    }
  }
  