import { useState } from 'react'

// Lista de tarefas com marcação de status e reorganização

export default function Todolist() {
  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState('')

  // Função para adicionar nova tarefa
  const adicionarTarefa = (e) => {
    e.preventDefault()

    if (!input.trim()) return // impede que tarefas vazias sejam adicionadas

    // Criando objeto da tarefa com status inicial "pendente"
    const novaTarefa = {
      texto: input,
      status: 'pendente'
    }

    setTarefas([...tarefas, novaTarefa])
    setInput('')
  }

  // Atualiza o status da tarefa com base no índice e novo valor
  const mudarStatus = (index, novoStatus) => {
    const listaAtualizada = [...tarefas]
    listaAtualizada[index].status = novoStatus
    setTarefas(listaAtualizada)
  }

  // Reorganiza a posição da tarefa (subir ou descer)
  const moverTarefa = (index, direcao) => {
    const novaLista = [...tarefas]
    const novaPosicao = index + direcao

    // impede que passe dos limites da lista
    if (novaPosicao < 0 || novaPosicao >= tarefas.length) return

    // troca a posição da tarefa
    const [tarefaRemovida] = novaLista.splice(index, 1)
    novaLista.splice(novaPosicao, 0, tarefaRemovida)

    setTarefas(novaLista)
  }

  return (
    <div>
      <h1>10todolist_v2</h1>
      <h2>Lista de Tarefas React</h2>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Exibição das tarefas */}
      <div style={{ marginTop: '20px' }}>
        {tarefas.map((tarefa, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                tarefa.status === 'realizada'
                  ? '#d4ffd4'
                  : tarefa.status === 'pendente'
                  ? '#fff4cc'
                  : '#ffd6d6',
              padding: '10px',
              margin: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          >
            <strong>{tarefa.texto}</strong> <br />
            <span>Status: {tarefa.status}</span> <br />

            {/* Botões de status */}
            <button onClick={() => mudarStatus(index, 'realizada')}>✔️ Realizada</button>
            <button onClick={() => mudarStatus(index, 'pendente')}>🕓 Pendente</button>
            <button onClick={() => mudarStatus(index, 'nao realizada')}>❌ Não Realizada</button>

            {/* Botões de reorganização */}
            <button onClick={() => moverTarefa(index, -1)}>⬆️ Subir</button>
            <button onClick={() => moverTarefa(index, 1)}>⬇️ Descer</button>
          </div>
        ))}
      </div>
    </div>
  )
}
