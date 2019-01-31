const request = require("supertest");
const server = require("../api/server");

const db = require("../data/dbConfig");
const userModel = require("./userModel");

afterEach(async () => {
  await db("users").truncate();
});

describe("Users model", () => {
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
    it("should insert the provided user", async () => {
      const user = await userModel.insert({ name: "John Doe" });

      let users = await db("users");
      expect(users).toHaveLength(1);
      expect(user.name).toEqual("John Doe");
    });
  });
});
