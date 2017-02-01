/**
 * main.js
 * @desc electron init file for Picture Copy and Sort
 * @date 20.01.2017
 * @author Jan Hobelmann
 */
console.log('main.js???')
'use strict'

/* --- PUBLIC --- */

const {app, BrowserWindow} = require('electron')
const path = require('path')
const config = require('./config')

/* --- PUBLIC END --- */

// const {spawn} = require('child_process')
// spawn('node C:/Users/hobelmann.it/Sync/dev/htdocs/myproject/node_modules/electron/cli.js', ['C:/Users/hobelmann.it/Sync/dev/htdocs/myproject/'])

// auto reset app when files are changing
require('electron-reload')(__dirname
    , {
         electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
        // electron: 'node ' + path.join(__dirname, 'node_modules', 'electron', 'cli.js')
        // ,hardResetMethod: 'exit'
    }
)

app.on('ready', createWindow)

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow ({
        height: config.initHeight,
        width: config.initWidth,
        // width: 2000,
        frame: false,
        resizeable: false,
        // transparent: true,
    })

    mainWindow.loadURL(`file://${__dirname}/public/index.html`)
}

module.exports.blub = function () {
    return 4+5+1;
}

// console.log(require.main.children);
