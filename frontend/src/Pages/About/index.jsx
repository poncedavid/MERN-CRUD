//importando layout.
import Layout from "../../Layout";

//importando componente.
import Wrapper from "../../Components/Wrapper";

function About() {
  return (
    <Layout>
      <Wrapper
        items={[
          "something",
          "sombrero",
          "wholesome",
          "ransom",
          "apple",
          "react",
          "javascript",
        ]}
      />
    </Layout>
  );
}

export default About;
