//PASSANDO UM LIST COMO DROPS
type ListaProps = {
    nomes: string[];
}

export default function ListaProps({nomes}: ListaProps){
    return(
        <ul>
            {nomes.map((nome,i)=>(
                <li key={i}>{nome}</li>
            ))}
        </ul>
    );
}



//PROPS OCM STRING SIMPLES

// type ListaProps = {
//     nome: string;
// }


// export default function ListaProps({nome}: ListaProps){
//     return(
//         <div>{nome}</div>
//     );
// }