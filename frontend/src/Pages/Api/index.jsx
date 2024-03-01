import Layout from "../../Layout";

import useFetch from "../../Hooks/useFetch";

import JokerApiComponent from "../../Api/ApiJoker";
import ApiNasa from "../../Api/ApiNasa";

function Api() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return (
    <Layout>

    <div className="flex flex-col items-center justify-between p-5 m-5 text-center">



        <h1>Api Nasa</h1>

        <ApiNasa />

        <h1>Api de https://jsonplaceholder.typicode.com/</h1>

        <ul>
          {error && <li>Error {error} en la API</li>}
          {loading && <li>Cargando API...</li>}
          {data?.slice(0, 3).map(
            (
              res // Slice para limitar la cantidad de resultados.
            ) => (
              <div key={res.id}>
                <li>{res.id}</li>
                <li>{res.title}</li>
                <li>
                  <img src={res.url} alt={res.title} />
                </li>
              </div>
            )
          )}
        </ul>

        <h1> Api Joker </h1>

        <JokerApiComponent />
        </div>

    </Layout>
  );
}

export default Api;
