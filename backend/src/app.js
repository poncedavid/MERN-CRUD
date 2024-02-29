import express from 'express'; // Importando express para crear el servidor
import cookieParser from 'cookie-parser'; // Importando cookie-parser para manejar las cookies
import morgan from 'morgan';  // Importando morgan para ver las peticiones en consola


import authRoutes from './routes/auth.routes.js'; // Importando las rutas de autenticación para el servidor
import taskRoutes from './routes/tasks.routes.js'; // Importando las rutas de tareas 
const app = express();

app.use(morgan('dev')); // Usando morgan en modo desarrollo para ver las peticiones en consola
app.use(express.json()); // Vamos a usar json para enviar y recibir datos en el servidor
app.use(cookieParser()); // Usando cookie-parser para manejar las cookies

app.use("/api", authRoutes); // Usando las rutas de autenticación en la ruta /api
app.use("/api", taskRoutes); // Usando las rutas de tareas en la ruta /api


export default app;