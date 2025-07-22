// markdown.js

function renderMarkdown(textArea) {
    console.log("renderMarkdown");
    try {
        console.log("textArea", textArea);
        
        if (!textArea) {
            console.error("textArea is null or undefined");
            return;
        }
        
        textArea.addEventListener("keydown", (e) => {
            //console.log("e.key", e.key);
            if (e.key === 'Enter') {
                // 延迟一帧等待 DOM 插入新行
                setTimeout(() => {
                    try {
                        const sel = window.getSelection();
                        if (!sel.rangeCount) return;
                        
                        const range = sel.getRangeAt(0);
                        const container = range.startContainer;
                        
                        // 获取上一行内容（可能是 textNode 或 <div>）
                        let lineNode = container;
                        // 向上查找，直到 lineNode 是 textArea 的直接子节点
                        while (lineNode && lineNode.parentNode !== textArea) {
                        lineNode = lineNode.parentNode;
                        }
                        if (!lineNode || lineNode.parentNode !== textArea) {
                            console.log("there is no lineNode")
                        // 没找到合适的节点，直接返回
                        return;
                        }
                        
                        if (lineNode && lineNode.innerText) {
                            //FIXME: 这里markdown 无论如何都是空的
                            const markdown = lineNode.innerText;
                            console.log("Processing markdown:", markdown);
                            
                            // 检查marked和DOMPurify是否可用
                            if (typeof marked === 'undefined') {
                                console.error("marked.js is not loaded");
                                return;
                            }
                            
                            if (typeof DOMPurify === 'undefined') {
                                console.error("DOMPurify is not loaded");
                                return;
                            }
                            console.log("process markdown")
                            const html = DOMPurify.sanitize(marked.parse(markdown));
                            console.log("Generated HTML:", html);
                            
                            const temp = document.createElement('div');
                            temp.innerHTML = html;
                            
                            if (temp.firstChild) {
                                textArea.insertBefore(temp.firstChild, lineNode);
                                textArea.removeChild(lineNode);
                            }
                        }
                    } catch (error) {
                        console.error("Error processing markdown:", error);
                    }
                }, 0);
            }
        });
    } catch (e) {
        console.error("Markdown 渲染失败", e);
    }
}
  