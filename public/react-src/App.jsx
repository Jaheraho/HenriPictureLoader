'use strict'
import {Component} from 'react'
import Options from './Options'
import Mainpage from './Mainpage'
import StaticButtons from './StaticButtons'

module.exports = class extends Component {

    constructor(props){
        super(props)

        this.state = {
            showOptions: true
        }
    }

    toggleBetweenMainAndOptionView() {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    closeProgram() {
        remote.getCurrentWindow().close()
    }

    render(){
        return (
            <div>
                <StaticButtons {...{
                    closeFn: this.closeProgram.bind(this),
                    toggleFn: this.toggleBetweenMainAndOptionView.bind(this),
                    showOptions: this.state.showOptions
                }}/>
                {this.state.showOptions ?
                    <Options id="options"></Options>
                    : <Mainpage {...{
                        fnTransferCallback: ()=>{}
                    }}/>
                }
            </div>
        )
    }

}