import mongoose from "mongoose"; // Importamos mongoose para conectarnos a la base de datos

const taskSchema = new mongoose.Schema( // Creando el esquema de tareas con mongoose
  {
    title: { // El título de la tarea
      type: String, // Tipo de dato
      required: true, // Requerido
    },
    description: { // La descripción de la tarea
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now, // La fecha de creación de la tarea
    },

    user: { // El usuario que creó la tarea
      type: mongoose.Schema.Types.ObjectId, // Tipo de dato
      ref: "User",//referencia al modelo User
      required: true, // Requerido
    },
    
  },
  {
    timestamps: true, // Añadir timestamps a la tarea (createdAt, updatedAt)
  }
);

export default mongoose.model("Task", taskSchema); // Exportando el modelo de tareas
