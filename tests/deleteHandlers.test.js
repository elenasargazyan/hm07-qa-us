// eslint-disable-next-line no-undef
const config = require('../config');

test('should be 200 ok on status code', async () => {
	let statusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			
			method: 'DELETE',
		});
		statusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200)
});
test('should be "ok": true after deleting', async () => {
	let ok
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			
			method: 'DELETE',
		});
		
		const body = await response.json()
		ok = body.ok
	} catch (error) {

		console.error(error);

	}
	expect(ok).toBe(true);
});