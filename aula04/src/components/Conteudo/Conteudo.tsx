// Recebendo lista com PROPS lista

import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

function Conteudo() {
    
    const nomes = ["Francisco", "Juninho", "Roberto", "Ronaldinho"];

    return(
        <main>
            <h2>Conteúdo</h2>
            <Lista/>
            <div>
                <p>Lista recebendo props</p>
                <ListaProps nomes={nomes}/>
            </div>
        </main>
    );
  }
  
  export default Conteudo;


  
// Recebendo lista com props simples

//   import Lista from "../Lista/Lista";
//   import ListaProps from "../Lista/ListaProps";
  
//   function Conteudo() {
      
//       const nome = "Valor do nome";
  
//       return(
//           <main>
//               <h2>Conteúdo</h2>
//               <Lista/>
//               <div>
//                   <p>Lista recebendo props</p>
//                   <ListaProps nome={nome}/>
//               </div>
//           </main>
//       );
//     }
    
//     export default Conteudo;