const cat =require('cat-picture');

const electrom = require('electron');

electron.app.on('ready', function () {
	var mainWindow = new electron.BrowserWindow({width = 600, height: 800})
	mainWindow.loadUrl('file://' + __dirname + '/index.html');
})

