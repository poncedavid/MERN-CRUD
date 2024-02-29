import User from "../models/user.model.js"; // Importando el modelo de usuario para la base de datos
import bcrypt from "bcryptjs"; // Importando bcrypt para encriptar la contraseña

import { createAccessToken } from "../libs/jwt.js"; // Importando la función para crear el token

export const register = async (req, res) => { 
  // Crear un nuevo usuario en la base de datos

  const { username, email, password } = req.body; // Obteniendo los datos del usuario

  try {
    const passwordHash = await bcrypt.hash(password, 10); // Encriptando la contraseña

    const newUser = new User({ // Creando un nuevo usuario con los datos obtenidos
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save(); // Guardar en la base de datos
    const token = await createAccessToken({ id: userSaved._id }); // Crear token
    res.cookie("token", token);
    res.json({
      //Para no mostrar el password
      // Parametros que se van a mostrar en el front
      _id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    // no es recomendado enviar tantos mensajes de usuario y contraseña incorrecta por seguridad. La persona que intente hackear la cuenta puede saber si el usuario existe o no.
    // Se recomienda enviar un mensaje generico como "Usuario o contraseña incorrecta"

    const token = await createAccessToken({ id: userFound._id }); // Crear token
    res.cookie("token", token);
    res.json({
      //Para no mostrar el password
      // Parametros que se van a mostrar en el front
      _id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.send("Haz cerrado sesión y limpiado cookies.");
  return res.sendStatus(204);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    //Para no mostrar el password
    // Parametros que se van a mostrar en el front
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
