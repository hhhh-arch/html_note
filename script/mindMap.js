function showMindMapPanel() {
    // 如果已存在面板则直接返回
    if (document.querySelector('#mindmap-panel')) return;
  
    const panel = document.createElement('div');
    panel.id = 'mindmap-panel';
    
    panel.innerHTML = `<div id="mindmap-container"><script src="libs/mind-elixir/MindElixirUmb.js"></script></div>`;
    document.body.appendChild(panel);
  }