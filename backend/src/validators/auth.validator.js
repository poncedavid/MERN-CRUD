import z from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username es inválido",
    })
    .min(3, {
      required_error: "Username debe tener al menos 3 caracteres",
    }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      required_error: "Email es inválido",
    }),
  password: z
    .string({
      required_error: "Password es requerido",
    })
    .min(6, {
      required_error: "Password debe tener al menos 6 caracteres",
    }),
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
