
import React, { useEffect, useState } from 'react';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]); // Guarda os dados da API
  const [filtro, setFiltro] = useState(''); // Guarda o texto digitado no filtro

  // useEffect para buscar os dados uma vez, quando o componente é montado
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => resposta.json()) // converte para JSON
      .then((dados) => setUsuarios(dados)) // atualiza o estado com os dados
      .catch((erro) => console.error('Erro ao buscar usuários:', erro));
  }, []);

  // Aplica filtro por nome (pode mudar esse critério se quiser)
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Usuários</h2>

      <input
        type="text"
        placeholder="Filtrar por nome..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)} // Atualiza filtro
      />

      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> — {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
// 🟨 Resumo: O useEffect busca os dados da API uma vez, e o filtro atualiza a lista de usuários conforme o usuário digita no campo de texto.