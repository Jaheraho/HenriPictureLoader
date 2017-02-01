'use strict'
import React from 'react'

export default class Mainpage extends React.Component {

    constructor(props){
        super(props)
        this.state={
            btn: this.props.btn
        }
    }

    btnClick(){
        console.log('hallo welt')
        this.setState({
            btn: 'changed'
        })
    }

    render(){
        return (
            <div>
                <input type="text" className="clickable"  />
                <button className="clickable" onClick={this.btnClick.bind(this)}>{this.state.btn}</button>
                <div className="pathes">
                    <div className="path">
                        <label htmlFor="text-src-path">From</label>
                        <div className="path-input-button">
                            <input id="text-src-path" placeholder="E:\DCIM" disabled />
                            <button className="clickable">...</button>
                        </div>
                    </div>
                    <div className="path">
                        <label htmlFor="text-target-path">To</label>
                        <div className="path-input-button">
                            <input id="text-target-path" placeholder="C:\Bilder\" disabled />
                            <button className="clickable">...</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button id="transfer" className="clickable">TRANSER</button>
                </div>
            </div>
        )
    }
}

Mainpage.defaultProps = {
    btn: 'HALLLÖ'
}
