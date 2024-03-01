//immportando contexto.

//Importando Layout.
import Layout from "../../Layout";

//Importando componentes
import Card from "../../Components/Card";

//Importando usuarios por defecto.
import defaultUsers from "../../Context/Usuarios.jsx";



function Home() {
  return (
    <Layout>
      <h1>Home</h1>

      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {defaultUsers.map((user) => (
          <Card
            key={user.nombre}
            apellido={user.apellido}
            nombre={user.nombre}
            edad={user.edad}
            colorPelo={user.colorPelo}
          />
        ))}
      </section>
    </Layout>
  );
}

export default Home;
