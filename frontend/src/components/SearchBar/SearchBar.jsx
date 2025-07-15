import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input);
    }
  };

  const handleDelete = (e) => {
    setInput('');
    onSearch('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar una película..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Buscar</button>
      <button type="button" className={styles.button} onClick={handleDelete}>delete</button>
    </form>
  );
};

export default SearchBar;