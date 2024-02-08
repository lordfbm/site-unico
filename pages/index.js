import Link from "next/link";
function Home(){
    return (
    <div>
        <h1>Home </h1><br></br>
        <Link href="/sobre">
        <a>
        Acessar página sobre
        </a>
        </Link>
        
    </div>
    )
}
export default Home