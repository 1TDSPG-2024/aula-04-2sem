//RECEBENDO LISTA COM PROPS LISTA
import Lista from "../lista/lista";
import ListaProps from "../lista/listaProps";

export default function Conteudo() {

    const nomes = ["Francisco", "Juninho", "Roberto", "Ronaldinho"];

    return (
        <main>
            <h2>Conteúdo</h2>
            <Lista />
            <div>
                <p>Lista recebendo props</p>
                <ListaProps nomes={nomes} />
            </div>
        </main>
    )
}

//RECEBENDO LISTA COM PROPS SIMPLES
// import Lista from "../lista/lista";
// import ListaProps from "../lista/listaProps";

// export default function Conteudo() {

//     const nome = "Valor do nome";

//     return (
//         <main>
//             <h2>Conteúdo</h2>
//             <Lista />
//             <div>
//                 <p>Lista recebendo props</p>
//                 <ListaProps nome={nome} />
//             </div>
//         </main>
//     )
// }
