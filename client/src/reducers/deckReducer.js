import { GET_COMMENTS, SET_COMMENTS_LOADING } from '../actions/types';

const initialState= {
  comments: [],
  commentsLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS_LOADING:
      return {
        ...state,
        commentsLoading: true
      }
    case GET_COMMENTS:
      return {
        ...state,
        commentsLoading: false,
        comments: action.payload
      }
    default:
      return state;
  }
}
