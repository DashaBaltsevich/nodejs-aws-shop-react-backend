const { data } = require("./mocks")

exports.getProductsById = async (event) => {
	const productId = event.pathParameters.id
	const product = data.filter((p) => p.id === productId.toString())
	const headers = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
	}

	if (!product.length) {
		return {
			statusCode: 404,
			headers: headers,
			body: JSON.stringify({ message: "Product not found" }),
		}
	}

	return {
		statusCode: 200,
		headers: headers,
		body: JSON.stringify({ data: product[0] }),
	}
}
