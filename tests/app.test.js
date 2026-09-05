const request = require("supertest");
const app = require("../api/index");

describe("GET /", () => {
  test("should return message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "CI/CD PROJECT",
    });
  });
});
