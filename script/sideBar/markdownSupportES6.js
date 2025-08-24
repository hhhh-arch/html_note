import '../../libs/marked.min.js';
import '../../libs/purify.min.js';
const marked = window.marked;
const DOMPurify = window.DOMPurify;
export {marked,DOMPurify};
// markdown.js
export {markdownInputMonitor};
function markdownInputMonitor(textArea, newContainer) {
    try {
        console.log("textArea", textArea);

        if (!textArea) {
            console.error("textArea is null or undefined");
            return;
        }
        if (!newContainer) {
            console.error("newContainer is null or undefined");
            return;
        }
        removeListenerEventEnter(newContainer);
        newContainer.addEventListener("keydown", (e) => {
            if (e.key === 'Enter') {
                enterKeyHandler(e, newContainer, textArea);
            }
            if (e.key === 'Backspace') {
                // check if selection is before the text[0], delete the container and add text to the previous container 
                backspaceKeyHandler(e, newContainer, textArea);

            }
            if (e.key === 'ArrowUp') {
                arrowUpKeyHandler(e, newContainer, textArea);
            }
            if (e.key === 'ArrowDown') {
                arrowDownKeyHandler(e, newContainer, textArea);
            }
        });
    } catch (e) {
        console.error("Markdown 渲染失败", e);
    }
}

function removeListenerEventEnter(temp) {
    temp.removeEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            enterKeyHandler(e, newContainer, textArea);
        }
        if (e.key === 'Backspace') {
            backspaceKeyHandler(e, newContainer, textArea);
        }
    });
}
export {createAnNewContainer};
function createAnNewContainer(textArea) {
    const newContainer = document.createElement('span');
    newContainer.tabIndex = 0;
    newContainer.contentEditable = true;
    newContainer.setAttribute('inputEventLiscener', 'false');
    newContainer.className = 'note-editor-textarea-div';
    //newContainer.classList.add('markdown-temp');

    textArea.appendChild(newContainer);
    newContainer.focus();
    //onNewContainer(newContainer);
    // 不要在这里调用 markdownInputMonitor，避免重复绑定事件

    // find the NO. of child in textArea
    const childIndex = Array.from(textArea.children).length - 1;
    return textArea.children[childIndex];
}
export {createAnNewContainerWithNotes};
function createAnNewContainerWithNotes(textArea, markdown_data) {
    const newContainer = document.createElement('span');
    newContainer.tabIndex = 0;
    newContainer.contentEditable = true;
    newContainer.setAttribute('inputEventLiscener', 'false');
    newContainer.className = 'note-editor-textarea-div';
    newContainer.innerHTML = markdown_data;
    newContainer.classList.add('markdown-temp');
    return newContainer;
}

function showOriginalMarkdown(temp, textArea) {
//     console.log("[debug] showOriginalMarkdown , textArea",textArea);
    const newContainer = createAnNewContainerWithNotes(textArea, temp.getAttribute('mardown-data'));
//     console.log("[debug] newContainer in showOriginalMarkdown",newContainer);
    // console.log("[debug] type of temp",typeof temp);
    // console.log("[debug] temp.nodeType",temp.nodeType);
    // console.log("[debug] temp.parentNode",temp.parentNode);
//     console.log("[debug] textArea in showOriginalMarkdown 1",textArea);
    if (!newContainer) {
        console.log("[debug] newContainer is null");
        return;
    }
    if (temp.parentNode != textArea) {
        console.log("[debug] temp.parentNode != textArea");
        return;
    }
    textArea.insertBefore(newContainer, temp);
//     console.log("[debug] textArea in showOriginalMarkdown 2",textArea);
    textArea.removeChild(temp);
    //monitorInsertIn(newContainer,textArea);

    // console.log("[debug] allTemps",allTemps);
    // newContainer.focus();
    console.log("[debug] textArea in showOriginalMarkdown 3",textArea);

    return newContainer;
}

function createNewDOMElement(markdown, markdown_data) {
    const newDOMElement = document.createElement('span');
    if (markdown.includes('<span class="md-h1">')) {
        newDOMElement.innerHTML = markdown;
        if (newDOMElement.firstChild) {
            newDOMElement.firstChild.setAttribute('mardown-data', markdown_data);
            newDOMElement.firstChild.classList.add('markdown-temp');
            newDOMElement.firstChild.tabIndex = 0;
            newDOMElement.firstChild.contentEditable = true;
            return newDOMElement.firstChild;
        }
    } else {
        newDOMElement.innerHTML = markdown;
        if (newDOMElement.firstChild) {
            newDOMElement.firstChild.setAttribute('mardown-data', markdown_data);
            newDOMElement.firstChild.classList.add('markdown-temp');
            newDOMElement.firstChild.tabIndex = 0;
            newDOMElement.firstChild.contentEditable = true;
            return newDOMElement.firstChild;
        }
    }
    return newDOMElement;
}

function renderMarkdown(textArea, child, onMarkdownChange) {
    setTimeout(() => {
        try {
            if (child.innerHTML == '') {
                return;
            }
            if (child.parentNode != textArea) {
                console.log("child.parentNode != textArea");
                return;
            }
            if (!checkPackage()) {
                return;
            }
            markdownModify();
            // 清理可能的 <br> 标签
            const markdown_data = child.innerText;
            child.setAttribute('markdown-data', child.innerText);
            const markdown = marked.parse(child.innerText);

            const newDOMElement = createNewDOMElement(markdown, markdown_data);
            // // find the NO. of child in textArea
            // const childIndex = Array.from(textArea.children).indexOf(child);
            // console.debug("[debug] childIndex",childIndex);


            textArea.insertBefore(newDOMElement, child);
            textArea.removeChild(child);
            // console.log("[debug] textArea in renderMarkdown",textArea);
            // console.debug("[debug] newDOMElement",);
            // const allTemps = textArea.querySelectorAll(".markdown-temp");
            // onMarkdownChange(allTemps);
            onMarkdownChange(newDOMElement, textArea);


        } catch (e) {
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
export {monitorInsertIn};
function monitorInsertIn(temp, textArea) {
    console.log("[debug] monitorInsertIn");


    temp.removeEventListener('mousedown', (e) => {
        e.stopPropagation();
        const newContainer = showOriginalMarkdown(temp, textArea);
        markdownInputMonitor(textArea, newContainer);
        console.log("[debug] temp clicked");
    });

    temp.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        const newContainer = showOriginalMarkdown(temp, textArea);
        markdownInputMonitor(textArea, newContainer);
        console.log("[debug] temp clicked");
    });
    temp.setAttribute('inputEventLiscener', 'true');


}

function monitorKeyDown(temp, textArea) {
    temp.removeEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
    temp.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
}
export {loadAllMarkdown};
function loadAllMarkdown(textArea) {
    console.log("[debug] loadAllMarkdown");
    const all_editing_containers = textArea.querySelectorAll(".note-editor-textarea-div");
    all_editing_containers.forEach((container) => {
        container.classList.add('markdown-temp');
        container.setAttribute('mardown-data', container.innerText);
    });
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    let markdown = "";
    console.log("loadAllMarkdown")
    console.log("[debug] textArea", textArea);
    if (allTemps.length === 0) {
        return "";
    }
    if (allTemps.length === 1) {
        if (allTemps[0].innerHTML === '' || allTemps[0].innerHTML === '<br>') {
            return "";
        } else {
            return allTemps[0].getAttribute('mardown-data');
        }
    }
    
    // 优化保存逻辑，避免重复的换行符
    for (let i = 0; i < allTemps.length; i++) {
        const temp = allTemps[i];
        const markdownData = temp.getAttribute('mardown-data');
        
        if (markdownData && markdownData.trim() !== '') {
            // 有内容的行：添加内容
            markdown += markdownData;
        }
        
        // 如果不是最后一行，添加换行符
        if (i < allTemps.length - 1) {
            markdown += '\n';
        }
    }

    return markdown;
}
export {parseAllDataNote};
function parseAllDataNote(currentNote, textArea) {
    // 清空textArea内容，避免重复添加
    textArea.innerHTML = '';

    // split currentNote by \n
    const lines = currentNote.split('\n');

    lines.forEach((line, index) => {
        // if line is not empty, parse it
        console.log("line", line);

        if (line.trim() == '') {
            // 空行：创建一个空的span元素，markdown-data为空字符串
            const temp = createAnNewContainer(textArea);
            markdownInputMonitor(textArea, temp);
            monitorInsertIn(temp, textArea);
        } else {
            try {
                markdownModify();
                const PurifiedNote = marked.parse(line);
                console.log("PurifiedNote", PurifiedNote);
                const newDOMElement = createNewDOMElement(PurifiedNote, line);
                textArea.appendChild(newDOMElement);
                markdownInputMonitor(textArea, newDOMElement);
                monitorInsertIn(newDOMElement, textArea);
                console.debug("newDOMElement 's textArea", textArea);
                console.debug("[debug] newDOMElement", newDOMElement);

            } catch (error) {
                console.error("Error parsing markdown line:", line, error);
                // 如果解析失败，直接添加原始文本
                const temp = document.createElement('span');
                temp.innerHTML = line;
                temp.classList.add("markdown-temp");
                temp.setAttribute("mardown-data", line);
                temp.tabIndex = 0;
                temp.contentEditable = true;
                textArea.appendChild(temp);
            }
        }

        console.log("debug textArea", textArea);
    });
    

    //clearTrailingEmptyLines(textArea);
    
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    return allTemps;
}


function clearTrailingEmptyLines(textArea) {
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    if (allTemps.length === 0) return;
    

    let lastNonEmptyIndex = -1;
    for (let i = allTemps.length - 1; i >= 0; i--) {
        const temp = allTemps[i];
        const markdownData = temp.getAttribute('mardown-data');
        if (markdownData && markdownData.trim() !== '') {
            lastNonEmptyIndex = i;
            break;
        }
    }
    

    if (lastNonEmptyIndex >= 0) {
        for (let i = allTemps.length - 1; i > lastNonEmptyIndex; i--) {
            const temp = allTemps[i];
            if (temp.parentNode === textArea) {
                textArea.removeChild(temp);
            }
        }
    }
}
function clearallTheEmptyLine(textArea){
    const allTemps = textArea.querySelectorAll(".markdown-temp");
    for (let i = allTemps.length-1; i >= 0; i--) {
        if (allTemps[i].innerHTML != '' && allTemps[i].innerHTML != '<br>') {
            break;
        }
        else{
            textArea.removeChild(allTemps[i]);
        }
    }
}

// function markdownorgainse(textArea){
//     renderMarkdown(textArea,allTemps=>{
//         //console.log("temp",temp)

//         monitorInsertIn(allTemps,textArea);
//       });
// }
// add a new line for focus when reloading the notes 
function newLineForReloading(textArea, lastLine) {
    const everything_textArea = textArea.querySelectorAll("div");
    //const lastLine = everything_textArea[everything_textArea.length - 1];
    if (lastLine.innerHTML !== '' && lastLine.innerHTML !== '<br>') {
        const newLine = document.createElement('div');
        newLine.tabIndex = 0;
        newLine.contentEditable = true;
        newLine.innerHTML = '<br>';
        textArea.appendChild(newLine);
        return newLine;
    } else {
        console.log("[debug] lastLine.innerHTML == '' or '<br>'");
        lastLine.innerHTML = '<br>';
        lastLine.tabIndex = 0;
        lastLine.contentEditable = true;
        return lastLine;
    }
}
export {checkPackage};
function checkPackage() {
    if (typeof marked === 'undefined') {
        console.error("marked.js is not loaded");
        return false;
    }
    if (typeof DOMPurify === 'undefined') {
        console.error("DOMPurify is not loaded");
        return false;
    } else {
        return true;
    }
}


function markdownModify() {
    // const renderer = {
    //     heading({tokens, depth}) {
    //         const text = this.parser.parseInline(tokens);
    //         if (depth === 1) {
    //             return `<span class="md-h1">${text}</span>`;
    //         }

    //         return `<span class="md-h${depth}">${text}</span>`;
    //     }
    // };


    // marked.use({renderer});
}

function editingMarkdownMonitor(newContainer, textArea) {
    console.log("[debug] newContainer in editingMarkdownMonitor 1", textArea);
    if (!newContainer) {
        console.log("[debug] newContainer is null");
        return;
    }
    if (newContainer.parentNode != textArea) {
        console.log("[debug] newContainer.parentNode != textArea");
        return;
    }
    removeListenerEventEnter(newContainer);
    newContainer.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log("[debug] newContainer in editingMarkdownMonitor", textArea);

            renderMarkdown(textArea, newContainer, newDOMElement => {
                //console.log("temp",temp)

                monitorInsertIn(newDOMElement, textArea);
                const nextContainer = createAnNewContainer(textArea);
                // insert the nextContainer after the newContainer
                textArea.insertBefore(nextContainer, newDOMElement.nextSibling);
                markdownInputMonitor(textArea, nextContainer);
                nextContainer.focus();
            });

            console.log('🔴 textArea in editingMarkdownMonitor', textArea);
        }
        if (e.key === 'Backspace') {
            // check if selection is before the text[0], delete the container and add text to the previous container 
            if (checkSelectionPositionStart(newContainer)) {
                e.preventDefault();
                const previousContainer = deleteContainerAndAddTextToPreviousContainer(newContainer, textArea);
                if (previousContainer) {
                    const newContainer = showOriginalMarkdown(previousContainer, textArea);
                    locateCaretPositionToTheEnd(newContainer);

                }
            }

        }
    });

}

function focusOnTheEndOfTheElement(element) {
    const range = document.createRange();
    range.setStartAfter(element);
}

function checkSelectionPositionStart(element) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const startOffset = range.startOffset;
    if (startOffset === 0) {
        return true;
    } else {
        return false;
    }
}

function checkSelectionPositionEnd(element) {
    if (!element) {
        console.error("[debug] element is null");
        return null;
    }

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    if (range.endContainer.nodeType != Node.TEXT_NODE) {
        return null;

    }
    const endOffset = range.endOffset;
    if (endOffset === element.innerText.length) {
        return -1;
    } else {
        return endOffset;
    }
}

function deleteContainerAndAddTextToPreviousContainer(newContainer, textArea) {
    const previousContainer = newContainer.previousSibling;
    if (previousContainer) {
        previousContainer.innerText = previousContainer.innerText + newContainer.innerText;
        previousContainer.setAttribute('mardown-data', previousContainer.getAttribute('mardown-data') + newContainer.innerText);
        previousContainer.focus();
        textArea.removeChild(newContainer);
        return previousContainer;
    }
    return null;
}

function enterKeyHandler(e, newContainer, textArea) {
    const caretPosition = checkSelectionPositionEnd(newContainer);
    console.log("[debug] caretPosition", caretPosition);
    if (caretPosition == null) {
        console.log("[debug] caretPosition is null");
        return;
    }

    if (caretPosition == -1) {
        e.preventDefault();
        e.stopPropagation();
        renderMarkdown(textArea, newContainer, newDOMElement => {
            //console.log("temp",temp)

            monitorInsertIn(newDOMElement, textArea);
            const nextContainer = createAnNewContainer(textArea);
            if (newDOMElement.nextSibling) {

                textArea.insertBefore(nextContainer, newDOMElement.nextSibling);
                markdownInputMonitor(textArea, nextContainer);
                nextContainer.focus();
            } else {
                textArea.appendChild(nextContainer);
                markdownInputMonitor(textArea, nextContainer);
                nextContainer.focus();
            }

        });

    } else if (caretPosition == 0) {
        e.preventDefault();
        e.stopPropagation();
        const nextContainer = createAnNewContainer(textArea);
        textArea.insertBefore(nextContainer, newContainer);
        markdownInputMonitor(textArea, nextContainer);
    } else if (caretPosition > 0 && caretPosition < newContainer.innerText.length) {
        e.preventDefault();
        e.stopPropagation();
        splitContainer(newContainer, caretPosition, textArea);
        console.log("[debug] splitContainer textArea", textArea);
    } else {
        console.error("[debug] caretPosition is out of range,caretPosition", caretPosition,newContainer.innerText.length);
    }
}

function splitContainer(newContainer, caretPosition, textArea) {
    const string1 = newContainer.innerText.substring(0, caretPosition);
    const string2 = newContainer.innerText.substring(caretPosition);
    const nextContainer = createAnNewContainer(textArea);
    nextContainer.innerHTML = string2;
    nextContainer.setAttribute('mardown-data', string2);
    textArea.insertBefore(nextContainer, newContainer.nextSibling);
    newContainer.innerHTML = string1;
    newContainer.setAttribute('mardown-data', string1);

    markdownInputMonitor(textArea, nextContainer);
    newContainer.innerText = string1;
    renderMarkdown(textArea, newContainer, newDOMElement => {
        //console.log("temp",temp)

        monitorInsertIn(newDOMElement, textArea);
    });


    nextContainer.focus();


}

function locateCaretPositionToTheEnd(newContainer) {
    const selection = window.getSelection();
    const range = document.createRange();

    const firstChild = newContainer.firstChild;

    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {

        range.setStart(firstChild, firstChild.length);
        range.setEnd(firstChild, firstChild.length);
    } else {

        range.selectNodeContents(newContainer);
        range.collapse(false);
    }

    selection.removeAllRanges();
    selection.addRange(range);
}

function locateCaretPositionToTheStart(newContainer) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.selectNodeContents(newContainer);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);

}

function createNewRange() {
    const range = document.createRange();
}

function backspaceKeyHandler(e, newContainer, textArea) {
    if (checkSelectionPositionStart(newContainer)) {
        e.preventDefault();
        const previousContainer = deleteContainerAndAddTextToPreviousContainer(newContainer, textArea);
        if (previousContainer) {
            const newContainer = showOriginalMarkdown(previousContainer, textArea);
            locateCaretPositionToTheEnd(newContainer);
            markdownInputMonitor(textArea, newContainer);
        }
    }
}

function arrowUpKeyHandler(e, newContainer, textArea) {
    if (checkSelectionPositionStart(newContainer)) {
        e.preventDefault();
        const previousContainer = newContainer.previousSibling;
        if (previousContainer) {
            const editorContainer = showOriginalMarkdown(previousContainer, textArea);

            renderMarkdown(textArea, newContainer, newDOMElement => {
                monitorInsertIn(newDOMElement, textArea);
            });
            locateCaretPositionToTheEnd(editorContainer);
            markdownInputMonitor(textArea, editorContainer);
        }

    }
}

function arrowDownKeyHandler(e, newContainer, textArea) {
    if (checkSelectionPositionEnd(newContainer)) {
        e.preventDefault();
        const nextContainer = newContainer.nextSibling;
        if (nextContainer) {
            const editorContainer = showOriginalMarkdown(nextContainer, textArea);
            renderMarkdown(textArea, newContainer, newDOMElement => {
                monitorInsertIn(newDOMElement, textArea);
            });
            editorContainer.focus();
            markdownInputMonitor(textArea, editorContainer);

        }
    }
}