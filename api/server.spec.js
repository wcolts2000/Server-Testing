const request = require("supertest");
const server = require("./server");

describe("Server: server.js", () => {
  describe("Get to / endpoint", () => {
    it("should respond with a status code 200", async () => {
      let res = await request(server).get("/");

      expect(res.status).toBe(200);
    });
  });
});
