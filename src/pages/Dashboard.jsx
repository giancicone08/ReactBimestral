import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Buscar os produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Usando o token salvo no localStorage
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        if (error.response && error.response.status === 401) {
          navigate('/login');  // Se não estiver autenticado, redireciona para o login
        }
      }
    };

    fetchProducts();
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1>Dashboard de Estoque</h1>
      <div className="product-list">
        <h2>Lista de Produtos</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Quantidade</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
