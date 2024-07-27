// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
   
	productsList: [
		{
			id: 5,
			quantity: 1
		}
	]
	
  }
  
  test('should be 200 ok on status code', async () => {
	  let statusCode
	  try {
		  const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			  method: 'PUT',
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


test('shoul be "ok": true in the productsList of kit id path 4', async () => {
	let productsList
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const responseBody = await response.json();
		productsList = responseBody["ok"];
		
	} catch (error) {
		console.error(error);
	}
	expect(productsList).toBe(true)
});
