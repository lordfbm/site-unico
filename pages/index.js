import Link from "next/link";
function Home(){
    return (
        
    <div>
        <h1>Home </h1>
       /* <Link href="/sobre">
           Acessar página sobre 
        </Link>
        
    </div>

    )
}
export default Home


/*

import { useState } from "react";

function Cont(){
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
export default Cont
*/