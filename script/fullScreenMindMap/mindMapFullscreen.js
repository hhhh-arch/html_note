import { showMindMapPanel, hide_note_card_editor, remove_panel } from '../mindMap.js';
export { toggleFullscreen };
function toggleFullscreen(pageUrl) {
  if (document.querySelector('#mindmap-panel')) return;

  const panel = document.createElement('div');
  panel.id = 'mindmap-panel';

  panel.innerHTML = `  
        <div id="mindmap-container">
            <div id="map"></div>
            <style>
                #map {
                    height: 100%;
                    width: 100%;
                }
            </style>
        </div>
    `
  document.body.appendChild(panel);
  showMindMapPanel(pageUrl);
  insert_switch_side_bar(pageUrl,panel);
}
function insert_switch_side_bar(pageUrl,panel){
  const switch_full_screen_btn = document.querySelector('.toolbar-btn.fullscreen-btn');
  if (!switch_full_screen_btn) {
    console.log('switch_full_screen_btn not found');
    return;
  }
  switch_full_screen_btn.title = 'Toggle Side Bar';
  switch_full_screen_btn.removeEventListener('click',()=>{
    chrome.runtime.sendMessage({type: 'toggle_fullscreen'});
    window.close();
  });

  switch_full_screen_btn.addEventListener('click', () => {
    toggle_side_bar_handler(pageUrl);
  });
}
function toggle_side_bar_handler(pageUrl){
  const note_card_editor = document.querySelector('.note-card-editor');
  if (note_card_editor){
    hide_note_card_editor();
  }
  remove_panel();
  chrome.runtime.sendMessage({type: 'open_side_panel'});
  
}
