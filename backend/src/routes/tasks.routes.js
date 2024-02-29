import { Router } from "express"; // Importando Router desde express para crear las rutas
import { authRequired } from "../middlewares/validateToken.js"; // Importando el middleware para verificar el token

import {
  getTasks,
  createTask,
  getTask,
  updatedTask,
  deleteTask,
} from "../controllers/tasks.controller.js"; // Importando los controladores de tareas

import { validateSchema } from "../middlewares/validator.middleware.js"; // Importando el middleware para validar el esquema
import { createTaskSchema } from "../validators/task.validator.js"; // Importando el esquema de validación para tareas

const router = Router(); // Creando una instancia de Router

router.get("/tasks", authRequired, getTasks); // Ruta para obtener todas las tareas

router.get("/tasks/:id", authRequired, getTask); // Ruta para obtener una tarea por su id

router.post(
  // Ruta para crear una tarea
  "/tasks",
  authRequired, // Middleware para verificar si el usuario está autenticado
  validateSchema(createTaskSchema), // Middleware para validar el esquema
  createTask // Controlador para crear una tarea
);
router.delete("/tasks/:id", authRequired, deleteTask); // Ruta para eliminar una tarea

router.put("/tasks/:id", authRequired, updatedTask); // Ruta para actualizar una tarea

export default router; // Exportando las rutas de tareas
