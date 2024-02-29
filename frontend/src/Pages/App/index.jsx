//Importando paquetes para navegar.
import { useRoutes, BrowserRouter } from "react-router-dom";


//Importando las paginas.
import Home from "../Home"
import NotFound from "../NotFound"
import Service from "../Service"
import About from "../About";
import LogIn from "../LogIn";
import LogOut from "../LogOut";
import Nasa from "../Nasa";
import Joker from "../Joker";
import Api from "../Api";

//Importando los componentes.
import NavBar from "../../Components/NavBar"
import Register from "../Register";





const AppRoutes = ()=>{

  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/service",
      element: <Service />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <LogIn />
    },
    {
      path: "/logout",
      element: <LogOut />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path:"/nasa",
      element: <Nasa />
    },
    {
      path:"/joker",
      element: <Joker />
    },
    {
      path: "/api",
      element: <Api />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return routes
}




const App = () =>{

  return (
    <BrowserRouter>
    <AppRoutes />
    <NavBar />
    </BrowserRouter>
  )
}

export default App
