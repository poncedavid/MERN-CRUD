import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth bg-white">


    
      <ul className="flex items-center gap-3 cursor-pointer">
        <NavLink to="/">
          <li className=" font-semibold text-2xl">NombreAPP</li>
        </NavLink>

        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>
              <NavLink to="/tasks">Tareas</NavLink>
            </li>
            <li>
              <NavLink to="/add-task">Nueva Tarea</NavLink>
            </li>
            <li>
              <NavLink className=" text-red-500" to="/"  onClick={()=>
                logout()
              } >Cerrar sesión</NavLink>
            </li>
          </>
          
        ) : (
          <>
            <li>
              <NavLink to="/login">Iniciar sesión</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registrarse</NavLink>
            </li>
          </>
        )}
        </ul>

      

      <ul className="flex items-center gap-3 cursor-pointer">
        <li className=" text-black/60">micorreo@correo.com</li>
        <li>
          <NavLink to="/login">Iniciar sesión</NavLink>
        </li>
        <li>
          <NavLink to="/register">Registrarse</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
