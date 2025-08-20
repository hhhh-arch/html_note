let _mind = null;


function setMind(mindInstance) {
    _mind = mindInstance;
}


function getMind() {
    return _mind;
}

function toggleFullscreen(pageUrl) {
    if (document.querySelector('#mindmap-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'mindmap-panel';

    panel.innerHTML = `<div id="mindmap-container">
    
    <div id="map"></div>
<style>
  #map {
    height: 500px;
    width: 100%;
  }
</style>
    </div>`;
    document.body.appendChild(panel);


   const MindElixir = window.MindElixir.default;
   const mind = initMindMap(MindElixir, pageUrl,null);
   (function overide_node_edit(mind){
     console.log("overide_node_edit:")
     if (!mind || typeof mind.beginEdit !== 'function') return;
     const _beginEdit = mind.beginEdit.bind(mind);
     mind.beginEdit = function (el) {
       const nodeEle = el || mind.currentNode
       if (!nodeEle) return
       if (nodeEle.nodeObj.dangerouslySetInnerHTML) {
         //
         console.log("overide_node_edit:")
         showNoteCardEditor(nodeEle,panel,mind,pageUrl);
         return;
       }
       return _beginEdit(el);
     }
   })(mind);
   setMind(mind);
   create_mindMap_toolbar(pageUrl);
   get_mindMap_data(pageUrl,getMind());
  

}

function initMindMap(MindElixir, pageUrl,init_data) {
   let options = {
       el: '#map', // or HTMLDivElement
       direction: MindElixir.LEFT,
       draggable: true, // default true
       contextMenu: true, // default true
       toolBar: true, // default true
       nodeMenu: true, // default true
       keypress: true, // default true
       locale: 'en', // [zh_CN,zh_TW,en,ja,pt,ru] waiting for PRs
       overflowHidden: false, // default false
       mainLinkStyle: 2, // [1,2] default 1
       mouseSelectionButton: 0, // 0 for left button, 2 for right button, default 0
       contextMenuOption: {
           focus: true,
           link: true,
           extend: [
               {
                   name: 'Node edit',
                   onclick: () => {
                       alert('extend menu')
                   },
               },
           ],
       },
       before: {
           insertSibling(type, obj) {
               return true
           },
       },
   }
   let mind = new MindElixir(options);
   //mind.install(window.NodeMenu) // install your plugin
   const data = init_data||initNoteCard(pageUrl);
   mind.init(data);
   return mind;
   // // create new map data
   // const data = initNoteCard('new topic','quote','notes');
   // console.log(`data:`,MindElixir.new('new topic'));
   // // or `example`
   // // or the data return from `.getData()`
   // mind.init(data);


}

function loadNoteCard(pageUrl, mind,root_noteCard) {
   chrome.storage.local.get(pageUrl, (result) => {
       const groupId_list = result[pageUrl];
       if (groupId_list) {

           groupId_list.forEach(groupId => {
               chrome.storage.local.get(groupId, (result) => {
                   const highlightElement_structure = result[groupId];
                   if (highlightElement_structure) {
                     console.log('highlightElement_structure:',highlightElement_structure);
                       const color = highlightElement_structure.color;
                       const quote = find_quotes(highlightElement_structure.highlightElements);
                       const notes = highlightElement_structure.note;
                       //const data = initNoteCard(title, quote, notes);
                       const title = quote;
                       const data = generate_children_noteCard(title,quote,notes,color,groupId);
                       if(data){
                         refresh_NoteCard(initNoteCard(pageUrl),data,mind);
                       }
                       else{
                         window.alert('No note card found');
                       }
                   }
               });
           });

       }
   });
}

function find_quotes(highlightElement) {
 console.log('highlightElement:',highlightElement);
   let quotes = '';
   highlightElement.forEach(element => {
       quotes += element.highlightElement_text;

   });
   return quotes;
}
function initNoteCard(pageUrl) {
   if (!checkPackage()) {
       console.error(`checkPackage failed`);
       return;
   }
   
   const data = {
       nodeData: {
           id :'root',
           topic: 'root',
           hyperLink: pageUrl,

           expanded: true,
           root: true,
       }
   }
   return data;
}
function refresh_NoteCard(root_noteCard,children_noteCard,mind){

 if (children_noteCard){
   let children_noteCard_list = mind.getData().nodeData.children;
   if (children_noteCard_list){
     console.log('children_noteCard:',children_noteCard);
     children_noteCard_list.push(children_noteCard);
     root_noteCard.nodeData.children = children_noteCard_list;
   }
   else{
     root_noteCard.nodeData.children = [children_noteCard];
   }
 }
 console.log('root_noteCard:',root_noteCard);
 // const dataToRefresh = {
 //   nodeData: root_noteCard,
 //   arrows: [],
 //   summaries: []
 // };
 setMind(mind.refresh(root_noteCard));
 console.log('mind.getData():',mind.getData());
 console.log('mind.getData().nodeData.children:',mind.getData().nodeData.children);
 return root_noteCard;
}
function generate_children_noteCard(title,quote, note, color, groupId){
 if (!check_empty_container(title)&&!check_empty_container(quote)&&!check_empty_container(note)){
   return null;
 }
 const child_noteCard = {
   direction:0,
   id: groupId,
   topic: quote||title||note,
   dangerouslySetInnerHTML: createDangerousHtml(title,quote,note,color),
   dataset:{
     title:title,
     quote:quote,
     note:note,
     color:color,
   }
   // className: 'custom-note-card',
   // parent:'root',
 }
 return child_noteCard;
}

function createDangerousHtml(title, quote, notes,color) {
   const temp_html = document.createElement('div');
   const note_card = document.createElement('div');
   note_card.className = 'note-card';
   const title_container = document.createElement('div');
   title_container.className = 'title-container';
   const title_style = document.createElement('h3');
   title_style.className = 'title-style';
   if (!check_empty_container(title)){
     title_style.innerHTML = '<br>';
   }
   else{
     title_style.innerHTML = title;
   }
   title_container.appendChild(title_style);
   note_card.appendChild(title_container);
   const quote_container = document.createElement('div');
   quote_container.className = 'quote-container';
   const quote_style = document.createElement('p');
   quote_style.className = 'quote-style';
   if (!check_empty_container(quote)){
     quote_style.innerHTML = '<br>';
   }
   else{
     quote_style.innerHTML = quote;
   }
   quote_container.appendChild(quote_style); // 修复：添加quote_style到容器
   note_card.appendChild(quote_container);
   const notes_container = document.createElement('div');
   notes_container.className = 'notes-container';
   const notes_style = document.createElement('p');
   notes_style.className = 'notes-style';
   if (!check_empty_container(notes)){
     notes_style.innerHTML = '<br>';
   }
   else{
     notes_style.innerHTML = notes;
   }
   notes_container.appendChild(notes_style);
   note_card.appendChild(notes_container);
   temp_html.appendChild(note_card);
   note_card.style.backgroundColor = color;
   title_container.style.backgroundColor = color;
   return temp_html.innerHTML;
}
//TODO: double click to edit the note card
function showNoteCardEditor(nodeEle,panel,mind,pageUrl){
 console.log("showNoteCardEditor:",nodeEle);
 const title = nodeEle.nodeObj.dataset.title;
 const quote = nodeEle.nodeObj.dataset.quote;
 const note = nodeEle.nodeObj.dataset.note;
 const note_card_editor = document.createElement('div');
 note_card_editor.className = 'note-card-editor';
 const title_style = document.createElement('h3');
 title_style.className = 'title-style';
 title_style.innerHTML = title;
 title_style.contentEditable = 'true';
 note_card_editor.appendChild(title_style);
 const quote_style = document.createElement('p');
 quote_style.className = 'quote-style';
 quote_style.innerHTML = quote;
 quote_style.contentEditable = 'true';
 note_card_editor.appendChild(quote_style);
 const notes_style = document.createElement('p');
 notes_style.className = 'notes-style';
 notes_style.innerHTML = note;
 notes_style.contentEditable = 'true';
 note_card_editor.appendChild(notes_style);
 panel.appendChild(note_card_editor);  
 note_card_editor.addEventListener('mouseleave',(event)=>{
   if (note_card_editor.contains(event.target)){
    hideNoteCardEditor(panel,note_card_editor,nodeEle,note_card_editor,mind,pageUrl);
   }
})
}
function hideNoteCardEditor(panel,note_card_editor,nodeEle,note_card_editor,mind,pageUrl){
 console.log("hideNoteCardEditor:",note_card_editor);
 if (note_card_editor){
   updateNoteCard(nodeEle,panel,note_card_editor,mind,pageUrl);
   note_card_editor.remove();
 }
}
function updateNoteCard(nodeEle,panel,note_card_editor,mind,pageUrl){
 console.log("updateNoteCard:",note_card_editor);
 const title = note_card_editor.querySelector('.title-style').innerHTML;
 const quote = note_card_editor.querySelector('.quote-style').innerHTML;
 const note = note_card_editor.querySelector('.notes-style').innerHTML;
 if (!check_empty_container(title)&&!check_empty_container(quote)&&!check_empty_container(note)){
   console.log("remove nodeEle:",nodeEle);
   mind.removeNodes([mind.currentNode]);
   remove_storage_mindMap_data(pageUrl);
   return;
 }
 nodeEle.nodeObj.dataset.title = title||quote;
 nodeEle.nodeObj.dataset.quote = quote;
 nodeEle.nodeObj.dataset.note = note;
 const color = nodeEle.nodeObj.dataset.color;
 nodeEle.nodeObj.dangerouslySetInnerHTML = createDangerousHtml(title,quote,note,color);
 nodeEle.nodeObj.topic = title||quote;
 console.log("nodeEle.nodeObj:",nodeEle.nodeObj);
 const currentdata = mind.getData();
 console.log("currentdata:",currentdata);
 setMind(mind.refresh(currentdata));
 storage_mindMap_data(mind, pageUrl);
 // mind.refresh(nodeEle);
}
//TODO: storage the mind map data
function check_empty_container(text){
 if (text ==''||text ==null||text ==undefined||text == '<br>'||text == '<br/>'){
   return false;
 }
 return true;
}
function storage_mindMap_data(mind, pageUrl){
 console.log("storage_mindMap_data:",mind.getData());
 const data = mind.getData();
 const key_mindMap = 'mindMap'+ pageUrl;
 chrome.storage.local.set({[key_mindMap]: data});
}
function get_mindMap_data(pageUrl,mind){
 const key_mindMap = 'mindMap'+ pageUrl;
 chrome.storage.local.get(key_mindMap, (result) => {
   const data_mindMap = result[key_mindMap];
   console.log("data_mindMap:",data_mindMap);
   if (data_mindMap){
     console.log("data_mindMap:",data_mindMap);
     mind.init(data_mindMap);
   }
   else{
     const root_noteCard = mind.getData();
     loadNoteCard(pageUrl, mind,root_noteCard);
     storage_mindMap_data(mind, pageUrl);
   }
 });
}
function remove_storage_mindMap_data(pageUrl){
 const key_mindMap = 'mindMap'+ pageUrl;
 chrome.storage.local.remove(key_mindMap);
}
function add_noteCard_to_mindMap(pageUrl,groupId){
 const key_mindMap = 'mindMap'+ pageUrl;
 chrome.storage.local.get(key_mindMap, (result) => {
   const data_mindMap = result[key_mindMap];
   if (data_mindMap){
     
     chrome.storage.local.get(groupId, (result) => {
       const data = convertHightlightElementToNoteCard(result[groupId]);
       if (data_mindMap.nodeData.children){
         data_mindMap.nodeData.children.push(data);
       }
       else{
         data_mindMap.nodeData.children = [data];
       }
       chrome.storage.local.set({[key_mindMap]: data_mindMap},()=>{
         if (!check_if_panel_exist()){
           return;
         }
         const MindElixir = window.MindElixir.default;
         const mind = initMindMap(MindElixir, pageUrl,data_mindMap);
         refresh_NoteCard(data_mindMap,data,mind);
       });
     });
     
   }
 });
}
function convertHightlightElementToNoteCard(highlightElement_structure){
 const groupId = highlightElement_structure.groupId;
 const color = highlightElement_structure.color;
 const quote = find_quotes(highlightElement_structure.highlightElements);
 const notes = highlightElement_structure.note;
 const title = highlightElement_structure.title;
 const data = generate_children_noteCard(title,quote,notes,color,groupId);
 return data;
}
function add_noteCard_to_mindMap_data(data){

}
function check_if_panel_exist(){
 if (document.querySelector('#mindmap-panel')){
   return true;
 }
 return false;
}
    
function create_sync_btn(pageUrl){
    const syncBtn = document.createElement('button');
    syncBtn.className = 'toolbar-btn sync-btn';
    syncBtn.title = 'Sync Mind Map';
    syncBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 3a5 5 0 0 0-5 5H1l3.5 3.5L7.5 8H6a2 2 0 1 1 2 2v2a4 4 0 1 0-4-4H2a6 6 0 1 1 6 6v-2a4 4 0 0 0 0-8z" fill="currentColor"/></svg>';
    syncBtn.addEventListener('click',()=>{
        loadNoteCard(pageUrl,getMind(),getMind().getData());
        storage_mindMap_data(getMind(),pageUrl);
    });
    return syncBtn;
  }
  function create_switch_sideBar_btn(pageUrl){
    const switchSideBarBtn = document.createElement('button');
    switchSideBarBtn.className = 'toolbar-btn switch-sideBar-btn';
    switchSideBarBtn.title = 'Switch Side Bar';
    switchSideBarBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1.5 1.5v3.5h1v-2.5h2.5v-1h-3.5zm0 8.5v3.5h3.5v-1h-2.5v-2.5h-1zm8.5-8.5h-1v2.5h-2.5v1h3.5v-3.5zm0 8.5v-1h-2.5v-2.5h-1v3.5h3.5z" fill="currentColor"/></svg>';
    switchSideBarBtn.addEventListener('click',()=>{
        chrome.runtime.sendMessage({ type: 'open_side_panel' });
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          console.log('message:',message);
          if (message.type === 'side_panel_ready') {
            chrome.runtime.sendMessage({ type: 'init_mindmap', pageUrl: pageUrl });
            const panel = document.querySelector('#mindmap-panel');
            panel.remove();
          }
        });

    });
    return switchSideBarBtn;
  }
  function create_convert_btn(){
    const convertBtn = document.createElement('button');
    convertBtn.className = 'toolbar-btn convert-btn';
    convertBtn.title = 'Convert to Note List';
    convertBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 2h12v2H2V2zm0 4h12v2H2V6zm0 4h12v2H2v-2zm0 4h8v2H2v-2z" fill="currentColor"/></svg>';
    return convertBtn;
  }
  function create_mindMap_toolbar(pageUrl){// on the right top corner and fix 
    const mindMap_container = document.querySelector('#mindmap-container');
    if (!mindMap_container){
      console.error('mindMap_container not found');
      return;
    }
    const toolbar = document.createElement('div');
    toolbar.className = 'mindmap-toolbar';
  
    // Sync button
    const syncBtn = create_sync_btn(pageUrl);
  
    // Fullscreen button
    const switchSideBarBtn = create_switch_sideBar_btn(pageUrl);
  
    // Convert to note list button
    const convertBtn = create_convert_btn();
  
    // Add buttons to toolbar
    toolbar.appendChild(syncBtn);
    toolbar.appendChild(switchSideBarBtn);
    toolbar.appendChild(convertBtn);
  
    mindMap_container.appendChild(toolbar);
  }