import { DELETE_DECK } from "./types";

export const deleteDeck = (deckToDelete) => ({
  type: DELETE_DECK,
  payload: deckToDelete
})