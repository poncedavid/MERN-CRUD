import z from "zod"; // Importamoms zod para validar los datos

export const registerSchema = z.object({
  // Esquema para registrar un usuario


  username: z // El nombre de usuario
    .string({
      // Tipo de dato
      message: "username is required", // Mensaje de error si no se proporciona el nombre de usuario
    })
    .min(3, {
      message: "username must be at least 3 characters long",
    }), // El nombre de usuario debe tener al menos 3 caracteres



  email: z
    .string({
      message: "email is required",
    })
    .email({
      message: "email is invalid",
    }),


    
  password: z
    .string({
      message: "password is required",
    })
    .min(6, {
      message: "password must be at least 6 characters long",
    }), // La contraseña debe tener al menos 6 caracteres
});

export const loginSchema = z.object({
  // Esquema para iniciar sesión
  email: z // El email
    .string({
      // Tipo de dato
      message: "Email es requerido",
    })
    .email({
      message: "Email es inválido",
    }),
  password: z
    .string({
      message: "Password es requerido",
    })
    .min(6,{
      message: "La contraseña debe tener al menos 6 caracteres",
    
    }) // La contraseña debe tener al menos 6 caracteres
});
