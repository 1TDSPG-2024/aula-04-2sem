import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

export default function Conteudo() {

    const nome = "Valor de nome";

    return (
        <main>
            <h2>Conteúdo</h2>
            <Lista />
            <div>
                <p>Listra recebendo props</p>
                <ListaProps nome={nome} />
            </div>
        </main>
    );
}

//recebendo lista com PROSPS