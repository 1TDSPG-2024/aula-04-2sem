// PASSANDO UMA LISTA COMO PROPS

type ListaProps = {
    nomes: string[];
}

function ListaProps({nomes}:ListaProps) {
    
    return(
        <ul>
            {nomes.map((nome, i)=> (
                <li key={i}>{nome}</li>
            ))}
        </ul>
    );
  }
  
  export default ListaProps;



// PROPS COM STRING SIMPLES

// type ListaProps = {
//     nome: string;
// }

// function ListaProps({nome}:ListaProps) {
    
//     return(
//         <div>{nome}</div>
//     );
//   }
  
//   export default ListaProps;