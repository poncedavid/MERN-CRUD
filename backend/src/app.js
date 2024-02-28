import express from 'express'; // Importando express para crear el servidor
import cookieParser from 'cookie-parser'; // Importando cookie-parser para manejar las cookies
import morgan from 'morgan';  // Importando morgan para ver las peticiones en consola



import authRoutes from './routes/auth.routes.js'; // Importando las rutas de autenticación
import taskRoutes from './routes/tasks.routes.js'; // Importando las rutas de tareas

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes); // Usando las rutas de autenticación en la ruta /api
app.use("/api", taskRoutes); // Usando las rutas de tareas en la ruta /api


export default app;