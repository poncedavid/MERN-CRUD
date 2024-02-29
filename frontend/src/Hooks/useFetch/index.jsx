//Importanto hooks de react.
import { useState, useEffect } from 'react';

function useFetch(urlApi) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setLoading(true)
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, []);

  return { data, loading, error };
}

export default useFetch;