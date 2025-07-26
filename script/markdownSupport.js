// markdown.js

function renderMarkdown(textArea,onMarkdownChange) {
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
                        let prevLineNode = lineNode.previousSibling;
                        console.log("lineNode.parentNode",lineNode.parentNode);
                        console.log("prevLineNode",prevLineNode);
                        console.log("lineNode",lineNode);
                        // if (textArea.innerText != ''){
                        //     // first line of textArea
                        //     prevLineNode = document.createElement('div');
                        //     prevLineNode.innerText = textArea.innerText;
                        //     textArea.innerText = '';
                        //     textArea.appendChild(prevLineNode);
                        //     textArea.appendChild(lineNode);
                        //     lineNode.previousSibling = prevLineNode;
                        //     console.log("prevLineNode",prevLineNode);
                        //     console.log("lineNode",lineNode);
                        //     console.log("lineNode.parentNode",lineNode.parentNode);
                        // }
                        if (prevLineNode && prevLineNode.innerText) {
                            //FIXME: 这里markdown 无论如何都是空的
                            console.log("enter the prevLineNode")
                            let markdown = prevLineNode.innerText;
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
                            //const html = DOMPurify.sanitize(marked.parse(markdown));
                            const renderer={
                                heading({ tokens, depth }) {
                                    const text = this.parser.parseInline(tokens);
                                    if (depth === 1) {
                                        return `<div class="md-h1">${text}</div>`;
                                    }
                                
                                    return `<h${depth}>${text}</h${depth}>`;
                                  }
                                };
                            
                            window.marked.use({ renderer });
                            const html = window.marked.parse(markdown);
                            console.log("Generated HTML:", html);
                            
                            let temp = document.createElement('div');
                            temp.innerHTML = html;
                            
                            if (temp.firstChild) {
                                temp.firstChild.classList.add("markdown-temp");
                                temp.firstChild.setAttribute("mardown-data",markdown);
                                temp.firstChild.tabIndex = 0;
                                temp.firstChild.contentEditable = true;
                                textArea.insertBefore(temp.firstChild, lineNode);
                                textArea.removeChild(prevLineNode);
                                
//                                 console.log("textArea.innerHTML",textArea.innerHTML);
//                                 console.log("textArea.firstChild",textArea.firstChild);
//                                 console.log("textArea.firstChild.innerHTML",textArea.firstChild.innerHTML);
//                                 console.log("textArea.innerHTML",textArea.innerHTML);
                                console.log("textArea",textArea)
                                const allTemps = textArea.querySelectorAll(".markdown-temp");
                                console.log("from the second row")
                                console.log("allTemps",allTemps);
//                                 console.log("temp.getAttribute('mardown-data')",temp.getAttribute('mardown-data'));
                                if (onMarkdownChange){
                                    onMarkdownChange(allTemps);
                                }
                            }
                        }
                        else if (prevLineNode.nodeType === Node.TEXT_NODE && lineNode){
                            // first line of textArea
                            console.log("enter the TEXT_NODE")
                            const markdown = prevLineNode.textContent;
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
                            const renderer={
                                heading({ tokens, depth }) {
                                    const text = this.parser.parseInline(tokens);
                                    if (depth === 1) {
                                        return `<div class="md-h1">${text}</div>`;
                                    }
                                
                                    return `<h${depth}>${text}</h${depth}>`;
                                  }
                                };
                            

                            window.marked.use({ renderer });
                            const html = window.marked.parse(markdown);
                            console.log("Generated HTML:", html);
                            
                            let temp = document.createElement('div');
                            temp.innerHTML = html;
                            console.log("temp.innerHTML",temp.innerHTML);
                            console.log("temp.firstChild",temp.firstChild);
                            console.log("temp.firstChild.innerHTML",temp.firstChild.innerHTML);
                            temp.setAttribute("mardown-data",markdown);
                            // set up temp class name
                            
                            
                            if (temp.firstChild) {
                                temp.firstChild.classList.add("markdown-temp");
                                temp.firstChild.setAttribute("mardown-data",markdown);
                                temp.firstChild.tabIndex = 0;
                                temp.firstChild.contentEditable = true;
                                textArea.insertBefore(temp.firstChild, lineNode);
                                textArea.removeChild(prevLineNode);
//                                 console.log("textArea.innerHTML",textArea.innerHTML);
//                                 console.log("textArea.firstChild",textArea.firstChild);
//                                 console.log("textArea.firstChild.innerHTML",textArea.firstChild.innerHTML);
//                                 console.log("textArea.innerHTML",textArea.innerHTML);
//                                 console.log("textArea",textArea)
                                const allTemps = textArea.querySelectorAll(".markdown-temp");
//                                 console.log("from the first row")
//                                 console.log("allTemps",allTemps);
//                                 console.log("temp",temp);
//                                 console.log("temp.getAttribute('mardown-data')",temp.getAttribute('mardown-data'));
                                if (onMarkdownChange){
                                    onMarkdownChange(allTemps);
                                }
                            }
                        }
                        else{
                            console.log("error on processing markdown");
                            window.alert("error on processing markdown");
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

function showOriginalMarkdown(allTemps,textArea){
    console.log("showOriginalMarkdown");
    console.log("allTemps",allTemps);
    allTemps.forEach((temp) => {
        console.log("temp",temp);
        console.log("temp.getAttribute('mardown-data')",temp.getAttribute('mardown-data'));
    });
    // temp.tabIndex = 0; // 👈 使 div 可聚焦
    // temp.contentEditable = true; // （可选）如果你希望能编辑
    // console.log("temp.innerHtml",temp.innerHTML);
   
    monitorInsertIn(allTemps,textArea);
    
    // if temp has event listener, remove it
}

// 清理函数，移除事件监听器
function cleanupMarkdownListeners(textArea) {
    if (textArea._selectionChangeHandler) {
        document.removeEventListener('selectionchange', textArea._selectionChangeHandler);
        delete textArea._selectionChangeHandler;
    }
    
    if (textArea._inputHandler) {
        textArea.removeEventListener('input', textArea._inputHandler);
        delete textArea._inputHandler;
    }
}

function monitorInsertIn(allTemps,textArea) {
    // 移除之前可能存在的selectionchange监听器
    if (textArea._selectionChangeHandler) {
        document.removeEventListener('selectionchange', textArea._selectionChangeHandler);
    }
    
    // 创建新的处理函数
    textArea._selectionChangeHandler = (() => {
        let timeoutId;
        return () => {
            // 添加防抖，避免频繁触发
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const selection = window.getSelection();
                if (!selection.rangeCount) return;

                const range = selection.getRangeAt(0);
                const node = range.startContainer;
                
                // 动态获取最新的markdown-temp元素
                const currentAllTemps = textArea.querySelectorAll(".markdown-temp");
                
                currentAllTemps.forEach((temp) => {
                    if (temp.contains(node)) {
                        console.log("🟢 insertation is in the temp");
                        const temp_text = document.createElement('div');
                        temp_text.innerHTML = temp.getAttribute('mardown-data');
                        if (temp_text.firstChild){
                            textArea.insertBefore(temp_text.firstChild,temp);
                            textArea.removeChild(temp);
                            console.log("textArea",textArea);
                            console.log("temp_text",temp_text);
                        }
                    } else {
                        console.log("🔴 insertation is not in the temp");
                    }
                });
            }, 100); // 100ms防抖
        };
    })();
    
    document.addEventListener('selectionchange', textArea._selectionChangeHandler);
}
function loadAllMarkdown(textArea){
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    let markdown = "";
    allTemps.forEach((temp) => {
        markdown += temp.getAttribute('mardown-data') + "\n";
    });
    return markdown;
}
function parseAllDataNote(currentNote,textArea){
    // 清空textArea内容，避免重复添加
    //textArea.innerHTML = '';
    
    // split currentNote by \n
    const lines = currentNote.split('\n');
    lines.forEach((line) => {
        // if line is not empty, parse it
        console.log("line",line);
        if (line.trim() == ''){
            const temp = document.createElement('div');
            temp.innerHTML = line;
            temp.classList.add("markdown-temp");
            temp.setAttribute("mardown-data",line);
            temp.tabIndex = 0;
            temp.contentEditable = true;
            textArea.appendChild(temp);
        }
        else{
            try {
                const PurifiedNote = window.marked.parse(line);
                console.log("PurifiedNote",PurifiedNote);
                const temp = document.createElement('div');
                temp.innerHTML = PurifiedNote;
                if (temp.firstChild){
                    temp.firstChild.setAttribute("mardown-data",line);
                    temp.firstChild.tabIndex = 0;
                    temp.firstChild.contentEditable = true;
                    temp.firstChild.classList.add("markdown-temp");
                    console.log("temp",temp);
                    console.log("temp.firstChild",temp.firstChild);
                    console.log("temp.firstChild.innerHTML",temp.firstChild.innerHTML);
                    console.log(' 🔴 try to append temp.firstChild to textArea');
                    console.log("temp nodeType",temp.firstChild.nodeType);
                    textArea.appendChild(temp.firstChild);
                    console.log("textArea & purify notes",textArea);
                }
                else{
                    console.log("temp.firstChild is null");
                    temp.setAttribute("mardown-data",line);
                    temp.tabIndex = 0;
                    temp.contentEditable = true;
                    temp.classList.add("markdown-temp");
                    textArea.appendChild(temp);
                }
            } catch (error) {
                console.error("Error parsing markdown line:", line, error);
                // 如果解析失败，直接添加原始文本
                const temp = document.createElement('div');
                temp.innerHTML = line;
                temp.classList.add("markdown-temp");
                temp.setAttribute("mardown-data",line);
                temp.tabIndex = 0;
                temp.contentEditable = true;
                textArea.appendChild(temp);
            }
        }
        
        console.log("textArea",textArea);
    });
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    console.log("parseAllDataNote完成，找到", allTemps.length, "个markdown-temp元素");
    monitorInsertIn(allTemps,textArea);
    return allTemps;
}