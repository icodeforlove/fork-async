'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (func, args) {
	return new _promise2.default(function (resolve, reject) {
		var child = fork(__dirname + '/fork.js');

		child.on('message', function (message) {
			if (message.error) {
				reject(message.error);
			} else {
				resolve(message.message);
			}

			child.kill();
		});

		child.on('error', function (error) {
			reject(error);
			child.kill();
		});

		child.send({ func: String(func || 'function (done) {}'), args: args || [] });
	});
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('child_process'),
    fork = _require.fork;

module.exports = exports['default'];