import { useState } from "react";

function Home(){
    return (
    <div>
        <h1>Home 4</h1><br></br>
        <Contador/>
    </div>
    )
}
function Contador(){
    const [contador, setContador] = useState(1);
    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        <div>{contador}<br></br><br></br>
        <button onClick={adicionarContador}>Adcionar</button>
        </div>
    )
}
export default Home