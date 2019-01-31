const request = require("supertest");
const server = require("./server");

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
  describe("Post to /users endpoint", () => {
    it("should respond with a status code 201 and a message", async () => {
      let body = { name: "Danielle" };

      let res = await request(server)
        .post("/users")
        .send(body);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ hello: "Danielle" });

      body = { name: "charles" };
      res = await request(server)
        .post("/users")
        .send(body);
      expect(res.status).toBe(201);
      expect(res.body).toEqual({ hello: "charles" });
    });
  });
});
