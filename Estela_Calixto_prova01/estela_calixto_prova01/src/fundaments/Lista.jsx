// Este componente irá exemplificar a função do parametro key (ver console dos exemplos anteriores) e da função filyter

import { carros } from "./lista";

export default function Lista () {

    return(
        <div style={{border: '2px solid grey', padding: '20px'}}>
            <h2>Renderização de Carros</h2>
            <p>Parametro key e função filter</p>
            <ul>
                {/* map irá passar por todos os elementos de dadoslista e retornar um novo array chamado item onde cada elemento de item será um li */}
                {carros.map((carro, item) => (
                    <li>
                        {item} {/* map irá passar por todos os elementos de dadoslista e retornar um novo array chamado item onde cada elemento de item será um li */}
                        Modelo: {carro.modelo}, Ano: {carro.ano}
                    </li>
                ))}
            </ul>

            <h2>Carros vermelhos:</h2>
            <ul>
                {carros.filter(carro => carro.cor === 'vermelha').map((carro, indice) => (
                    <li>
                        {indice} {/* map irá passar por todos os elementos de dadoslista e retornar um novo array chamado indice onde cada elemento de item será um li */}
                        Modelo: {carro.modelo}
                    </li>
                ))}
            </ul>
        </div>
    )
}
