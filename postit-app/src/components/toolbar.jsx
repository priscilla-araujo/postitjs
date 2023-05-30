import React, { useContext } from 'react';
import { Button } from '../ui';
import { COLORS } from '../utils/constants';
import { PostitContext } from '../contexts/postit.context';

import styles from '../styles/toolbar.module.css';

export const Toolbar = () => {
  const { state, addPostit } = useContext(PostitContext);

  const addPostitHandler = (color) => {
    const index = state.postits.length;
    const position = index === 0 ? '10px' : `${index * 30}px`;
    const postit = {
      id: +new Date(),
      color: color,
      x: '10px',
      y: position,
      text: '',
    };
    addPostit(postit);
  };
  return (
    <header className={styles.toolbar}>
      <nav>
        <div className={styles.logo}>
          <span>Post Its</span>
        </div>
        <div className={styles.actions}>
          {COLORS.map((color, index) => (
            <Button key={index} color={color} onClick={() => addPostitHandler(color)} />
          ))}
        </div>
      </nav>
    </header>
  );
};
