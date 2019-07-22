'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in browser and user is running metamask i.e. web3 is injected by metamask.
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on server 'OR' user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/01d1dec890644cb2b269d0d86c6b54ef');
    web3 = new _web2.default(provider);
}

var getProvider = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return window.web3.currentProvider.enable();

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function getProvider() {
        return _ref.apply(this, arguments);
    };
}();

getProvider();

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJnZXRQcm92aWRlciIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3JFO0FBQ0E7V0FBTSxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBTixBQUNIO0FBSEQsT0FJSSxBQUNBO0FBQ0E7UUFBTSxXQUFVLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFBZ0MsQUFBaEMsQUFBaEIsQUFDQTtXQUFNLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQU4sQUFDSDs7O0FBRUQsSUFBTSwwQkFBQTt3RkFBYyxtQkFBQTtzRUFBQTtzQkFBQTtpREFBQTt5QkFBQTt3Q0FBQTsrQkFFVixPQUFPLEFBQVAsS0FBWSxBQUFaLGdCQUE0QixBQUE1QixBQUZVOzt5QkFBQTt5QkFBQTt3Q0FBQTs7QUFBQTtvQkFBQTtBQUFkOztrQ0FBQTtnQ0FBQTtBQUFBO0FBQU47O0FBTUksQUFFSjs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0RFTEwva2lja3N0YXJ0In0=