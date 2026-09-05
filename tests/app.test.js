const request = require("supertest");
const app = require("../api/index");

describe("GET /", () => {
  test("should return message", async () => {
    const response = await request(app);

    expect(response.statusCode).toBe(200);
  });
});
