export default function Lista() {

    const nomes = ["Huguinho", "Zezinho", "Luizinho"];
    return (
        <ul>
            {nomes.map((nome, i) => (
                <li key={i}>{nome}</li>
            ))}
        </ul>
    )
}

