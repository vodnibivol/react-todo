import { useState } from 'react';

const Input = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    addItem(inputValue);
    setInputValue('');
    document.querySelector('input[type="text"]').select();
  };

  const handleInputChange = (content) => {
    setInputValue(content);
  };

  return (
    <form onSubmit={handleAddItem}>
      <input
        type="text"
        value={inputValue}
        placeholder="Add new task"
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
};

export default Input;
