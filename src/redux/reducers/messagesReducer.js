import { UPDATE_MESSAGE } from '../actionTypes'

const initialState = {
  message: 'Our messages reducer is working'
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_MESSAGE:
        state = {
          ...state, 
          message: action.payload
        }
      return state
      default:
        return state
    }
  }