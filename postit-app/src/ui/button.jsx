import React from 'react';
import styles from '../styles/button.module.css';

export const Button = ({ color, children, onClick, hasIcon }) => {
  return (
    <div
      className={`${styles.button} ${hasIcon ? styles.icon : ''}`}
      style={{ '--color': `${color || ''}` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
