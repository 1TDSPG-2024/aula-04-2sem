export default ListaProps;

type ListaProps = {
    nomes: string[];
}

function ListaProps({ nomes }: ListaProps) {
    return (
        <ul>
            {nomes.map((nome, i) => (
                <li key={i}>{nome}</li>
            ))}
        </ul>
    )
}
