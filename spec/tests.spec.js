import forkAsync from '../dist/index';

describe('General', () => {
	it('it can handle a basic promise', async done => {
		let result = await forkAsync(`async (one, two, done) => {
			setTimeout(() => {
				done(null, one + two);
			}, 500);
		}`, [1, 2]);

		expect(result).toBe(3);
		done();
	});

	it('it can handle a uncaught error', async done => {
		let error = false;

		try {
			await forkAsync(`async (one, two, done) => {
				throw new Error('test');
				done();
			}`, [1, 2]);
		} catch (e) {
			error = true;
		}

		expect(error).toBe(true);
		done();
	});

	it('it can handle a standard error', async done => {
		let error = false;

		try {
			await forkAsync(`async (one, two, done) => {
				done(new Error('test'));
			}`, [1, 2]);
		} catch (e) {
			error = true;
		}

		expect(error).toBe(true);
		done();
	});
});