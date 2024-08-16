export default function Lista() {
  const nomes = ["Huguinho", "Zezinho", "Luizinho"];
  // Métodos de array aqui em cima

  return (
    // Somente o map fica aqui
        <ul>
            {nomes.map((nome, i) => (
                <li key={i}>{nome}</li>
            ))}
        </ul>
    )
}
