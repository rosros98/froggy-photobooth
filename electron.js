const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "build/index.html"));
  } else {
    win.loadURL("http://localhost:3000");
  }
}

app.whenReady().then(createWindow);