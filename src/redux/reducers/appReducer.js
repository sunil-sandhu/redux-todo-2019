import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const initialState = {
  list: [{ id: 1, text: "clean the house" }, { id: 2, text: "buy milk" }]
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state = {
        list: [...state.list, action.payload]
      };
      return state;
    case DELETE_ITEM:
      state = {
        list: state.list.filter((todo) => todo.id !== action.payload)
      };
      return state;
    default:
      return state;
  }
}
