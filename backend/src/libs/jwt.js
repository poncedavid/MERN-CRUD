import jwt from "jsonwebtoken"; // Importando la librería jsonwebtoken para crear el token

import { TOKEN_SECRET } from "../config.js"; // Importando la clave secreta para firmar el token

export function createAccessToken(payload) { // Función para crear el token con el payload que recibe
  return new Promise((resolve, reject) => { // Retornar una promesa
    jwt.sign( // Firmar el token
      payload, // Payload que recibe
      TOKEN_SECRET, // Clave secreta para firmar el token
      {
        expiresIn: "1d", // Expira en 1 día
      },
      (err, token) => {
        if (err) reject(err); // Si hay un error, rechazar la promesa
        resolve(token); // Si no hay error, resolver la promesa con el token
      }
    );
  });
}
