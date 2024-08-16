export default function Conteudo() {
    return (
<main>
    <h2>Conteudo</h2>
    <Lista/>
    <div>
        <p>Lista recebendo props</p>
        <ListaProps nome={nome} />
    </div>
    </main>
    )
}