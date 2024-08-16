type ListaProps = {
    nomes:string[];
}

export default function listaProps({nomes}:ListaProps) {
  return (
    <ul>
        {nomes.map((nome,i)=>(
            <li key={i}>{nome}</li>
        ))}
    </ul>
  )
}

//Props com string 
// type ListaProps = {
//     nome:string;
// }

// export default function listaProps({nome}:ListaProps) {
//   return (
//     <div>{nome}</div>
//   )
// }
