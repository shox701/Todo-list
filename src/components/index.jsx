import React, { useState } from 'react';
import Trash from "../assets/trash.png"

function Apps() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className="app">
    <div className="input-container">
      <h2>Todo App</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add your new todo"
      />
      <button className='add-btn' onClick={handleAddItem}>+</button>
    </div>
    <div className="items-container">
      {items.map((item, index) => (
        <div key={index} className="item">
          <span>{item}</span>
          <button className='del-btn' onClick={() => handleDeleteItem(index)}><img src={Trash} /></button>
        </div>
      ))}
    </div>
    <button className='btn-clear' onClick={handleClearAll}>Clear All</button>
  </div>
  );
}

export default Apps;
