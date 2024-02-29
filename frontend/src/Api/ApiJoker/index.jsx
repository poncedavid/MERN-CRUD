import React, { useState, useEffect } from "react";
import axios from "axios";


function JokerApiComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiUrl = `https://official-joke-api.appspot.com/random_joke`;

    axios.get(apiUrl).then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

return (

<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{data.setup}</div>
    <p className="text-gray-700 text-base">
        {data.punchline}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.type}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.id}</span>
  </div>
</div>

);
}

export default JokerApiComponent;
