//Recebendo lista com PROPS LISTA

import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

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


//Recebendo lista com PROPS simples
// import Lista from "../Lista/Lista";
// import ListaProps from "../Lista/ListaProps";

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
