import z from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
    })
    .min(3),
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      required_error: "email is invalid",
    }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6),
});

export const loginSchema = z.object({
  email: z
    .string({
      requiered_error: "Email es requerido",
    })
    .email({
      message: "Email es inválido",
    }),
  password: z
    .string({
      required_error: "Password es requerido",
    })
    .min(6, {
      message: "Password debe tener al menos 6 caracteres",
    }),
});
