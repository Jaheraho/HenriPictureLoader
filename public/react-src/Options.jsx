'use strict'
import {Component, PropTypes} from 'react'
import OptionsSwitches from './OptionsSwitches'
import OptionsGeneral from './Options.General'
import OptionsPathes from './Options.Pathes'

export default class extends Component{

    static get propTypes(){
        return {
            sOptionView: PropTypes.string
        }
    }

    static get defaultProps(){
        return {
            sOptionView: 'OptionsGeneral',
            aElementButtons: [
                'OptionsPathes',
                'OptionsGeneral'
            ]
        }
    }

    constructor(props){
        super(props)
        this.state = {
            sOptionView: this.props.sOptionView
        }
    }

    render(){
        let optionPart = null
        switch(this.state.sOptionView) {
            case 'OptionsPathes':
                optionPart = (<OptionsPathes />)
                break;
            default:// 'OptionsGeneral'
                optionPart = (<OptionsGeneral />)
                break;
        }

        return (
            <div>
                <p>OPTIONS</p>
                <OptionsSwitches fnOptionChange={this.optionChange.bind(this)} aElementButtons={this.props.aElementButtons}/>
                {optionPart}
            </div>
        )
    }

    optionChange(event){
        console.log(`!! options changed: ${event.target.value}`)
        this.setState({
            sOptionView: event.target.value
        })
    }

}
