export default Lista;

function Lista() {

    const nomes = ["huguinho", "Zezinho", "Luizinho"];

    return (

        <ul>
            {nomes.map((nome, i) => (
                <li key={i}> {nome}</li>
            ))}
        </ul>
        // <ul>
        //     <li>{nome}</li>
        //     <li>{nomes[0]}</li>
        //     <li>{nomes[1]}</li>
        //     <li>{nomes[2]}</li>
        // </ul>
    )
}
