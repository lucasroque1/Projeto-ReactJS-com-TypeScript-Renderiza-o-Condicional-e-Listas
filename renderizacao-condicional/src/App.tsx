import React, { useState } from 'react';
import './App.css';

// Definindo a interface para os itens da lista
interface Item {
  id: number;
  name: string;
  price: number;
  quantty: number;
 }

// Componente de Lista que renderiza itens com base em uma condição
 const ItemList: React.FC = () => {

  const [items] = useState<Item[]>([
    { id: 1, name: 'Apple', price:7.5, quantty:30 },
    { id: 2, name: 'Banana', price:4.9, quantty:17 },
    { id: 3, name: 'Cherry', price:6.7, quantty:23 },
    { id: 4, name: 'Cenoura', price:4.7, quantty:29 },
    { id: 5, name: 'Melancia', price:3.1, quantty:37 },

    ]);

    const [showItems, setShowItems] = useState<boolean>(true);

    return (
    <div>
      <h1>Lista de Itens</h1>
        <button onClick={() => setShowItems(!showItems)}>
          {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
        </button>
          {/* Renderização Condicional */}
            {showItems ? (
    <ul>
    {/* Renderizando a lista de itens */}
    {items.map((item) => (
    <li key={item.id}>{item.name} Preço: {item.price}, Quantidade: {item.quantty}</li>
    ))}
    </ul>
    ) : (

      <p>A lista está oculta</p>
 )}
 </div>
 );
};
function App() {
 return (
 <div className='App'>
 <ItemList />
 </div>
 );
}
export default App;