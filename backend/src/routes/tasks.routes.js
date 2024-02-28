import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import {
    getTasks,
    createTask,
    getTask,
    updatedTask,
    deleteTask,
} from "../controllers/tasks.controller.js";




const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask );
router.post("/tasks", authRequired, createTask);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updatedTask);

export default router;
