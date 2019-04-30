import { INCREMENT, DECREMENT, ADD_FIVE } from "../actionTypes";

const initialState = {
  number: 0
}

export default function mathsReducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        state = {
          ...state, 
          number: state.number + action.payload 
        }
        return state;
      case DECREMENT:
        state = {
          ...state, 
          number: state.number - action.payload 
        }
        return state;
      case ADD_FIVE:
        state = {
          ...state, 
          number: state.number + action.payload 
        }
        return state;
      default:
        return state
    }
  }