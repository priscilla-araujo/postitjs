import { ADD_POSTIT, REMOVE_POSTIT, SET_POSTIT, UPDATE_POSTIT } from '../utils/constants';

export function reducer(state, action) {
  switch (action.type) {
    case SET_POSTIT:
      return {
        ...state,
        postits: action.payload,
      };
    case ADD_POSTIT:
      return {
        ...state,
        postits: [...state.postits, action.payload],
      };
    case REMOVE_POSTIT:
      return {
        ...state,
        postits: state.postits.filter((postit) => postit.id !== action.payload),
      };
    case UPDATE_POSTIT:
      return {
        ...state,
        postits: state.postits.map((postit) => {
          if (postit.id === action.payload.id) {
            return { ...postit, ...action.payload };
          }
          return postit;
        }),
      };
    default:
      return state;
  }
}
