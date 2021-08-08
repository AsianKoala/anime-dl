const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')
const bg_randomizer = require('./js/random_bg.js')
require('@electron/remote/main').initialize()

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        icon: path.join(__dirname, '../build/azusa.ico'),
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })

    win.loadFile('./src/index.html')

    win.on('close', function () {
        bg_randomizer.iterate()
    })

    // win.on('close', function () {

    // })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})