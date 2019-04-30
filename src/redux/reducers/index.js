import { combineReducers } from 'redux'
import dummyReducer from './dummyReducer'
import mathsReducer from './mathsReducer'

export default combineReducers({
    dummyReducer,
    mathsReducer
})