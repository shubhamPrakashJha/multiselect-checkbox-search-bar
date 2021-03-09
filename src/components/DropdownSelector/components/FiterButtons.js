import React from 'react';
import styles from '../dropdown.module.css';

export const FiterButtons = ({ handleClear }) => (
  <div className={styles.buttonsWrapper}>
    <button className={styles.button} onClick={handleClear}>
      Clear
    </button>
    <button type="submit" className={styles.activeButton}>
      Submit
    </button>
  </div>
);
