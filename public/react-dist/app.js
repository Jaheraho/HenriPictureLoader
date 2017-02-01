'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _options = require('./options.js');

var _options2 = _interopRequireDefault(_options);

var _mainpage = require('./mainpage.js');

var _mainpage2 = _interopRequireDefault(_mainpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_React$Component) {
    _inherits(_class, _React$Component);

    // static get defaultProps() {
    // return {
    // asdf: 23
    // }
    // }

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this._handleChange = _this._handleChange.bind(_this);
        _this._letContentToggle = _this._letContentToggle.bind(_this);

        setTimeout(function () {

            this.setState({
                hup: 'jarjar??jj'
            });
        }.bind(_this), 3000);

        _this.closeApp = function () {
            remote.getCurrentWindow().close();
        }.bind(_this);

        _this.state = {
            showOptions: false,
            blub: 'hallo welt!',
            hup: 'jarjar!!',
            btn: 'hallo welt'
        };
        return _this;
    }

    _createClass(_class, [{
        key: '_handleChange',
        value: function _handleChange(event) {
            this.setState({ btn: event.target.value });
        }
    }, {
        key: '_letContentToggle',
        value: function _letContentToggle() {
            this.setState({
                showOptions: !this.state.showOptions
            });
            // setTimeout(()=>{
            // resize()
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { id: 'closeapp', className: 'clickable' },
                    'X'
                ),
                React.createElement(
                    'button',
                    { id: 'maximize', className: 'clickable' },
                    this.state.showOptions ? '[Zurück]' : '[Options]'
                ),
                this.state.showOptions ? React.createElement(_options2.default, _extends({}, { id: 'options' })) : React.createElement(_mainpage2.default, { btn: "www" })
            );
        }
    }]);

    return _class;
}(React.Component);