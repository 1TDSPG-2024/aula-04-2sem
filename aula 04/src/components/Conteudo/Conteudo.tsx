import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

export default function Conteudo() {

    const nomes = ["Francisco", "Juninho", "Roberto", "Ronaldinho"];

    return (
        <main>
            <h2>Conteúdo</h2>
            <Lista />
            <div>
                <p>Lista recebendo Props</p>
                <ListaProps nomes={nomes} />
            </div>
        </main>
    )
}