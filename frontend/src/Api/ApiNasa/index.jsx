import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../nasa";

function NasaApiComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiKey = API_KEY;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

return (
    <div className="flex flex-col items-center p-10">
        <h1 className="text-4xl font-bold mb-8">
        Imagen astronómica del día
        </h1>

        <div className=" rounded shadow-xl w-3/5 p-10">
            <img className="w-full" src={data.url} alt={data.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.explanation}</p>
            </div>
        </div>
    </div>
);
}

export default NasaApiComponent;
