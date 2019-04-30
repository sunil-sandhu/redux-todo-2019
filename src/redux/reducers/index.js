import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import mathsReducer from './mathsReducer'

export default combineReducers({
    messagesReducer,
    mathsReducer
})