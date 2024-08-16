import Lista from "../Lista/Lista";
import ListaProps from "../Lista/listaProps";

export default function conteudo() {

  const nomes = ["Samir", "Juninho", "Roberto"]

  return (
    <main>
      <h2>Conteudo</h2>
      <Lista/>
      <div>
        <p>Lista recebendo props</p>
        <ListaProps nomes={nomes}/>


      </div>
    </main>
  )
}
