import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

export const createNewToDoItem = (todo) => ({
  type: ADD_ITEM,
  payload: todo
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

const appActions = {
  createNewToDoItem,
  deleteItem
};

export default appActions;
