const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });

    // load the local HTML file
    let url = require('url').format({
        protocol: 'file',
        slashes: true,
        pathname: require('path').join(__dirname, 'app.html')
    });
    console.log(url);
    mainWindow.loadURL(url);
});