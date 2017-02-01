'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _Options = require('./Options');

var _Options2 = _interopRequireDefault(_Options);

var _Mainpage = require('./Mainpage');

var _Mainpage2 = _interopRequireDefault(_Mainpage);

var _StaticButtons = require('./StaticButtons');

var _StaticButtons2 = _interopRequireDefault(_StaticButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            showOptions: true
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'toggleBetweenMainAndOptionView',
        value: function toggleBetweenMainAndOptionView() {
            this.setState({
                showOptions: !this.state.showOptions
            });
        }
    }, {
        key: 'closeProgram',
        value: function closeProgram() {
            remote.getCurrentWindow().close();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_StaticButtons2.default, {
                    closeFn: this.closeProgram.bind(this),
                    toggleFn: this.toggleBetweenMainAndOptionView.bind(this),
                    showOptions: this.state.showOptions
                }),
                this.state.showOptions ? React.createElement(_Options2.default, { id: 'options' }) : React.createElement(_Mainpage2.default, {
                    fnTransferCallback: function fnTransferCallback() {}
                })
            );
        }
    }]);

    return _class;
}(_react.Component);