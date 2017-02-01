'use strict'
const React = require('react')
const ReactDOM = require('react-dom')
const app = require('./react-dist/app.js')

const {remote} = require('electron')
const curWin = remote.getCurrentWindow()

setTimeout(function() {
    ReactDOM.render(React.createElement(app), document.getElementById('app'))
    resize()
})

window.resize = function () {

    //SET SIZE AND MAKE VISIBILE
    let neededWidth = curWin.getSize()[0]
    let neededHeight = document.getElementById('app').clientHeight
    curWin.setSize(neededWidth, neededHeight)
    document.getElementById('app').style.opacity=1
}