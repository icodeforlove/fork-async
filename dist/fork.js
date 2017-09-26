'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.on('uncaughtException', function (error) {
	process.send({ error: error.stack });
});

process.on('message', function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(message) {
		var func, args, done;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						done = function done(error, data) {
							if (error) {
								throw error;
							}

							process.send({ message: data });
						};

						func = message.func, args = message.args ? message.args.slice(0) : [];


						args.push(done);

						_context.prev = 3;
						_context.next = 6;
						return eval('(' + func + ')').apply(null, args);

					case 6:
						_context.next = 11;
						break;

					case 8:
						_context.prev = 8;
						_context.t0 = _context['catch'](3);

						process.send({ error: _context.t0.stack });

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[3, 8]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}());