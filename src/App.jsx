import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './component/Container';
import Input from './component/Input';
import ListGroup from './component/ListGroup';
import ErrorMessage from './component/ErrorMessage';

function App() {
  const [fruitItems, setFruitItems] = useState(["mango", "banana", "orange"]);
  const [boughtItem, setBoughtItem] = useState(null); // 👈 NEW STATE

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newFruit = e.target.value.trim();
      if (newFruit && !fruitItems.includes(newFruit.toLowerCase())) {
        setFruitItems([...fruitItems, newFruit]);
        e.target.value = "";
      }
    }
  };

  const handleDelete = (itemToDelete) => {
    setFruitItems(fruitItems.filter(item => item !== itemToDelete));
  };

  const handleBuy = (item) => {
    setBoughtItem(item);
  };

  return (
    <Container>
      <h1>FruitCard</h1>
      <Input handleOnKeyDown={handleKeyDown} />
      <ErrorMessage items={fruitItems} />
      <ListGroup items={fruitItems} handleDelete={handleDelete} handleBuy={handleBuy} />

      {/* 👇 Show Bought Item */}
      {boughtItem && (
        <div className="alert alert-success mt-4">
          You bought: <strong>{boughtItem}</strong>
        </div>
      )}
    </Container>
  );
}

export default App;
