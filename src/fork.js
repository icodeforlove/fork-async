process.on('uncaughtException', error => {
	process.send({error: error.stack});
});

process.on('message', async message => {
	let func = message.func,
		args = message.args ? message.args.slice(0) : [];

	function done (error, data) {
		if (error) {
			throw error;
		}

		process.send({message: data});
	}

	args.push(done);

	try {
		await (eval(`(${func})`).apply(null, args));
	} catch (error) {
		process.send({error: error.stack});
	}
});