import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

export default function Conteudo() {
  
    const nomes = ["jorje","jose","juau","skungs"];
  
    return (
        <main>
            <h2>Conteudo</h2>
            <Lista/>
            <div>
                <p>Lista recebendo props</p>
                <ListaProps nomes={nomes}/>
            </div>
        </main>
    );
}

// import Lista from "../Lista/Lista";
// import ListaProps from "../Lista/ListaProps";

// export default function Conteudo() {
  
//     const nome = "Valor do nome";
  
//     return (
//         <main>
//             <h2>Conteudo</h2>
//             <Lista/>
//             <div>
//                 <p>Lista recebendo props</p>
//                 <ListaProps nome={nome}/>
//             </div>
//         </main>
//     );
// }

