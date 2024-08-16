/**
 * Regras para um componente funcional do React.
 * 1 - Ser uma função JavaScript.
 * 2 - Esta função deve ter como uma boa prática o mesmo nome do arquivo em questão.
 * 3 - Ter um instrução return com corpo. Ex return( ... )
 * 4 - Utilizar as directivas de exportação: export default antes do nome function.
 * 5 - Criar uma estrutura dentro do return com elementos de blocos HTML do tipo PAI Ex: DIV,HEADER, MAIN, SECTION...
 * 6 - Opcional utilizar o "import React from 'react';", somente se utilizar alguma funcionalidade do pacote 'react'.
**/

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

function App() {
  return (
    <div>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;



// Ou


// export default function App(){
//   return(
//     <div>
//       <h1>Componente App</h1>
//     </div>
//   );
// }




// Ou

// const App = () => {
//   return (
//     <div>
//       <h1>Componente App</h1>
//     </div>
//   );
// }

// export default App;