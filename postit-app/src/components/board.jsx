import { useContext } from 'react';
import { PostitContext } from '../contexts/postit.context';
import { PostIt } from './postit';

export const Board = () => {
  const { state } = useContext(PostitContext);
  return (
    <div className='board'>
      {state.postits.map((postit, index) => (
        <PostIt key={index} {...postit} index={index} />
      ))}
    </div>
  );
};
