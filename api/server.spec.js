const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

describe("Server: server.js", () => {
  describe("Get to / endpoint", () => {
    it("should respond with a status code 200", async () => {
      let res = await request(server).get("/");

      expect(res.status).toBe(200);
    });
    it("should respond with JSON", async () => {
      let res = await request(server).get("/");

      expect(res.type).toMatch(/json/i);
    });
  });
  describe("Get to /users endpoint", () => {
    it("should respond with the list of users", async () => {
      let res = await request(server).get("/users");

      expect(res.status).toBe(200);
    });
  });
});
