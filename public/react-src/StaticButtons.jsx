'use strict'
import {PropTypes, Component} from 'react'

export default class extends Component{

    static get defaultProps(){
        return {

        }
    }

    static get propTypes(){
        return {
            closeFn: PropTypes.func.isRequired,
            toggleFn: PropTypes.func.isRequired,
            showOptions: PropTypes.bool.isRequired
        }
    }

    render(){
        return (
            <div>
                <button id="closeapp" className="clickable" onClick={this.props.closeFn}>
                    x
                </button>
                <button id="maximize" className="clickable" onClick={this.props.toggleFn}>
                    {this.props.showOptions ? '[Zurück]' : '[Options]'}
                </button>
            </div>
        )
    }
}