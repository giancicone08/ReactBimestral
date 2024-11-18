import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Sistema de Controle de Estoque</h1>
      <p>Gerencie seus produtos e acompanhe o estoque de forma simples e eficaz.</p>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Registrar</Link>
      </div>
    </div>
  );
};

export default Home;
