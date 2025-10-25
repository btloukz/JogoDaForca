import Forca from './Forca'
import Teclado from './Teclado'
import {useState} from 'react'

export default function JogoDaForca(props){
    let [letrasAdivinhadas, setLetrasAdivinhadas] = useState([])
    let [tentativasErradas, setTentativasErradas] = useState(0)
    let [mensagem, setMensagem] = useState("")

    const palavra = props.palavra.toUpperCase();

    function clicarLetra(letra){
        if(mensagem!=="") return;

        let novasLetras = [...letrasAdivinhadas, letra]
        setLetrasAdivinhadas(novasLetras)

        if(palavra.includes(letra)){

            let ganhou = palavra.split("").filter((letra)=>novasLetras.includes(letra))

            if(ganhou.length === palavra.length)
                setMensagem("Você ganhou!")
            } else {
                let tentativas = tentativasErradas + 1
                setTentativasErradas(tentativas)

                if(tentativas==3){
                setMensagem("Perdeu!!")
            }
            }
    }

    return<>
        <Forca palavra={palavra} letrasAdivinhadas={letrasAdivinhadas}></Forca>
        <br/>
        <Teclado onLetraClick={clicarLetra} letrasAdivinhadas={letrasAdivinhadas}></Teclado>
        <br/>
        <h4>Tentativas erradas: {tentativasErradas}</h4>
        <br/>
        <h4>{mensagem}</h4>
    </>
}
