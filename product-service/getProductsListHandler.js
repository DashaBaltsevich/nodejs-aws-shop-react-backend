const { data } = require("./mocks")

exports.getProductsList = async (event) => {
	const headers = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
	}

	if (!data.length) {
		return {
			statusCode: 404,
			headers: headers,
			body: JSON.stringify({ message: "Products not found" }),
		}
	}

	return {
		statusCode: 200,
		headers: headers,
		body: JSON.stringify({ data }),
	}
}
