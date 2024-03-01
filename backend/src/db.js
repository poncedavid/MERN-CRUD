import mongoose from "mongoose"; // Importamos mongoose para conectarnos a la base de datos

export const connectDB = async () => { 
  // Exportamos la función connectDB que se encargará de conectarnos a la base de datos
  try { // Utilizamos try-catch para manejar los errores
    await mongoose.connect("mongodb://localhost/dojo_crud"); // Conectamos a la base de datos
    console.log("MongoDB conectado correctamente"); // Si se conecta correctamente, imprimimos en consola
  } catch (error) { // Si hay un error, lo manejamos
    console.error("Error: ", error); // Imprimimos el error en consola
  }
};
