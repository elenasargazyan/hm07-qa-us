// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
   
  "deliveryTime": 8,
  "products": [
    {
      "id": 1,
      "quantity": 1
    }
  ]
}

test('should be 200 ok on status code', async () => {
	let statusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		statusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});

test('should be 0 deliveryPrice of speedy', async () => {
	let deliveryPrice
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const responseBody = await response.json();
		
		deliveryPrice = responseBody.Speedy.deliveryPrice 
	} catch (error) {
		console.error(error);
	}
	expect(deliveryPrice).toBe(0);
});