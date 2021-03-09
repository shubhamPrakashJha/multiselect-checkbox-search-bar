import React from 'react';
import { Checkbox } from './Checkbox';
import styles from '../dropdown.module.css';

export const Options = ({ children, ...props }) => (
  <label className={styles.option}>
    <Checkbox {...props} />
    <span></span>
    <span className={props.checked ? styles.checkboxActiveLabel : styles.checkboxLabel}>{children || ' '}</span>
  </label>
);
