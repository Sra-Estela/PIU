// Usando `userState`:

// function ChangeBackground (){
    
//     function handleColor(){
//             const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
// // função floor arredonda valor. random gere numero aleatório. randomColor irá selecionar de forma aleatória uma cor.
//             const randomColor = cor[Math.floor(Math.random() * cor.length)];
//             document.body.style.backgroundColor = randomColor;

//     }

//     return(
//         <div>
//             <button onClick={handleColor}>Mude a cor</button>
//         </div>

//     )
// }

// export default ChangeBackground

// Usando `useEffect`:
import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme)) 
    }
}