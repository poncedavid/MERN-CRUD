//immportando contexto.

//Importando Layout.
import Layout from "../../Layout";

//Importando componentes
import Card from "../../Components/Card";

const defaultUsers = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    colorPelo: "Castaño",
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    colorPelo: "Rubio",
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 40,
    colorPelo: "Negro",
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 40,
    colorPelo: "Negro",
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 40,
    colorPelo: "Negro",
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 40,
    colorPelo: "Negro",
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 40,
    colorPelo: "Negro",
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 40,
    colorPelo: "Negro",
  },
];

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
