import mongoose from "mongoose"; // Importamos mongoose para conectarnos a la base de datos

export const connectDB = async () => { 
  // Exportamos la función connectDB que se encargará de conectarnos a la base de datos
  try {
    await mongoose.connect("mongodb://localhost/ejemplo");
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error: ", error);
  }
};
