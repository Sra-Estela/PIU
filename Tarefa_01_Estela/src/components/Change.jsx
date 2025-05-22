// export default function Chang(){
//     let valor=0

//     return(
//         <>
//             <div>
//                 <button onClick={() => (valor+=1)}>{valor} Cliques</button>
//             </div>
//         </>
//     )
// }

import { useState } from "react"

export default function Change(){
    // let valor=2
    let [valor, setValor] = useState(0)

    return(
        <div>
            <button onClick={() => setValor(valor+1)}>{valor} Cliques</button>
        </div>
    )
}