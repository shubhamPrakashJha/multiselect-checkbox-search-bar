import React from 'react';
import styles from '../dropdown.module.css';
import { Options } from './Options';

export const FilterSelector = ({ selected, list, handleSelectAll, filteredList, handleFilterToggle }) => (
  <div className={styles.checkbox}>
    <Options
      checked={selected.length === list.length}
      onChange={handleSelectAll} />
    <div className={styles.scrollable}>
      {filteredList.map((item) => (
        <Options
          checked={selected.indexOf(item) !== -1}
          onChange={() => handleFilterToggle(item)}
        >
          <span className={styles.checkboxLabel}>{item}</span>
        </Options>
      ))}
    </div>
  </div>
);
