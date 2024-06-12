const { getProductsById } = require("./product-service/getProductsByIdHandler")
const { data } = require("./product-service/mocks")

describe("getProductsById", () => {
	it("should return the product with the given ID", async () => {
		const event = { pathParameters: { id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa" } }
		const response = await getProductsById(event)
		expect(response.statusCode).toBe(200)
		expect(JSON.parse(response.body)).toEqual({ data: data[0] })
	})

	it("should return 404 if the product is not found", async () => {
		const event = { pathParameters: { id: "111" } }
		const response = await getProductsById(event)
		expect(response.statusCode).toBe(404)
		expect(JSON.parse(response.body)).toEqual({ message: "Product not found" })
	})
})
