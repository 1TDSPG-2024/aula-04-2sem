import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

export default function Conteudo(){
    const nomes = ["Francisco", "Juninho", "Roberto", "Ronaldinho"];
    return(
        <main>
            <h2>Conteúdo</h2>
            <Lista/>
            <div>
                <h2>Lista recebendo props</h2>
                <ListaProps nomes={nomes} />
            </div>
        </main>
    )
}

// import Lista from "../Lista/Lista";
// import ListaProps from "../Lista/ListaProps";

// export default function Conteudo(){
//     const nome = "Valor do nome";
//     return(
//         <main>
//             <h2>Conteúdo</h2>
//             <Lista/>
//             <div>
//                 <p>Lista recebendo props</p>
//                 <ListaProps nome={nome} />
//             </div>
//         </main>
//     )
// }