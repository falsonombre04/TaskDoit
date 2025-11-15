const request = require("supertest");
const mongoose = require("mongoose")
const app = require("../server");

jest.mock("../model/TaskModel", () => ({
  create: jest.fn(() => {
    throw new Error("Error simulado");
  }),
}));

describe("API /tasks (Prueba unitaria con mock)", () => {
  it("Debería devolver 500 si ocurre un error interno", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ task: "Test de error" });

    expect(res.statusCode).toBe(500);   
    expect(res.body).toHaveProperty("error", "Error en la creación de tarea");
  });
});
