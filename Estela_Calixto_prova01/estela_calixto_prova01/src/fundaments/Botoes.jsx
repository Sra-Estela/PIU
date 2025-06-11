import { useState } from "react"



export default function Change(){
    let [valor_incrementar, setValorI] = useState("Incrementar") //Nome
    let [valor_incrementar2, setValorI2] = useState(1) //Define um contador
    
    function sets(){
        setValorI(valor_incrementar+valor_incrementar2) //Concatena 
        setValorI2(valor_incrementar2+1) // É tipo ir aumentando o valar gradualmente (Ex: n = n + 1)
        
    }

    let [valor_decrementar, setValorD] = useState("Decrementar") //NBome
    let [valor_decrementar2, setValorD2] = useState(1) //Define um contador
    
    function subtract(){
        setValorD(valor_decrementar+valor_decrementar2) //Concatena 
        setValorD2(valor_decrementar2-1) // É tipo ir aumentando o valar gradualmente (Ex: n = n + 1)
        
    }
    
    return(
        <div>
            <button onClick={sets} style={{backgroundColor: valor_incrementar2 > 10 ? 'green' : 'gray', margin: '10px'}}>{valor_incrementar} Clique</button>
            <p>{valor_incrementar2}</p>
            <br/><br/>
            <button onClick={subtract} style={{backgroundColor: valor_decrementar2 < 0 ? 'red' : 'gray', margin: '-10px'}}>{valor_decrementar} Clique</button>
            <p>{valor_decrementar2}</p>
        </div>
    )
}