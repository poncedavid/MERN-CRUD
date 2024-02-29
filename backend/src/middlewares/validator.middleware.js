export const validateSchema = (schema) => (req, res, next) => {
  // Middleware para validar el esquema
  try {
    // Intentar validar el esquema
    schema.parse(req.body); // Parsear el cuerpo de la petición con el esquema
    next(); // Si el esquema es válido, pasar al siguiente middleware
  } catch (error) {
    // Si hay un error
    res
      .status(400) // Responder con un estado 400
      .json( error.errors.map((err) => err.message) ); // Enviar un mensaje de error con los errores encontrados
  }
};
