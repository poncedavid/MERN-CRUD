import Layout from "../../Layout";

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext.jsx";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: SigninErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <Layout>
      <div className="bg-zinc-200 max-w-md p-10 rounded-md text-center">
        <h1 className=" font-extrabold">Iniciar sesión</h1>
        {SigninErrors.map((error, index) => (
          <div key={index} className="bg-red-500 p-2  text-white my-2">
            {error}
          </div>
        ))}
        <form
          className="justify-center items-center flex flex-col"
          onSubmit={onSubmit}
        >
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
          <button type="submit" className="p-5 my-2 rounded-3xl border-black border">Iniciar sesión</button>
        </form>
          <p className="flex gap-x-2 justify-between">
            ¿No tienes una cuenta?
            <NavLink to="/register" className="text-blue-500">
              Regístrate
            </NavLink>
          </p>
        </div>
    </Layout>
  );
}

export default LogIn;
