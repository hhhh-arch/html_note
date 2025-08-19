function toggleFullscreen(pageUrl) {
   const div = document.createElement('div');
   div.id = 'mindmap-fullscreen';
   div.innerHTML = '<div id="mindmap-container"><div id="map"></div></div>';
   document.body.appendChild(div);

   
}