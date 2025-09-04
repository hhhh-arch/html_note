// const GOOGLE_ORIGIN = 'https://www.runoob.com/jsref/dom-obj-attributes.html';

// chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
//   if (!tab.url) return;
//   const url = new URL(tab.url);
//   // Enables the side panel on google.com
//   if (url.origin === GOOGLE_ORIGIN) {
//     await chrome.sidePanel.setOptions({
//       tabId,
//       path: 'script/sideBar/side_panel.html',
//       enabled: true
//     });
//   } else {
//     // Disables the side panel on all other sites
//     await chrome.sidePanel.setOptions({
//       tabId,
//       enabled: false
//     });
//   }
// });


// Allows users to open the side panel by clicking on the action toolbar icon
chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setOptions({
        tabId: chrome.windows.WINDOW_ID_CURRENT,
        path: 'script/sideBar/side_panel.html',
        enabled: true
    });
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
});

chrome.runtime.onMessage.addListener((message, sender) => {
    // The callback for runtime.onMessage must return falsy if we're not sending a response
    (async () => {
      if (message.type === 'open_side_panel') {
        // This will open a tab-specific side panel only on the current tab.
        await chrome.sidePanel.open({ tabId: sender.tab.id });
        await chrome.sidePanel.setOptions({
          tabId: sender.tab.id,
          path: 'script/sideBar/side_panel.html',
          enabled: true
        });
      }
      if (message.type === 'close_side_panel') {
        await chrome.tabs.sendMessage(sender.tab.id, {
          type: 'close_side_panel'
        });
        await chrome.sidePanel.setOptions({
          tabId: sender.tab.id,
          enabled: false
        });
      }
      if (message.type === 'add_noteCard_to_mindMap') {
        await chrome.sidePanel.open({ tabId: sender.tab.id });
        await chrome.sidePanel.setOptions({
          tabId: sender.tab.id,
          path: 'script/sideBar/side_panel.html',
          enabled: true
        });
        await chrome.tabs.sendMessage(sender.tab.id, {
          type: 'add_noteCard_to_mindMap',
          pageUrl: message.pageUrl,
          groupId: message.groupId,
        });

      }
      if (message.type === 'update_storage_note') {
        if (chrome.sidePanel.getOptions({tabId: sender.tab.id}).enabled == true) {
          chrome.tabs.sendMessage(sender.tab.id, {
            type: 'update_storage_note',
            groupId: message.groupId,
            note: message.note
          });
        }
      }
      if (message.type === 'remove_mindmap_editor') {
        if (chrome.sidePanel.getOptions({tabId: sender.tab.id}).enabled == true) {
          chrome.tabs.sendMessage(sender.tab.id, {
            type: 'remove_mindmap_editor',
          });
        }
      }
      if (message.type === 'remove_content_editor') {

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          if (tabs[0] && tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, {
              type: 'remove_content_editor',
            });
          }
        });
      }

    })();
  });
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'init_mindmap') {
    // 发送消息给 Side Panel
    chrome.tabs.sendMessage(sender.tab.id, {
      type: 'init_mindmap',
      pageUrl: message.pageUrl
    });
  }
  
  if (message.type === 'side_panel_ready') {
    sendResponse({status: 'received'});
    // Side Panel 告诉 Service Worker 它已经准备好了
    // service worker send message to content script, tell it to send pageUrl to side panel
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'side_panel_ready'
        });
      }
    });
  }
  if (message.type === 'sync_mindMap_data') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'sync_mindMap_data',
        });
      }
    });
  }
  if (message.type === 'toggle_fullscreen') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'toggle_fullscreen',
        });
      }
    });

  }
  if (message.type === 'toggle_side_bar') {
    chrome.tabs.sendMessage(sender.tab.id, {
      type: 'toggle_side_bar',
      pageUrl: message.pageUrl,
    });
  }
  if (message.type === 'close_side_panel') {
    chrome.sidePanel.close({ windowId: chrome.windows.WINDOW_ID_CURRENT });
  }
  if (message.type === 'sync_mindMap_data_ready') {
    chrome.tabs.sendMessage(sender.tab.id, {
          type: 'sync_mindMap_data_ready',
          pageUrl: message.pageUrl
        });
      }
    });
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'openSidePanel',
      title: 'Open side panel',
      contexts: ['all']
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'openSidePanel') {
      // This will open the panel in all the pages on the current window.
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0] && tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: 'context_menu_item_clicked'
          });
        }
    });


    }

  });