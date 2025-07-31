// markdown.js

function markdownInputMonitor(textArea) {
    console.log("renderMarkdown");
    try {
        console.log("textArea", textArea);
        
        if (!textArea) {
            console.error("textArea is null or undefined");
            return;
        }
        const textArea_children = textArea.querySelectorAll("div");
        
        let boundCount = 0;
        textArea_children.forEach((child, index) => {
            if (child.getAttribute('inputEventLiscener')==='false'){
                
                child.addEventListener("keydown", (e) => {
                    if (e.key === 'Enter') {
                        // 阻止 Enter 键的默认行为，避免自动插入 <br>
                        e.preventDefault();
                        
                        renderMarkdown(textArea,child,allTemps=>{
                            //console.log("temp",temp)
                        
                            monitorInsertIn(allTemps,textArea);
                          });
                        console.log('🔴 textArea in markdownInputMonitor',textArea);
                        const newContainer = createAnNewContainer(textArea);
                    }
                });
                child.setAttribute('inputEventLiscener','true');
            }
        });
        console.log('[debug] textArea in markdownInputMonitor',textArea);
    }
    catch (e) {
        console.error("Markdown 渲染失败", e);
    }
}
function createAnNewContainer(textArea){
    const newContainer = document.createElement('div');
    newContainer.tabIndex = 0;
    newContainer.contentEditable = true;
    newContainer.setAttribute('inputEventLiscener','false');
    newContainer.className = 'note-editor-textarea-div';
    textArea.appendChild(newContainer);
    newContainer.focus();
    //onNewContainer(newContainer);
    // 不要在这里调用 markdownInputMonitor，避免重复绑定事件
    markdownInputMonitor(textArea);
    return newContainer;
}
function createAnNewContainerWithNotes(textArea, markdown_data){
    const newContainer = document.createElement('div');
    newContainer.tabIndex = 0;
    newContainer.contentEditable = true;
    newContainer.setAttribute('inputEventLiscener','false');
    newContainer.className = 'note-editor-textarea-div';
    newContainer.innerHTML = markdown_data;
    
    return newContainer;
}

function showOriginalMarkdown(temp,textArea){
    const newContainer = createAnNewContainerWithNotes(textArea,temp.getAttribute('mardown-data'));
    // console.log("[debug] type of temp",typeof temp);
    // console.log("[debug] temp.nodeType",temp.nodeType);
    // console.log("[debug] temp.parentNode",temp.parentNode);
    textArea.insertBefore(newContainer,temp);
    textArea.removeChild(temp);
    //monitorInsertIn(newContainer,textArea);
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    monitorInsertIn(allTemps,textArea);
}
function createNewDOMElement(markdown, markdown_data){
    const newDOMElement = document.createElement('div');
    if (markdown.includes('<div class="md-h1">')){
        newDOMElement.innerHTML = markdown;
        if (newDOMElement.firstChild){
            newDOMElement.firstChild.setAttribute('mardown-data',markdown_data);
            newDOMElement.firstChild.classList.add('markdown-temp');
            newDOMElement.firstChild.tabIndex = 0;
            newDOMElement.firstChild.contentEditable = true;
            return newDOMElement.firstChild;
        }
    }
    else{
        newDOMElement.innerHTML = markdown;
        if (newDOMElement.firstChild){
            newDOMElement.firstChild.setAttribute('mardown-data',markdown_data);
            newDOMElement.firstChild.classList.add('markdown-temp');
            newDOMElement.firstChild.tabIndex = 0;
            newDOMElement.firstChild.contentEditable = true;
            return newDOMElement.firstChild;
        }
    }
    return newDOMElement;
}
function renderMarkdown(textArea,child,onMarkdownChange){
    setTimeout(() => {
        try {
            if (child.innerHTML == ''){
                return;
            }
            if (child.parentNode != textArea){
                console.log("child.parentNode != textArea");
                return;
            }
            if (!checkPackage()){
                return;
            }
            markdownModify();
            // 清理可能的 <br> 标签
            const markdown_data = child.innerText;
            child.setAttribute('markdown-data',child.innerText);
            const markdown = marked.parse(child.innerText);
            const newDOMElement = createNewDOMElement(markdown,markdown_data);
            textArea.insertBefore(newDOMElement,child);
            textArea.removeChild(child);
            console.log("[debug] markdown.typeOf",typeof markdown);

            const allTemps = textArea.querySelectorAll(".markdown-temp");
            onMarkdownChange(allTemps);
            


  
            

            

            

        }
        catch (e) {
            console.error("Error rendering markdown:", e);
        }
    }, 100);
}

// function showOriginalMarkdown(allTemps,lastLine,textArea){
//     try{
//     console.log("showOriginalMarkdown");
//     console.log("allTemps",allTemps);
//     allTemps.forEach((temp) => {
//         console.log("temp",temp);
//         console.log("temp.getAttribute('mardown-data')",temp.getAttribute('mardown-data'));
//     });
//     const lastLine_new = document.createElement('div');
//     lastLine_new.innerHTML = lastLine.getAttribute('mardown-data');
//     lastLine_new.tabIndex = 0;
//     lastLine_new.contentEditable = true;
//     if (lastLine.innerHTML == '' || lastLine.innerHTML == '<br>'){
//         lastLine_new.innerHTML = '<br>';
//     }
//     else{
//         lastLine_new.innerHTML = lastLine.getAttribute('mardown-data');
//     }
//     textArea.insertBefore(lastLine_new,lastLine);
//     textArea.removeChild(lastLine);
//     console.log("!!! lastLine_show original markdown")
//     allTemps.forEach((temp) => {
//         console.log("temp",temp);
//     });
//         monitorInsertIn(allTemps,textArea);
//         return lastLine_new;
//     }
//     catch (e) {
//         console.error("Error showing original markdown:", e);
//     }
    // temp.tabIndex = 0; // 👈 使 div 可聚焦
    // temp.contentEditable = true; // （可选）如果你希望能编辑
    // console.log("temp.innerHtml",temp.innerHTML);
    //TODO: function of showing a single line of original markdown and add event listener to it
    // monitorInsertIn(allTemps,textArea);
    
    // if temp has event listener, remove it
// }

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
    //TODO: add remove event listener function
    console.log("[debug] monitorInsertIn");

    allTemps.forEach((temp) => {

            temp.removeEventListener("keydown", (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            });
            temp.removeEventListener('click', (e) => {
                showOriginalMarkdown(temp,textArea);
                console.log("[debug] temp clicked");
            });
            temp.addEventListener("keydown", (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            });
            temp.addEventListener('click', (e) => {
                showOriginalMarkdown(temp,textArea);
                console.log("[debug] temp clicked");
            });
            temp.setAttribute('inputEventLiscener','true');
        
        
    });
}
function loadAllMarkdown(textArea){
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    let markdown = "";
    console.log("loadAllMarkdown")
    console.log("[debug] textArea",textArea);
    // get all the children of textArea
    const everything_textArea = textArea.querySelectorAll("*");
    
    everything_textArea.forEach((child) => {
        console.log("[debug] child",child);
    });
    
    // Process children and handle consecutive empty lines properly
    let previousWasEmpty = false;
    everything_textArea.forEach((child) => {
        const isEmpty = child.innerHTML === '' || child.innerHTML === '<br>';
        
        if (isEmpty) {
            // Only add one <br> for consecutive empty lines
            if (!previousWasEmpty) {
                markdown += '<br>' + '\n';
            }
            previousWasEmpty = true;
        } else {
            // Reset the flag for non-empty lines
            previousWasEmpty = false;
            if (child.classList.contains('markdown-temp')){
                markdown += child.getAttribute('mardown-data') + '\n';
            }
            else{
                markdown += child.innerText + '\n';
            }
            
        }

    });
    // if (textArea.innerText !==''){
    //     markdown += textArea.innerText + '\n';
    //     textArea.innerHTML = '';
    // }
    console.log("markdown",markdown);
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
            temp.innerHTML = '<br>';
            temp.classList.add("markdown-temp");
            temp.setAttribute("mardown-data",'<br>');
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
//                     console.log("temp",temp);
//                     console.log("temp.firstChild",temp.firstChild);
//                     console.log("temp.firstChild.innerHTML",temp.firstChild.innerHTML);
//                     console.log(' 🔴 try to append temp.firstChild to textArea');
//                     console.log("temp nodeType",temp.firstChild.nodeType);
                    textArea.appendChild(temp.firstChild);
//                     console.log("textArea & purify notes",textArea);
                }
                else{
//                     console.log("temp.firstChild is null");
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
       
        console.log("debug textArea",textArea);
    });
    const allTemps = textArea.querySelectorAll(".markdown-temp");
//     console.log("parseAllDataNote完成，找到", allTemps.length, "个markdown-temp元素");
    monitorInsertIn(allTemps,textArea);
    return allTemps;
}
// function markdownorgainse(textArea){
//     renderMarkdown(textArea,allTemps=>{
//         //console.log("temp",temp)

//         monitorInsertIn(allTemps,textArea);
//       });
// }
// add a new line for focus when reloading the notes 
function newLineForReloading(textArea,lastLine){
    const everything_textArea = textArea.querySelectorAll("div");
    //const lastLine = everything_textArea[everything_textArea.length - 1];
    if (lastLine.innerHTML !== '' && lastLine.innerHTML !== '<br>'){
        const newLine = document.createElement('div');
        newLine.tabIndex = 0;
        newLine.contentEditable = true;
        newLine.innerHTML = '<br>';
        textArea.appendChild(newLine);
        return newLine;
    }
    else{
        console.log("[debug] lastLine.innerHTML == '' or '<br>'");
        lastLine.innerHTML = '<br>';
        lastLine.tabIndex = 0;
        lastLine.contentEditable = true;
        return lastLine;
    }
}
function checkPackage(){
    if (typeof marked === 'undefined') {
        console.error("marked.js is not loaded");
        return false;
    }
    if (typeof DOMPurify === 'undefined') {
        console.error("DOMPurify is not loaded");
        return false;
    }
    else{
        return true;
    }
}

function markdownModify(){
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
}
 