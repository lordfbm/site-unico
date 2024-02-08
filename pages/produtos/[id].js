/*import { useRouter } from "next/router";
function Produtos(props){
    const router = useRouter();
    const id = router.query.id;
    return <div>Id do produto: {id}</div>

} // segunda implementaçãp
export default Produtos;
export async function getServerSideProps(context){
    const id  = context.query.id;
    return{
        props: {
            id: id
        }
    }

}
 */
export async function getStaticPaths(){
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: "2"
            }
        }],
        fallback: false
    }
}
export async function getStaticProps(context){
    const id = context.params.id;
    return {
        props:{
            id: id
        }
    }

}

function Produtos(props){
    return <div>Id do produto: {props.id}</div>

}
export default Produtos;