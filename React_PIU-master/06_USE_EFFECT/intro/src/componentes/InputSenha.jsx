import React, { useState, useEffect } from 'react';

const InputChangeBackground = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const palavraChave = 'mudar'; // você pode trocar por qualquer outra
        if (text.toLowerCase() === palavraChave) {
            const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#835AFD'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }
    }, [text]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h3>Digite a palavra mágica para mudar o fundo!</h3>
            <input type="text" placeholder="Digite aqui..." onChange={handleChange} />
        </div>
    );
};

export default InputChangeBackground;
