export default function Lista() {
    
    const nomes = ["Huguinho", "Zezinho", "Luizinho"];
    return (
        // <ul>
        //     <li>{nome}</li>
        //     <li>{nomes[0]}</li>
        //     <li>{nomes[1]}</li>
        //     <li>{nomes[2]}</li>
        // </ul>

        <ul>
            {nomes.map((nome, i)=>(
                <li key={i}>{nome}</li>
            ))}
        </ul>
    );
}