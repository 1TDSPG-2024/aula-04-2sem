export default function Lista() {
    
    const nomes = ["Huguinho", "Zezinho", "Luzinho"];


    return(
        <ul>
            {nomes.map((nome,i)=>(
                <li key = {i}>{nome}</li>
            ))}
        </ul>
    );
}