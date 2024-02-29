import Layout from "../../Layout";

import { useForm } from "react-hook-form"; // Importamos el hook de react-hook-form

import { useAuth } from "../../Context/AuthContext"; // Importamos el contexto de usuario
import { useNavigate } from "react-router-dom";
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

  return (
    <Layout>
      <h1>Registro de usuario</h1>

      {/* Creamos un formulario con el hook de react-hook-form */}
      <div className="bg-zinc-200 max-w-md p-10 rounded-md">
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
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
