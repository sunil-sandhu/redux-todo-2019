const initialState = {
  msg: 'Our dummy reducer is working'
}

export default function dummyReducer(state = initialState, action) {
    switch (action.type) {
      case 'DUMMY_REDUCER':
        return console.log(state.msg)
      default:
        return state
    }
  }