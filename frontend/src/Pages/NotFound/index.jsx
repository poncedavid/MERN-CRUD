//Importando layout.
import Layout from "../../Layout";

//Importando imagen.
import logoNotFound from "../../Assets/Images/404.webp"

function NotFound() {
  return (
    <Layout>
        <div className="flex flex-col items-center">

        <h1 className="text-9xl	">404 - Not Found</h1>
        <img className="w-60" src={logoNotFound} alt="404 Not Found" />        

        </div>

    </Layout>
  );
}

export default NotFound;
