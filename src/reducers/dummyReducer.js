export default function dummyReducer(state = [], action) {
    switch (action.type) {
      case 'DUMMY_REDUCER':
        return console.log('we are cooking on gas!')
      default:
        return state
    }
  }