import Layout from "../../Layout"
import ApiJoker from "../../Api/ApiJoker"

function Joker() {
  return (
    <Layout>
        <h1>Chistes</h1>
        <ApiJoker />
    </Layout>
  )
}

export default Joker