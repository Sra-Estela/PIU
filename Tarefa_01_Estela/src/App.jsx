// VERSÃO 3 (PÁGINA DO SIMULADO):
import React from 'react';
import CharacterSelection from './components/CharacterSelection';

function App() {
  return (
    <div>
      <CharacterSelection />
    </div>
  );
}

export default App;


// VERSÃO 2
// import './App.css'
// import MyButton from "./componentes/Escopo"
// import Redux from "./componentes/Redux" 

// function App() {
//   return (
//     <>
//       <MyButton/>
//       <Redux/>
//     </>
//   )
// }

// export default App


// VERSÃO 1
//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }