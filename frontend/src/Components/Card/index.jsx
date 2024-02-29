//Importamos useState para poder usar el estado en nuestro componente
import { useState } from 'react';


// Crearemos componente con propiedades para mostrar en pantalla

const Card = (props) => {

    // Creamos un estado para la edad
    const [edad, setEdad] = useState(props.edad);
    const sumarEdad = () => {
        setEdad(edad + 1);
    }

    //Creamos un estado para el estado civil
    const [estadoCivil, setEstadoCivil] = useState(props.estadoCivil);
    const cambiarEstadoCivil = () => {
        setEstadoCivil(!estadoCivil);
    }

    return (
        <div className="flex flex-col items-center justify-around m-5 border-slate-950 rounded border-2  w-56 h-60 p-2">

            <h1 className=" text-3xl ">{props.nombre}, {props.apellido} </h1>
            <h2>age: {edad}</h2> {/* Aquí se cambió props.edad a edad */}
            <p> hair color:{props.colorPelo}</p>
            <p>estado civil: {estadoCivil ? "Soltero" : "Casado"} </p>
            <button onClick={sumarEdad} className="bg-slate-950 text-white rounded p-1 w-full">BirthdayButton</button>
            <button onClick={cambiarEstadoCivil} className="bg-slate-950 text-white rounded p-1 w-full">ChangeCivilStatus</button>
        </div>
    )
}

export default Card;