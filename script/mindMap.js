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
      
      let mind = new MindElixir(options)
      
      mind.install(window.NodeMenu) // install your plugin
      
      // create new map data
      const data = MindElixir.new('new topic')
      // or `example`
      // or the data return from `.getData()`
      mind.init(data)
      
      // get a node
      MindElixir.E('node-id')
  }