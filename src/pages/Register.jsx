import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importação correta
import api from '../services/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook do react-router-dom v6 para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();  // Previne o comportamento padrão do form

    try {
      console.log('Enviando dados:', { email, password });
      const response = await api.post('/auth/register', { email, password });
      console.log('Resposta:', response.data);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Erro na requisição:', error.response || error.message);
      alert('Erro no registro');
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>  {/* Envio do formulário */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Atualiza o estado do email
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Atualiza o estado da senha
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
