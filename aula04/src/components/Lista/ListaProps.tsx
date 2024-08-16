//passado um lista como props
type ListaProps = {
    nomes: string[];
}

export default function ListaProps({ nomes }: ListaProps) {
    return (
        <ul>
            {nomes.map((nome, i) => (
                <li key={i}>{nome}</li>
            ))}
        </ul>
    )
}


//props com string simples
// type ListaProps = {
//     nome:string
// }

// export default function ListaProps({nome}:ListaProps){
//     return (
//         <div>{nome}</div>
//     )
// }
