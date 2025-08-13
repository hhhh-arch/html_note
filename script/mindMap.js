function showMindMapPanel(pageUrl) {
    // 如果已存在面板则直接返回
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
    console.log('MindElixir:', window.MindElixir);
    const MindElixir = window.MindElixir.default;
    const mind = initMindMap(MindElixir, pageUrl);
    const root_noteCard = mind.getData();
    loadNoteCard(pageUrl, mind,root_noteCard);

}

function initMindMap(MindElixir, pageUrl) {
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
    const data = initNoteCard(pageUrl);
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
    let children_noteCard_list = mind.getData().children;
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
  mind.refresh(root_noteCard);
  console.log('mind.getData():',mind.getData());
  console.log('mind.getData().children:',mind.getData().children);
  return root_noteCard;
}
function generate_children_noteCard(title,quote, note, color, groupId){
  const child_noteCard = {
    direction:0,
    id: groupId,
    topic: quote,
    dangerouslySetInnerHTML: createDangerousHtml(title,quote,note,color),
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
    title_style.innerHTML = title;
    title_container.appendChild(title_style);
    note_card.appendChild(title_container);
    const quote_container = document.createElement('div');
    quote_container.className = 'quote-container';
    const quote_style = document.createElement('p');
    quote_style.className = 'quote-style';
    quote_style.innerHTML = quote;
    quote_container.appendChild(quote_style); // 修复：添加quote_style到容器
    note_card.appendChild(quote_container);
    const notes_container = document.createElement('div');
    notes_container.className = 'notes-container';
    const notes_style = document.createElement('p');
    notes_style.className = 'notes-style';
    notes_style.innerHTML = notes;
    notes_container.appendChild(notes_style);
    note_card.appendChild(notes_container);
    temp_html.appendChild(note_card);
    note_card.style.backgroundColor = color;
    title_container.style.backgroundColor = color;
    return temp_html.innerHTML;
}