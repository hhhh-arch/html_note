import { 
    showMindMapPanel,
    hide_note_card_editor,
    getMind,
    add_noteCard_to_mindMap,
    loadNoteCard,
    storage_mindMap_data,
    sync_note_card_notes,
    setPageUrl,

     } from '../mindMap.js';
document.addEventListener('DOMContentLoaded', function () {
    //send message to service worker, ask for pageUrl
    chrome.runtime.sendMessage({type: 'side_panel_ready'}, (response) => {
        console.log('response:', response);
    });
});
// event listener for click outside the note_card_editor 
document.addEventListener('mousedown', (event) => {

    const note_card_editor = document.querySelector('.note-card-editor');
    const panel = document.querySelector('#map');
    if (note_card_editor) {
        if (note_card_editor.contains(event.target)) {
            return;
        } else {
            hide_note_card_editor();
        }
    }

});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'init_mindmap' || message.type === 'toggle_side_bar') {
        // console.log('pageUrl:',message.pageUrl);
        // console.log('document:',document.innerHTML);
        // console.log('document.getElementById("mindmap-panel"):',document.getElementById('mindmap-panel'));
        console.log('message:', message);
        setPageUrl(message.pageUrl);
        showMindMapPanel(message.pageUrl);

    }

    if (message.type === 'add_noteCard_to_mindMap') {
        add_noteCard_to_mindMap(message.pageUrl, message.groupId);
    }
    if (message.type === 'sync_mindMap_data_ready') {
        console.log('message:', message);
        loadNoteCard(message.pageUrl, getMind(), getMind().getData());
        storage_mindMap_data();
    }
    if (message.type === 'update_storage_note') {
        sync_note_card_notes(message.groupId, message.note);
    }
    if (message.type === 'remove_mindmap_editor') {
        hide_note_card_editor();

    }
});