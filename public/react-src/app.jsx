'use strict'
import Options from './options.js'
import Mainpage from './mainpage.js'

module.exports = class extends React.Component {


    // static get defaultProps() {
    // return {
    // asdf: 23
    // }
    // }

    constructor(props){
        super(props)
        this._handleChange = this._handleChange.bind(this)
        this._letContentToggle = this._letContentToggle.bind(this)

        setTimeout(function () {

            this.setState({
                hup: 'jarjar??jj'
            })
        }.bind(this), 3000)

        this.closeApp = function () {
            remote.getCurrentWindow().close()
        }.bind(this)

        this.state = {
            showOptions: false,
            blub: 'hallo welt!',
            hup: 'jarjar!!',
            btn: 'hallo welt'
        }
    }

    _handleChange(event){
        this.setState({btn: event.target.value})
    }

    _letContentToggle() {
        this.setState({
            showOptions: !this.state.showOptions
        })
        // setTimeout(()=>{
        // resize()
        // })
    }

    render(){
        return (
            <div>
                <button id="closeapp" className="clickable">X</button>
                <button id="maximize" className="clickable">{this.state.showOptions ? '[Zurück]' : '[Options]'}</button>
                {this.state.showOptions ? <Options {...{}} id="options"></Options> : <Mainpage {...{btn:"www"}}/>}
            </div>
        )
    }

}