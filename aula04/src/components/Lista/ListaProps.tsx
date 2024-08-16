type ListaProps = {
    nome:string;
}

export default function ListaProps({nome}:ListaProps) {
    
    return (
      <div>{nome}</div>
    )
  }