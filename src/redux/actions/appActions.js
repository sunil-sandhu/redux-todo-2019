import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const redux_add = (todo) => ({
  type: ADD_ITEM,
  payload: todo
});

const redux_delete = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

const appActions = {
  redux_add,
  redux_delete
};

export default appActions;
