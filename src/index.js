const { fork } = require('child_process');

export default function (func, args) {
	return new Promise((resolve, reject) => {
		const child = fork(`${__dirname}/fork.js`);

		child.on('message', message => {
			if (message.error) {
				reject(message.error);
			} else {
				resolve(message.message);
			}

			child.kill();
		});

		child.on('error', error => {
			reject(error);
			child.kill();
		});

		child.send({func: String(func || 'function (done) {}'), args: args || []});
	});
}