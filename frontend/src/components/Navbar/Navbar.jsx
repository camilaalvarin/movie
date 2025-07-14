import React from 'react'
import styles from './Navbar.module.css';
import { FaRegUser } from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.optionsDiv}>
        <p>Favorites</p>
        <p>My Lists</p>
        <p>< FaRegUser /></p>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default Navbar