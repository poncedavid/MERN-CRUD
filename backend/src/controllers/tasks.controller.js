//importamos los modelos de la base de datos
import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  // Obteniendo todas las tareas
  //const tasks = await Task.find();//Obteniendo todas las tareas creadas en la base de datos
  const tasks = await Task.find({ user: req.user.id }).populate("user");
  //Obteniendo todas las tareas creadas por el usuario autenticado
  res.json(tasks);
};

export const createTask = async (req, res) => {
  // Creando una tarea
  const { title, description, date } = req.body;

  const newTask = new Task({
    // Creando una nueva tarea con los datos obtenidos
    title,
    description,
    date,
    user: req.user.id, //Obteniendo el id del usuario autenticado
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const getTask = async (req, res) => {
  // Obteniendo una tarea
  const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  return send.sendStatus(204);
};

export const deleteTask = async (req, res) => {
  // Eliminando una tarea
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(task);
};

export const updatedTask = async (req, res) => {
  // Actualizando una tarea
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(task);
};
