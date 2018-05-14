import { DELETE_DECK, SEND_COMMENT, SET_COMMENTS_LOADING, GET_COMMENTS, ADD_DECK_VIEW, LIKE_DECK } from "./types";

export const deleteDeck = (deckToDelete) => ({
  type: DELETE_DECK,
  payload: deckToDelete
})

export const sendComment = (commentData, deckId) => ({
  type: SEND_COMMENT,
  payload: {
    commentData,
    deckId
  }
})

export const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments
})

export const setCommentsLoading = (deckId) => ({
  type: SET_COMMENTS_LOADING,
  payload: deckId
})

export const likeDeck = (deckId, whatToDo) => ({
  type: LIKE_DECK,
  payload: {
    deckId,
    whatToDo
  }
})

export const addDeckView = deckId => ({
  type: ADD_DECK_VIEW,
  payload: deckId
});
