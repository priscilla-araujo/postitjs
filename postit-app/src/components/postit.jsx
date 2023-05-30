import { useContext } from 'react';
import { Draggable } from 'drag-react';
import { XCircle } from '@phosphor-icons/react';
import { PostitContext } from '../contexts/postit.context';

import styles from '../styles/postit.module.css';

export const PostIt = ({ id, color, text, x, y }) => {
  const { removePostit, updatePostit } = useContext(PostitContext);

  const removePostitHandler = () => {
    removePostit(id);
  };

  const onDragEndHandler = ({ x, y }) => {
    const updated = { id, color, x: `${x}px`, y: `${y - 75}px` };
    updatePostit(updated);
  };

  const onPostitValueHandler = ({ target }) => {
    const updated = { id, text: target.innerHTML };
    updatePostit(updated);
  };

  return (
    <Draggable style={{ position: 'absolute', left: x, top: y }} onDragEnd={onDragEndHandler}>
      <div className={styles['post-it']} style={{ '--color': `${color}` }}>
        <div className={styles['post-it__header']}>
          <XCircle size={18} weight='fill' onClick={removePostitHandler} />
        </div>
        <div
          className={styles['post-it__content']}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={onPostitValueHandler}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </Draggable>
  );
};
