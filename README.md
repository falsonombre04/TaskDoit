# DoIt
Aplicación web para crear, organizar y administrar tareas planeadas y completadas
## Estructura del proyecto
/Doit
    - backend
    - frontend
    - README.md
## Tecnologías usadas
**Frontend**
- Framework: React
- Consumo de API con axios
**Backend**
- Nodejs con express
- BBDD: mongoDB (mongoose)
- Dotenv (Gestión de variables de entorno)
- cors (Manejo de CORS)
## Get started
1. ``` git clone https://github.com/falso/Doit.git ```
2. ``` cd Doit ```
3. **Backend**
```cd backend npm install node server.js```
servidor correrá en:http://localhost:3000
4. **Frontend**
```cd frontend npm install npm run dev ```
Servidor disponible en:http://localhost:5173
*** Variable de entorno***
El proyecto utiliza variables de entorno en el backend
se debe crear archivo .env en la carpeta /backend antes de iniciar servidor

PORT=0000
MONGODB_URI=DIRECCION

5. **Rutas de la API (endPoints)**
**Base URL:** http://localhost:3000/tasks

**GET /tasks**
Obtiene todas las tareas
```
{
    "tasks":[
        {
            "_id": "68f2f8ce5b7453180991b559",
			"task": "Lavar ropa",
			"createdAt": "2025-10-18T02:17:50.106Z",
			"updatedAt": "2025-10-18T02:17:50.106Z",
			"__v": 0
        }
    ]
}
```
**POST /tasks**
Crear una nueva tarea
**Body:**
```
{
    task:"preparar el desayuno"
}
```
**Respuesta:**
```
    {
        task:{
           "_id": "6913ec358febc8c30c28cafd",
			"task": "Preparar el desayuno",
			"createdAt": "2025-11-12T02:08:53.853Z",
			"updatedAt": "2025-11-12T02:08:53.853Z",
			"__v": 0 
        }
    }
```