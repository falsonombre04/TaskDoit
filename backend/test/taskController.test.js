const request = require("supertest");
const app = require("../server");

describe("API de task",()=>{
    test("Debe crear una tarea", async ()=>{
        const res =  await request(app).post('/tasks').send({task:"loremIpsum"});
        expect(res.statusCode).toBe(201);
    })
});