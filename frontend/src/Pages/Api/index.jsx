import Layout from "../../Layout";

import useFetch from "../../Hooks/useFetch";

function Api() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return (
    <Layout>
        <h1>Api</h1>

        <div>
            <ul>
                {error && <li>Error {error} en la API</li>}
                {loading && <li>Cargando API...</li>}
                {data?.map((res) => (
                    <div key={res.id}>
                        <li>{res.id}</li>
                        <li>{res.title}</li>
                        <li>
                            <img src={res.url} alt={res.title} />
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    </Layout>
  );
}

export default Api;
