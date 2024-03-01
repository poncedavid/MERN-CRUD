import User from "../models/user.model.js"; // Importando el modelo de usuario para la base de datos
import bcrypt from "bcryptjs"; // Importando bcrypt para encriptar la contraseña
import { createAccessToken } from "../libs/jwt.js"; // Importando la función para crear el token
import jwt from "jsonwebtoken"; // Importando jwt para verificar el token
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  //Crear un nuevo usuario en la base de datos

  const { username, email, password } = req.body; //Obteniendo los datos del usuario

  try {
    const userFound = await User.findOne({ email }); //Buscar el usuario por el email
    const userFoundUsername = await User.findOne({ username }); //Buscar el usuario por el username
    if (userFound)
      //Si el correo ya existe
      return res.status(400).json(["The mail already exists"]); // Responder con un estado 400 y un mensaje de error

    if (userFoundUsername)
      //Si el usuario ya existe
      return res.status(400).json(["The username already exists"]); // Responder con un estado 400 y un mensaje de error

      

    const passwordHash = await bcrypt.hash(password, 10); //Encriptando la contraseña

    const newUser = new User({
      //Creando un nuevo usuario con los datos obtenidos
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save(); //Guardar en la base de datos

    const token = await createAccessToken({ id: userSaved._id }); //Crear token


    res.cookie("token", token); // Guardar el token en las cookies


    res.json({
      //Para no mostrar el password
      //Parametros que se van a mostrar en el front
      _id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });


  } catch (error) {
    // Si hay un error
    res.status(500).json({ message: error.message }); // Responder con un estado 500 y un mensaje de error
  }
};

export const login = async (req, res) => {
  // Iniciar sesión
  const { email, password } = req.body; // Obtener el email y la contraseña del cuerpo de la petición

  try {
    // Intentar hacer lo siguiente

    const userFound = await User.findOne({ email }); // Buscar el usuario por el email
    if (!userFound)
      // Si no se encuentra el usuario
      return res.status(400).json(["Usuario no encontrado"]); // Responder con un estado 400 y un mensaje de error

    const isMatch = await bcrypt.compare(password, userFound.password); // Comparar la contraseña

    if (!isMatch)
      // Si no coincide la contraseña
      return res.status(400).json(["Contraseña incorrecta"]); // Responder con un estado 400 y un mensaje de error

    // no es recomendado enviar tantos mensajes de usuario y contraseña incorrecta por seguridad. La persona que intente hackear la cuenta puede saber si el usuario existe o no.
    // Se recomienda enviar un mensaje generico como "Usuario o contraseña incorrecta"

    const token = await createAccessToken({ id: userFound._id }); // Crear token
    res.cookie("token", token); // Guardar el token en las cookies
    res.json({
      // Responder con un estado 200 y los siguientes datos
      //Para no mostrar el password
      // Parametros que se van a mostrar en el front
      _id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    // Si hay un error
    res.status(500).json({ message: error.message }); // Responder con un estado 500 y un mensaje de error
  }
};

export const logout = (req, res) => {
  // Cerrar sesión

  res.cookie("token", "", {
    // Limpiar las cookies
    expires: new Date(0), // Fecha de expiración
  });

  res.send("Haz cerrado sesión y limpiado cookies."); // Responder con un mensaje
  return res.sendStatus(204); // Responder con un estado 204
};

export const profile = async (req, res) => {
  // Perfil del usuario

  const userFound = await User.findById(req.user.id); // Buscar el usuario por el id
  
  
  if (!userFound)
    // Si no se encuentra el usuario
    return res.status(400).json({ message: "Usuario no encontrado" }); // Responder con un estado 400 y un mensaje de error

  return res.json({
    // Responder con un estado 200 y los siguientes datos
    // Parametros que se van a mostrar en el front
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};


export const verifyToken = async (req, res) => { // Verificar el token
  const {token} = req.cookies; // Obtener el token de las cookies

  if (!token) return res.status(401).json({ message: "Unauthorized" }); // Si no hay token, responder con un estado 401 y un mensaje de error

  jwt.verify(token, TOKEN_SECRET, async (err, user) => { // Verificar el token
    if (err) return res.status(401).json({ message: "Unauthorized" }); // Si hay un error, responder con un estado 401 y un mensaje de error

    const userFound = await User.findById(user.id); // Buscar el usuario por el id
    if (!userFound) // Si no se encuentra el usuario
      return res.status(400).json({ message: "Unauthorized" }); // Responder con un estado 400 y un mensaje de error

    return res.json({ // Responder con un estado 200 y los siguientes datos
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  }); 
}