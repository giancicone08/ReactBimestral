import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        alert('Erro ao carregar produtos');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter(product => product._id !== id)); // Remove o produto da lista
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir produto');
    }
  };

  return (
    <div>
      <h3>Lista de Produtos</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - {product.quantity} em estoque
            <button onClick={() => handleDelete(product._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
