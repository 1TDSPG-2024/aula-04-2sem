type ListaProps = {
    nome: string;
}

function ListaProps({nome}:ListaProps) {
    
    return(
        <div>{nome}</div>
    );
  }
  
  export default ListaProps;