import { INCREMENT, DECREMENT, ADD_FIVE } from "../actionTypes";

export const increment = () => ({
  type: INCREMENT,
  payload: 1
});

export const decrement = () => ({
  type: DECREMENT,
  payload: 1
});


export const addFive = () => ({
  type: ADD_FIVE,
  payload: 5
});



const mathsActions = {
  increment,
  decrement,
  addFive
}
export default mathsActions
