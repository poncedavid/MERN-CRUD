import { z } from "zod"; // Importamos zod para validar los datos

export const createTaskSchema = z.object({
  // Esquema para registrar un usuario
  // El título de la tarea
  title: z
    .string({
      // Tipo de dato
      required_error: "title is required", // Mensaje de error si no se proporciona el nombre de usuario
    })
    .min(5), // El nombre de usuario debe tener al menos 3 caracteres
  // La descripción de la tarea
  description: z
    .string({
      // Tipo de dato
      required_error: "description is required", // Mensaje de error si no se proporciona el nombre de usuario
    })
    .min(5), // El nombre de usuario debe tener al menos 3 caracteres
  // La fecha de creación de la tarea
  date: z
    .string() // Tipo de dato
    .datetime() // La fecha de creación de la tarea
    .optional(), // La fecha de creación de la tarea
});
