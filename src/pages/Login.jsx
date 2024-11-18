import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Importação correta
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();  // Usando o hook corretamente

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/auth/login', { email, password })
      .then((response) => {
        login(response.data.token);
        navigate('/'); // Navegação após login bem-sucedido
      })
      .catch((error) => {
        console.error(error);
        alert('Erro no login');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
