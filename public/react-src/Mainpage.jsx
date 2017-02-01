'use strict'
import {Component, PropTypes} from 'react'

export default class extends Component {

    static get propTypes(){
        return {
            fnTransferCallback: PropTypes.func.isRequired
        }
    }

    render(){
        return (
            <div>
                <button id="transfer" className="clickable" onClick={this.props.fnTransferCallback}>TRANSER</button>
            </div>
        )
    }
}