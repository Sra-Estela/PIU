import "./Escopo.css"

function Escopo () {
    const label = "Clique Aqui!"
    function handleClick() {
        return (
            alert("Alerta")
        )
    }
    return (
        <>  
            <div>
                <h1>Hello, World!!!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis sed nesciunt quia illo quasi iusto aspernatur itaque enim hic quam consectetur 
                    quae maiores eaque deleniti nemo, necessitatibus dignissimos officia voluptatem?
                </p>
            </div> 
            <div>
                <button onClick={(handleClick)=>console.log("Você clicou aqui!")}>{label}</button>
            </div>
        </>    
    )
}

export default Escopo