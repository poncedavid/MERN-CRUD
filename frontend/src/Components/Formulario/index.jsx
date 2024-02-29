import { useState } from "react";

const Formulario = (props) => {
    const [userName, setUserName] = useState(props.nombre);
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);

    const crearUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = { userName, email, password };
        console.log(nuevoUsuario);
    }


    return(
        <form onSubmit={ crearUsuario } className="border bg-slate-400 p-0.5 flex flex-col items-center justify-between">

            <h1 className="text-2xl p-5">Formulario</h1>

            <div className="p-5 m-2 flex items-center justify-center">
                <label className="text-lg ">Nombre:</label>
                <input className="border ml-2" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>


            <div className="p-5 m-2 flex items-center justify-center">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="p-5 m-2 flex items-center justify-center">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="m-5 p-5 bg-white borded rounded ">Crear Usuario</button>

            </form>
    )
}; 

export default Formulario;