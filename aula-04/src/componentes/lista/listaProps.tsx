//PASSANDO UMA LISTA COMO PROPS
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

//PROPS COM STRING SIMPLES

// type ListaProps = {
//     nome: string;
// }

// export default function ListaProps({ nome }: ListaProps) {
//     return (
//         <div>{nome}</div>
//     )
// }
