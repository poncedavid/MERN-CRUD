//Importando paquetes para navegar.
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importando contexto de usuario.
import { AuthProvider } from "../../Context/AuthContext.jsx";

//Importando contexto de tareas.
import { TaskProvider } from "../../Context/TaskContext.jsx";

//Importando las paginas.
import Home from "../Home";
import NotFound from "../NotFound";
import LogIn from "../LogIn";
import TaskPage from "../Task";
import TaskFormPage from "../TaskForm";
import Api from "../Api";
import Register from "../Register";
import ProfilePage from "../Profile/index.jsx";

//Importando los componentes.
import NavBar from "../../Components/NavBar";

//Importando protección de rutas.
import ProtectedRoute from "../../Components/ProtectedRoute/index.jsx";

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/api" element={<Api />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/tasks/new" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
          <NavBar />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
