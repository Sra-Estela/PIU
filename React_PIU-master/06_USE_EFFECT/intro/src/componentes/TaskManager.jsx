// src/components/TaskManager.jsx
import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, nome: 'Estudar React', concluida: false },
    { id: 2, nome: 'Ler livro', concluida: false }
  ]);

  const toggleConcluida = (id) => {
    setTasks((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const enviarTarefasParaAPI = async (tarefas) => {
    try {
      const resposta = await fetch('http://127.0.0.1:8000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarefas)
      });

      if (resposta.ok) {
        console.log('Tarefas enviadas com sucesso!');
      } else {
        console.error('Erro ao enviar tarefas');
      }
    } catch (erro) {
      console.error('Erro ao conectar com a API:', erro);
    }
  };

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ul>
        {tasks.map((tarefa) => (
          <li
            key={tarefa.id}
            style={{
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              color: tarefa.concluida ? 'gray' : 'black'
            }}
          >
            {tarefa.nome}
            <button onClick={() => toggleConcluida(tarefa.id)}>
              {tarefa.concluida ? 'Desfazer' : 'Concluir'}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => enviarTarefasParaAPI(tasks)}>
        Cadastrar tarefas na API
      </button>
    </div>
  );
};

export default TaskManager;