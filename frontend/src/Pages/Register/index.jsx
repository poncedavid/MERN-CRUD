import Layout from "../../Layout";

import { useForm } from "react-hook-form"; // Importamos el hook de react-hook-form

import { useAuth } from "../../Context/AuthContext"; // Importamos el contexto de usuario
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Inicializamos el hook de react-hook-form
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth(); // Importamos la función signup del contexto de usuario
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    // Llamamos a la función signup del contexto de usuario
    await signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }

  }, [isAuthenticated])

  return (
    <Layout>

      {/* Creamos un formulario con el hook de react-hook-form */}
      <div className="bg-zinc-200 max-w-md p-10 rounded-md text-center">
      <h1 className=" font-extrabold">Registro de usuario</h1>

        {RegisterErrors.map((error, index) => (
          <div key={index}  className="bg-red-500 p-2  text-white" >{error}
          </div>
        ))}
        <form
          className="justify-center items-center flex flex-col"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            {...register("username", { required: true })}
            className="w full bg-zinc-100  px-4 py-5 rounded-dm m-5"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <span className=" text-red-500">El username es requerido</span>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w full bg-zinc-100  px-4 py-5 rounded-dm m-5"
            placeholder="Correo electrónico"
          />

          {errors.email && (
            <span className=" text-red-500">El email es requerido</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w full bg-zinc-100  px-4 py-5 rounded-dm m-5"
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className=" text-red-500">La password es requerida</span>
          )}
          <button type="submit" className="p-5 my-2 rounded-3xl border-black border">Registrarse</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿Ya tienes una cuenta? <NavLink to="/login" className="text-blue-500">Inicia sesión</NavLink>
        </p>
      </div>
    </Layout>
  );
}

export default Register;
