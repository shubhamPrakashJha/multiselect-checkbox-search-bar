import React from 'react';
import styles from '../dropdown.module.css';

export const SelectDropdown = ({ setOpenFilter, name, selected }) => (
  <div className="selectBox" onClick={() => setOpenFilter(true)}>
    <select className={styles.select}>
      <option>
        {name} {selected.length > 0 && `- ${selected.join(', ').slice(0, 30)}...`}
      </option>
    </select>
  </div>
);
