import jwt from "jsonwebtoken"; // Importando la librería jsonwebtoken para verificar el token

import { TOKEN_SECRET } from "../config.js"; // Importando la clave secreta para firmar el token

export const authRequired = (req, res, next) => {
  // Middleware para verificar si el usuario está autenticado

  const { token } = req.cookies; // Obteniendo el token de las cookies

  if (!token)
    // Si no hay token
    return res.status(401).json({ message: "No hay token: no autorizado" }); // No autorizado

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    // Verificar el token
    if (err)
      // Si hay un error
      return res.status(401).json({ message: "Token no válido" }); // No autorizado

    req.user = user; // Si el token es válido, guardar el usuario en el objeto req
    next(); // Pasar al siguiente middleware
  });
};