export default function Teclado(props){
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    return <>
        {alfabeto.map((letra)=>(
            <button onClick={()=>props.onLetraClick(letra)} 
            disabled={props.letrasAdivinhadas.includes(letra)}>
            {letra}
            </button>
        ))}
    </>
}
