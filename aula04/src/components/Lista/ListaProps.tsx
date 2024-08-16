type ListaProps = {
    nome: string
}


export default function ListaProps({nome}: ListaProps) {
    return (
        <ul>
            {nomes.map((nome, i) => (
                <li key={i}>{nome}</li>
            ))}
        </ul>
    )
}