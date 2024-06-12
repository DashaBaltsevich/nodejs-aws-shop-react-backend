const { getProductsList } = require("./product-service/getProductsListHandler")
const data = require("./product-service/mocks")

describe("getProductsList ", () => {
	it("should return all products", async () => {
		const response = await getProductsList()
		expect(response.statusCode).toBe(200)
		expect(JSON.parse(response.body)).toEqual(data)
	})
})
