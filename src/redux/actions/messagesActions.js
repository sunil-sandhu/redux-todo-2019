import { UPDATE_MESSAGE, FETCH_MESSAGE } from '../actionTypes';

// Asynchronous calls utilise thunk as middleware to pause the dispatch
// until the async action has been completed. Then unpauses dispatch
export const fetchMessage = () => {
  return (dispatch, getState) => {
    // make async call to database
    fetch('https://sunilsandhu-47c54.firebaseio.com/media.json')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: Object.values(json)
      })

    })
  }
}


export const updateMessage = (e) => ({
  type: UPDATE_MESSAGE,
  payload: e.target.value
})



const messagesActions = {
  fetchMessage,
  updateMessage
}

export default messagesActions;