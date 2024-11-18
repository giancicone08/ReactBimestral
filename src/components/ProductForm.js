import React, { useState } from 'react';
import api from '../services/api';

const ProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sku, setSku] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const product = {
        name,
        description,
        price,
        quantity,
        sku,
      };
      
      const response = await api.post('/products', product);
      onProductAdded(response.data); // Chama a função para atualizar a lista de produtos
      clearForm();
    } catch (error) {
      console.error(error);
      alert('Erro ao adicionar produto');
    }
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setSku('');
  };

  return (
    <div>
      <h3>Cadastrar Produto</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default ProductForm;
