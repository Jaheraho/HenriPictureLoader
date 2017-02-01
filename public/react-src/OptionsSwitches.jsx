'use strict'
import {Component, PropTypes} from 'react'

export default class extends Component {

    //TODO propTypes

    static get defaultProps(){
        return {
            aElementButtons: [
                'OptionsPathes WRGON',
                'OptionsGeneral WRGON'
            ],
            fnOptionChange: (event) => {
                console.log(`options changed: ${event.target.value}`)
            }
        }
    }

    render(){
        return (
            <div>
                {
                    this.props.aElementButtons.map((element, key)=>{
                        return <button className="clickable" key={key} value={element} onClick={this.props.fnOptionChange}>{element}</button>
                    })
                }
            </div>
        )
    }
}
