# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Claro! Vamos entender juntos o que a tarefa está pedindo em partes. A proposta é criar uma aplicação React simples, mas completa, chamada To-Do List (Lista de Tarefas). A ideia é treinar conceitos importantes que podem cair na prova. Aqui vai o detalhamento de cada item:


---

✅ 1. Implementem um sistema To-Do List

Você precisa criar uma aplicação onde o usuário verá uma lista de tarefas e poderá marcar cada uma como feita ou não feita.


---

🗂️ 2. Definam as tarefas em um array, definido em um arquivo à parte

Você deve criar um arquivo separado, por exemplo tarefas.js, com algo assim:

// tarefas.js
const tarefas = [
  { id: 1, titulo: "Estudar React", concluida: false },
  { id: 2, titulo: "Fazer exercícios", concluida: false },
  // ...
];

export default tarefas;

Esse array será importado no componente principal para ser usado como base da lista.


---

🧩 3. Crie um componente que irá apresentar uma tarefa

Você precisa criar um componente, por exemplo Tarefa.jsx, que receba uma tarefa via props e mostre:

O título da tarefa

Um botão para marcar como concluída/não concluída


Exemplo básico:

function Tarefa({ tarefa, aoMarcar }) {
  return (
    <div>
      <span>{tarefa.titulo}</span>
      <button onClick={() => aoMarcar(tarefa.id)}>Marcar</button>
    </div>
  );
}


---

🎨 4. Trabalhe estilos diferentes dependendo do estado da tarefa

Exemplo: se a tarefa estiver concluída, mostre o texto com riscado e um fundo verde claro. Se não estiver, mostre o texto normal.

Você pode usar className ou style para isso:

<span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
  {tarefa.titulo}
</span>


---

🧾 5. Crie um dashboard que irá apresentar todas as tarefas

Crie um componente Dashboard.jsx que:

Importe o array de tarefas

Mapeie cada item para um componente Tarefa

Use children se quiser fazer o Dashboard mais genérico


import tarefas from "./tarefas";
import Tarefa from "./Tarefa";

function Dashboard() {
  const [lista, setLista] = useState(tarefas);

  const marcarComoConcluida = (id) => {
    const novasTarefas = lista.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    setLista(novasTarefas);
  };

  return (
    <div>
      {lista.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} aoMarcar={marcarComoConcluida} />
      ))}
    </div>
  );
}


---

🌙☀️ 6. Implementar a função dark/light mode

Você precisa adicionar uma forma de alternar entre modo escuro e modo claro, com um botão. Pode usar useState para alternar classes CSS.

Exemplo:

const [darkMode, setDarkMode] = useState(false);
const toggleMode = () => setDarkMode(!darkMode);

<div className={darkMode ? "dark" : "light"}>
  <button onClick={toggleMode}>Trocar tema</button>
  {/* o resto da aplicação */}
</div>

No CSS:

.dark {
  background-color: #121212;
  color: white;
}
.light {
  background-color: white;
  color: black;
}


---

🧠 Dica: criar o maior número possível de componentes reutilizáveis

Por exemplo:

Componente Botao genérico

Componente Titulo

Componente Container

Separar Header, Footer, etc.


Isso mostra que você sabe componentizar bem e reutilizar seu código.


---

Se quiser, posso te ajudar a montar o esqueleto inicial do projeto ou gerar os arquivos! Deseja isso?

Claro! Com base na avaliação prática de React que você enviou, vou escrever os dois componentes solicitados:


---

✅ COMPONENTE 01 – Contador de Clicks Bidirecional

Crie um arquivo chamado Contador.jsx com o seguinte conteúdo:

// Contador.jsx
import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button
        onClick={incrementar}
        style={{
          backgroundColor: contador > 10 ? 'green' : 'lightgray',
          marginRight: '10px'
        }}
      >
        Incrementar
      </button>
      <button
        onClick={decrementar}
        style={{
          backgroundColor: contador < 0 ? 'red' : 'lightgray'
        }}
      >
        Decrementar
      </button>
    </div>
  );
};

export default Contador;


---

✅ COMPONENTE 02 – Edição de Listas

Crie um arquivo ListaCarros.jsx, assumindo que você tenha o arquivo dados_carro.js com algo assim:

// dados_carro.js
export const carros = [
  { modelo: "Fiesta", ano: 2014, cor: "vermelha" },
  { modelo: "Civic", ano: 2020, cor: "preta" },
  { modelo: "Corolla", ano: 2018, cor: "vermelha" },
  { modelo: "Gol", ano: 2012, cor: "branca" },
];

Agora o componente:

// ListaCarros.jsx
import React from 'react';
import { carros } from './dados_carro';

const ListaCarros = () => {
  return (
    <div>
      <h2>Todos os carros:</h2>
      <ul>
        {carros.map((carro, index) => (
          <li key={index}>
            Modelo: {carro.modelo}, Ano: {carro.ano}
          </li>
        ))}
      </ul>

      <h2>Carros vermelhos:</h2>
      <ul>
        {carros
          .filter(carro => carro.cor.toLowerCase() === 'vermelha')
          .map((carro, index) => (
            <li key={index}>
              Modelo: {carro.modelo}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarros;


---

Se quiser, posso te ajudar a configurar o projeto React completo com esses dois componentes e o arquivo de dados. Deseja isso também?

