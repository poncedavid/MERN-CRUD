import { Router } from "express"; // Importando Router desde express para crear las rutas
import {
  login,
  logout,
  profile,
  register,
} from "../controllers/auth.controller.js"; // Importando los controladores de autenticación

import { authRequired } from "../middlewares/validateToken.js"; // Importando el middleware para verificar el token

import { validateSchema } from "../middlewares/validator.middleware.js"; // Importando el middleware para validar el esquema

import { registerSchema, loginSchema } from "../validators/auth.validator.js"; // Importando los esquemas de validación para autenticación

const router = Router(); // Creando una instancia de Router

router.post( // Metodo para registrar un usuario

  "/register", // Ruta para registrar un usuario
  validateSchema(registerSchema), // Middleware para validar el esquema
  register); // Ruta para regist

router.post("/login", validateSchema(loginSchema), login); // Ruta para iniciar sesión

router.post("/logout", logout); // Ruta para cerrar sesión

router.get("/profile", authRequired, profile); // Ruta para obtener el perfil del usuario

export default router; // Exportando las rutas de autenticación
