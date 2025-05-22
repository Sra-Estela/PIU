import "./Escopo.css"

function MyButton() {
    return (
        <button>
            I'm a button!
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
    );
}

// import "./Escopo.css"

// function Escopo () {
//     const label = "Clique Aqui!"

//     function handleClick() {
//         alert("Alerta")
//     }
//     return (
//         <>  
//             <div>
//                 <h1>Hello, World!!!</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Perferendis sed nesciunt quia illo quasi iusto aspernatur itaque enim hic quam consectetur 
//                     quae maiores eaque deleniti nemo, necessitatibus dignissimos officia voluptatem?
//                 </p>
//             </div> 
//             <div>
//                 <button onClick={(handleClick)=>console.log("Você clicou aqui!")}>{label}</button>
//             </div>
//         </>    
//     )
// }

// export default Escopo