const request = require("supertest");
const TaskModel = require("../model/TaskModel");
const app = require("../server");

afterAll(async ()=>{
    await TaskModel.deleteMany({task:"loremIpsum"});
    console.log("Registros de loremIpsum eliminados...")
});

describe("API de task",()=>{
    describe("/tasks-POST",()=>{
        test("Debe crear una tarea", async ()=>{
            const res =  await request(app).post('/tasks').send({task:"loremIpsum"});
            expect(res.statusCode).toBe(201);
        })
    })
    describe("/task-GET",()=>{
        test("Debe consultar todas las tareas", async ()=>{
            const res = await request(app).get("/tasks")
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body.tasks)).toBe(true);
            expect(res.body.length).toBe(0);
        })
    })
});

/*
//ejemplo basico de la simulación
describe("Prueba.....",()=>{
    test("La simulación fue lanzada...",()=>{
        const contenidoMensaje = jest.fn();
        contenidoMensaje("Inicio");
        expect(contenidoMensaje).toHaveBeenCalled();
    });
})*/
