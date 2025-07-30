import React, { useState, useEffect } from 'react';

const InputChangeBackground = () => {
    const [login, setLogin] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const palavraChave = 'PIUprova';
        if (text === palavraChave) {
            const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#835AFD'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }

        localStorage.setItem('text', text)
    }, [text]);

    const handleChange = (event) => {
        event.preventDefault();
        console.log('Login:', login);
        console.log('Texto', text)
        setText(event.target.value);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <div>
                <label>Nome Login:</label>
                <input type="text" value={login} onChange={(estela) => setLogin(estela.target.value)}/>
            </div>
            <div>
                <h3>Neste campo, digite a palavra mágica para mudar o background! Obs.: Palavra-Chave=<b>PIUprova</b></h3> {/*PIUprova*/}
                <input type="text" value={text} placeholder="Digite aqui..." onChange={handleChange} />
            </div>
            {/* <button onClick={handleChange}>Enviar</button> */}
            <p>para aparecer no console</p>
        </div>
    );
};

export default InputChangeBackground;