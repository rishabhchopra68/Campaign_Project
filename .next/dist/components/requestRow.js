'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\DELL\\kickstart\\components\\requestRow.js';


var requestRow = function (_React$Component) {
    (0, _inherits3.default)(requestRow, _React$Component);

    function requestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, requestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = requestRow.__proto__ || (0, _getPrototypeOf2.default)(requestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(requestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                totalContributors = _props.totalContributors;

            var readyToFinalize = request.approvalCount > totalContributors / 2;
            return _react2.default.createElement(Row, { disabled: request.complete, positive: !request.complete && readyToFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, '      ', _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, request.approvalCount, '/', totalContributors), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Finalize')));
        }
    }]);

    return requestRow;
}(_react2.default.Component);

exports.default = requestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsInJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwidG90YWxDb250cmlidXRvcnMiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0YsQSxxRkFBVyxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDRDtBQURDLHVDQUNTLHdCQUFTLE1BQUEsQUFBSyxNQUR2QixBQUNTLEFBQW9COzRDQUQ3QjttQ0FFZSxjQUFBLEFBQUssSUFGcEIsQUFFZSxBQUFTOzs2QkFBekI7QUFGQyxnREFBQTs0Q0FBQTs0Q0FHRCxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBSkgsQUFHRCxBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFIQzs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBT1gsc0ZBQVksb0JBQUE7MEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ0Y7QUFERSx1Q0FDUSx3QkFBUyxNQUFBLEFBQUssTUFEdEIsQUFDUSxBQUFvQjs2Q0FENUI7bUNBRWMsY0FBQSxBQUFLLElBRm5CLEFBRWMsQUFBUzs7NkJBQXpCO0FBRkUsaURBQUE7NkNBQUE7NENBR0YsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0NBQzVDLFNBSkYsQUFHRixBQUFxRCxBQUNqRCxBQUFTO0FBRHdDLEFBQ3ZELDZCQURFOzs2QkFIRTs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FRSjtnQkFBQSxBQUNHLE1BREgsQUFDZ0IsdUJBRGhCLEFBQ0c7Z0JBREgsQUFDUSxPQURSLEFBQ2dCLHVCQURoQixBQUNRO3lCQUMwQixLQUZsQyxBQUV1QztnQkFGdkMsQUFFRyxZQUZILEFBRUc7Z0JBRkgsQUFFTSxpQkFGTixBQUVNO2dCQUZOLEFBRWMsMkJBRmQsQUFFYyxBQUNsQjs7Z0JBQU0sa0JBQWlCLFFBQUEsQUFBUSxnQkFBYyxvQkFBN0MsQUFBK0QsQUFDL0Q7bUNBQ0ssY0FBRCxPQUFLLFVBQVUsUUFBZixBQUF1QixVQUFVLFVBQVUsQ0FBQyxRQUFELEFBQVMsWUFBcEQsQUFBZ0U7OEJBQWhFO2dDQUFBO0FBQUE7YUFBQSxFQUNJLDBCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUZKLEFBRUksQUFBZSxBQUNmLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLDZCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FIdEMsQUFHSSxBQUFPLEFBQWlDLEFBQ3hDLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpKLEFBSUksQUFBZSxBQUNmLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFBLEFBQWUsZUFBZ0IsS0FMbkMsQUFLSSxBQUNBLG9DQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjtBQUFBLHVCQUNRLEFBQVEsV0FBUixBQUFtQix1QkFDbkIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDOzhCQUExQztnQ0FBQTtBQUFBO2FBQUEsRUFSWixBQU1JLEFBRVEsQUFHUiw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSx1QkFDSyxBQUFRLFdBQVIsQUFBbUIsdUJBQ3BCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5Qzs4QkFBekM7Z0NBQUE7QUFBQTthQUFBLEVBZFosQUFDSSxBQVdJLEFBRUksQUFLZjs7Ozs7RUF2Q29CLGdCQUFNLEEsQUEwQy9COztrQkFBQSxBQUFlIiwiZmlsZSI6InJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvREVMTC9raWNrc3RhcnQifQ==