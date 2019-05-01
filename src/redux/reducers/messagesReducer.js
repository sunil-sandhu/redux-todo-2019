import { UPDATE_MESSAGE, FETCH_MESSAGE } from '../actionTypes'

const initialState = {
  message: 'Our messages reducer is working',
  list: null
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_MESSAGE:
        state = {
          ...state, 
          message: action.payload
        }
      return state;
      case FETCH_MESSAGE:
        state = {
          ...state, 
          list: action.payload
        }
      return state;
      default:
        return state
    }
  }