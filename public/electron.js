const path = require("path");
const ipcMain = require("electron").ipcMain;
const { dialog } = require("electron");
require('./server')

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const { readFiles } = require("./api/library");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    show: false,    
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: __dirname + "\\preload.js",
    },
  });

  // set title and hide menu bar on  production
  if (!isDev) {
    win.setTitle("Music Player Pro");
    win.removeMenu();
  }
  

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  win.once('ready-to-show', () => {
    win.show();
    win.focus();
  });

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


ipcMain.on("open-file-dialog", async (event, arg) => {
  const paths = await dialog.showOpenDialog({ properties: ["openDirectory"] }); 
  event.sender.send("selected-directory", {
    canceled: paths.canceled,
    path: paths.filePaths[0],    
  });
});

ipcMain.on("refresh-library", async (event, paths) => {
  let files = []
  for(let path of paths) {
    let newFiles = await readFiles(path);
    files = [...files, ...newFiles]
  }  
  event.sender.send("refreshed-tracks", [...new Set(files)]);
})
