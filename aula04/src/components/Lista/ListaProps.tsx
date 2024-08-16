export default ListaProps;

type ListaProps = {
    nome: string;
}

function ListaProps({ nome }: ListaProps) {
    return (
        <div>{nome}</div>
    )
}
