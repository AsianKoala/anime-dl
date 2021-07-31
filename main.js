const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

let menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Settings"
            }
        ]
    },
];


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        icon: path.join(__dirname, './res/azusa.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })

    win.loadFile('index.html')

    let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}


app.whenReady().then(() => {
    createWindow()

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
