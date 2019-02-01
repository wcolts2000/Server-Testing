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
  // describe("Delete to /users/:id endpoint", () => {
  //   it("should respond with the number of deleted users", async () => {
  //     let user = { name: "Fred" };

  //     let res = await request(server)
  //       .post("/users")
  //       .send(user);
  //     let singleUser = await request(server).get("/users/1");
  //     // .where({ name: "Fred" });

  //     expect(res.status).toBe(201);
  //     expect(singleUser.name).toEqual("Fred");
  //   });
  // });
});
