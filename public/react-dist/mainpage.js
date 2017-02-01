'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mainpage = function (_React$Component) {
    _inherits(Mainpage, _React$Component);

    function Mainpage(props) {
        _classCallCheck(this, Mainpage);

        var _this = _possibleConstructorReturn(this, (Mainpage.__proto__ || Object.getPrototypeOf(Mainpage)).call(this, props));

        _this.state = {
            btn: _this.props.btn
        };
        return _this;
    }

    _createClass(Mainpage, [{
        key: 'btnClick',
        value: function btnClick() {
            console.log('hallo welt');
            this.setState({
                btn: 'changed'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'text', className: 'clickable' }),
                _react2.default.createElement(
                    'button',
                    { className: 'clickable', onClick: this.btnClick.bind(this) },
                    this.state.btn
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pathes' },
                    _react2.default.createElement(
                        'div',
                        { className: 'path' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'text-src-path' },
                            'From'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'path-input-button' },
                            _react2.default.createElement('input', { id: 'text-src-path', placeholder: 'E:\\DCIM', disabled: true }),
                            _react2.default.createElement(
                                'button',
                                { className: 'clickable' },
                                '...'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'path' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'text-target-path' },
                            'To'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'path-input-button' },
                            _react2.default.createElement('input', { id: 'text-target-path', placeholder: 'C:\\Bilder\\', disabled: true }),
                            _react2.default.createElement(
                                'button',
                                { className: 'clickable' },
                                '...'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { id: 'transfer', className: 'clickable' },
                        'TRANSER'
                    )
                )
            );
        }
    }]);

    return Mainpage;
}(_react2.default.Component);

exports.default = Mainpage;


Mainpage.defaultProps = {
    btn: 'HALLLÖ'
};