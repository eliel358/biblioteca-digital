const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {

      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      
    }
  })
  win.maximize()
  win.loadFile('./index.html')
  win.show()
}
app.whenReady().then(() => {
  createWindow()
  
})
try {
  require('electron-reloader')(module)
} catch (_) {}