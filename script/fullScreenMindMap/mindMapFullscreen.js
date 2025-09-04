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
  insert_switch_side_bar(panel);
}
function insert_switch_side_bar(panel){
  const switch_full_screen_btn = document.querySelector('.toolbar-btn.fullscreen-btn');
  if (!switch_full_screen_btn) {
    console.log('switch_full_screen_btn not found');
    return;
  }
  const switch_side_bar_btn = document.createElement('button');
  switch_side_bar_btn.title = 'Toggle Side Bar';
  switch_side_bar_btn.className = 'toolbar-btn switch-side-bar-btn';
  switch_side_bar_btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1.5 1.5v3.5h1v-2.5h2.5v-1h-3.5zm0 8.5v3.5h3.5v-1h-2.5v-2.5h-1zm8.5-8.5h-1v2.5h-2.5v1h3.5v-3.5zm0 8.5v-1h-2.5v-2.5h-1v3.5h3.5z" fill="currentColor"/></svg>';
  switch_full_screen_btn.removeEventListener('click',()=>{
    chrome.runtime.sendMessage({type: 'toggle_fullscreen'});
    window.close();
  });
  switch_side_bar_btn.addEventListener('click',()=>{
    toggle_side_bar_handler();
  });
  const toolbar = panel.querySelector('.mindmap-toolbar');
  if (!toolbar) {
    console.log('toolbar not found');
    return;
  }
  toolbar.replaceChild(switch_side_bar_btn, switch_full_screen_btn);
}
function toggle_side_bar_handler(){
  const note_card_editor = document.querySelector('.note-card-editor');
  if (note_card_editor){
    hide_note_card_editor();
  }
  remove_panel();
  chrome.runtime.sendMessage({type: 'open_side_panel'});
  
}
