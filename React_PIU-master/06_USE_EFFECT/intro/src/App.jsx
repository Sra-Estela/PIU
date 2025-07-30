import './App.css'
import CountClicks from './componentes/CountClicks'
import EffectAPI from './componentes/EffectAPI'
import RepoJson from './componentes/RepoJson'
import EnviarDados from './componentes/EnviarDados'
import TemaColor from './componentes/TemaColor'
import InputGround from './componentes/InputGround'
import TelaLogin from './componentes/TelaLogin'


function App() {

  return (
    <>
      {/* <CountClicks/> */}
      {/* <EffectAPI /> */}
      {/* <RepoJson /> */}
      {/* <EnviarDados /> */}
      <TemaColor/>
      <InputGround/>
      <TelaLogin/>

    </>
  )
}

export default App

// Claro! Vou comentar as três questões que resolvemos até agora, explicando o funcionamento de cada parte do código para que você entenda e, se for preciso, consiga explicar na prova. Vamos lá:


// ---

// ✅ Questão 02 — Input que muda o fundo da tela

// import React, { useState, useEffect } from 'react';

// const InputChangeBackground = () => {
//   const [text, setText] = useState(''); // Estado que guarda o texto digitado

//   useEffect(() => {
//     // Quando o texto muda, gera uma cor aleatória e aplica no background
//     const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#835AFD'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
//   }, [text]); // Executa sempre que 'text' mudar

//   const handleChange = (e) => {
//     setText(e.target.value); // Atualiza o estado com o texto digitado
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Digite algo..."
//         value={text}
//         onChange={handleChange} // Dispara toda vez que o usuário digita algo
//       />
//     </div>
//   );
// };

// export default InputChangeBackground;

// 🟨 Resumo: Toda vez que o usuário digita algo no input, o texto é salvo no estado, e isso faz o useEffect executar e mudar a cor do fundo com uma cor aleatória.


// ---

// ✅ Questão 03 — Tela de login com envio para console

// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [login, setLogin] = useState('');   // Armazena o login digitado
//   const [senha, setSenha] = useState('');   // Armazena a senha digitada

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Evita que a página recarregue ao enviar o formulário
//     console.log('Login:', login);  // Exibe o login no console
//     console.log('Senha:', senha);  // Exibe a senha no console
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Login: </label>
//         <input
//           type="text"
//           value={login}
//           onChange={(e) => setLogin(e.target.value)} // Atualiza o estado 'login'
//         />
//       </div>
//       <div>
//         <label>Senha: </label>
//         <input
//           type="password"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)} // Atualiza o estado 'senha'
//         />
//       </div>
//       <button type="submit">Entrar</button> {/* Envia o formulário */}
//     </form>
//   );
// };

// export default LoginForm;

// 🟨 Resumo: O formulário usa onChange para atualizar os dados digitados e onSubmit para mostrar os dados no console sem recarregar a página.


// ---

// ✅ Questão anterior — Botão que alterna entre tema claro e escuro

// import React, { useState, useEffect } from 'react';

// const ThemeToggler = () => {
//   const [theme, setTheme] = useState('light'); // Estado do tema: claro ou escuro

//   useEffect(() => {
//     // Quando o tema muda, muda a cor do fundo e do texto da página
//     if (theme === 'light') {
//       document.body.style.backgroundColor = '#ffffff';
//       document.body.style.color = '#000000';
//     } else {
//       document.body.style.backgroundColor = '#121212';
//       document.body.style.color = '#ffffff';
//     }

//     // Salva o tema no localStorage (opcional)
//     localStorage.setItem('theme', theme);
//   }, [theme]); // Executa sempre que o 'theme' mudar

//   const toggleTheme = () => {
//     // Altera entre 'light' e 'dark'
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === 'light' ? 'dark' : 'light'} mode
//     </button>
//   );
// };

// export default ThemeToggler;

// 🟨 Resumo: Um botão que alterna o estado do tema entre claro e escuro, e o useEffect aplica essa mudança ao fundo e à cor da página.


// ---

// Se quiser, posso transformar esses comentários em resumos que você pode colar nos slides ou escrever como explicações rápidas na prova. Quer isso também? Manda agora a questão 04 que sigo contigo!