import React, { createContext, useEffect, useReducer } from 'react';
import {
  ADD_POSTIT,
  REMOVE_POSTIT,
  SET_POSTIT,
  STORAGE_KEY,
  UPDATE_POSTIT,
} from '../utils/constants';
import { reducer } from './postit.reducer';

export const PostitContext = createContext();

export const PostitProvider = ({ children }) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const [state, dispatch] = useReducer(reducer, {
    postits: [],
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: SET_POSTIT, payload: data });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.postits));
  }, [state]);

  const addPostit = (postit) => {
    dispatch({ type: ADD_POSTIT, payload: postit });
  };

  const removePostit = (id) => {
    dispatch({ type: REMOVE_POSTIT, payload: id });
  };

  const updatePostit = (postit) => {
    dispatch({ type: UPDATE_POSTIT, payload: postit });
  };

  return (
    <PostitContext.Provider value={{ state, addPostit, removePostit, updatePostit }}>
      {children}
    </PostitContext.Provider>
  );
};
