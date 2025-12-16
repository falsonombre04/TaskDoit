const request = require("supertest");
const mongoose = require("mongoose")
const app = require("../app");
const { findById } = require("../model/TaskModel");

jest.mock("../model/TaskModel", () => ({
  create: jest.fn(() => {
    throw new Error("Error simulado");
  }),
  findById:jest.fn((id)=>{
    if(id === "2324343") return null;
    throw new Error("Error simulado en findById()");
  }),
  findByIdAndUpdate:jest.fn((id)=>{
    if(id === "6913ec358febc8c30c28cafd3") return null;
    throw new Error("Error simulado en findByIdAndUpdate")
  }),
  findByIdAndDelete:jest.fn((id)=>{
    if(id === "6913ec358febc8c30c28cafd3") return null;
    throw new Error("Error simulado en findByIdAndDelete")
  })
}));

describe("API /tasks (Prueba unitaria con mock)", () => {
  test("Debería devolver 500 si ocurre un error interno", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ task: "Test de error" });

    expect(res.statusCode).toBe(500);   
    expect(res.body).toHaveProperty("error", "Error en la creación de tarea");
  });
  describe("Get /tasks",()=>{
    test("Debe devolver 500 si falla la consulta de tasks",async ()=>{
      const res = await request(app).get("/tasks");
      expect(res.statusCode).toBe(500);
    })
  })
  describe("Get /tasks/task/:id",()=>{
    test("Deberia devolver 500 si falla la consulta de task/:id",async ()=>{
      const res = await  request(app).get("/tasks/task/6913ec358febc8c30c28cafd");
      expect(res.statusCode).toBe(500);

    })
    test("Deberia devolver 400 si el id es diferentwe de task/:id",async ()=>{
      const res = await request(app).get('/tasks/task/2324343');
      expect(res.statusCode).toBe(400)
    })
  })
  describe("Put /tasks/task/:id",()=>{
    test("Deberoa devolver 500 si falla la consulta de task:/id",async ()=>{
      const res = await request(app).put('/tasks/task/6913ec358febc8c30c28cafd');
      expect(res.statusCode).toBe(500)
    })
  })
  describe("Delete /tasks/task/:id",()=>{
    test("Deberia devolver 500 si falla el eliminar consulta de task/:id",async ()=>{
      const res = await request(app).delete("/tasks/task/6913ec358febc8c30c28cafd");
      expect(res.statusCode).toBe(500);
    })
    test("Deberia devolver 400 si el formato id no es valido",async ()=>{
      const res = await request(app).delete("/tasks/task/123");
      expect(res.statusCode).toBe(400);
    })
  })
});
