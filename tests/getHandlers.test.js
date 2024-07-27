// eslint-disable-next-line no-undef
const config = require('../config');

test('should be 200 ok on status code', async () => {
	let statusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		statusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200)
});


test('should be order and go in the name', async () => {
	let name
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		const body = await response.json()
		name = body [0].name
	} catch (error) {

		console.error(error);

	}
	expect(name).toBe("Order and Go");
});