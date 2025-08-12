function showMindMapPanel() {
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
    initMindMap(MindElixir);
      
      
  }
  function initMindMap(MindElixir){
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
    
    // create new map data
    const data = initNoteCard('new topic','quote','notes');
    console.log(`data:`,MindElixir.new('new topic'));
    // or `example`
    // or the data return from `.getData()`
    mind.init(data);


  }
  function initNoteCard(title,quote,notes){
    if(!checkPackage()){
      console.error(`checkPackage failed`);
      return;
    }
    const style_html = createDangerousHtml(title,quote,notes);
    const data = {
      nodeData: {
        id: 'root',
        topic: title,
        style: { 
          fontSize: '16', 
          color: '#2c3e50', 
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          width: '300px',
          padding: '0',
          margin: '0'
        },
        // 添加自定义类名，方便CSS选择器
        className: 'custom-note-card',
        children: [
          {
            direction: 0,
            id: 'd34338c074901546',
            topic: 'new node',
            dangerouslySetInnerHTML: style_html,
          },
        ],
        dangerouslySetInnerHTML: style_html,
      }
    }
    return data;
  }
  function createDangerousHtml(title,quote,notes){
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
    return temp_html.innerHTML;
  }