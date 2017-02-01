'use strict'
import {Component, PropTypes} from 'react'

export default class extends Component {

    static get propTypes(){
        sTargetPath: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <p>Options Pathes!</p>
            </div>
        )
    }

}