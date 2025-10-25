export default function Forca(props){


    return <>
        {props.palavra.split("").map((letra)=>(
            <button>
                {props.letrasAdivinhadas.includes(letra) ? letra : "-"}
            </button>
        ))}
    </>
}
