import { UPDATE_MESSAGE } from '../actionTypes';

export const updateMessage = (e) => ({
  type: UPDATE_MESSAGE,
  payload: e.target.value
})


const messagesActions = {
  updateMessage
}

export default messagesActions;