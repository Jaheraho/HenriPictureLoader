'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _OptionsSwitches = require('./OptionsSwitches');

var _OptionsSwitches2 = _interopRequireDefault(_OptionsSwitches);

var _Options = require('./Options.General');

var _Options2 = _interopRequireDefault(_Options);

var _Options3 = require('./Options.Pathes');

var _Options4 = _interopRequireDefault(_Options3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    _createClass(_class, null, [{
        key: 'propTypes',
        get: function get() {
            return {
                sOptionView: _react.PropTypes.string
            };
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {
                sOptionView: 'OptionsGeneral',
                aElementButtons: ['OptionsPathes', 'OptionsGeneral']
            };
        }
    }]);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            sOptionView: _this.props.sOptionView
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var optionPart = null;
            switch (this.state.sOptionView) {
                case 'OptionsPathes':
                    optionPart = React.createElement(_Options4.default, null);
                    break;
                default:
                    // 'OptionsGeneral'
                    optionPart = React.createElement(_Options2.default, null);
                    break;
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'OPTIONS'
                ),
                React.createElement(_OptionsSwitches2.default, { fnOptionChange: this.optionChange.bind(this), aElementButtons: this.props.aElementButtons }),
                optionPart
            );
        }
    }, {
        key: 'optionChange',
        value: function optionChange(event) {
            console.log('!! options changed: ' + event.target.value);
            this.setState({
                sOptionView: event.target.value
            });
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;