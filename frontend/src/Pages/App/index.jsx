//Importando paquetes para navegar.
import { useRoutes, BrowserRouter } from "react-router-dom";

//Importando contexto de usuario.
import { AuthProvider } from "../../Context/AuthContext.jsx";

//Importando las paginas.
import Home from "../Home";
import NotFound from "../NotFound";
import LogIn from "../LogIn";
import LogOut from "../LogOut";

import Api from "../Api";
import Register from "../Register";

//Importando los componentes.
import NavBar from "../../Components/NavBar";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/logout",
      element: <LogOut />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/api",
      element: <Api />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
