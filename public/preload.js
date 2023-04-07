const appName = 'MusicPlayerPro'
window.ipcRenderer = require('electron').ipcRenderer;
window.storage = require('electron-json-storage');
window.storage.setDataPath(`${process.env.LOCALAPPDATA}\\${appName}\\storage\\`);
window.jsmediatags = require('jsmediatags');
window.amplitude = require('amplitudejs');