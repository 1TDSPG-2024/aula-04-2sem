import Cabecalho from "./components/Cabecalho/Cabecalho.tsx";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape.tsx";

//rfc
export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  )
}

// export default function App(){
//   return(
//     <div>
//       <h1>Componente App</h1>
//     </div>
//   );
// }

// export default App; des de que tire "export default da funçao"

// const App = () => {
//   return(
//     <div>
//       <h1>Componente App</h1>
//     </div>
//   )
// }

// export default App; 