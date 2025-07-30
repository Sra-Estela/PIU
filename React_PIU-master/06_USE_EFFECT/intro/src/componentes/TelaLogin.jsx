import React, { useState } from 'react';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // impede que a página recarregue
    console.log('Login:', login);
    console.log('Senha:', senha);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Login: </label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <label>Senha: </label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
