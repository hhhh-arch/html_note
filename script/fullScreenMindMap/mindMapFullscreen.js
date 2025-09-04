import { showMindMapPanel } from '../mindMap.js';
export { toggleFullscreen };
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
  showMindMapPanel(pageUrl);
}