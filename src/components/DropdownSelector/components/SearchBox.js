import React from 'react';
import styles from '../dropdown.module.css';

export const SearchBox = ({ searchTerm, handleSearch }) => (
  <input
    className={styles.select}
    type="search"
    name="search"
    id="searchBox"
    placeholder="Search"
    autoComplete="off"
    value={searchTerm}
    onChange={(e) => handleSearch(e)}
  />
);
