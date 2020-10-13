import * as actionTypes from '../actions/actionTypes'

const initialState = {
  menu: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      console.log(action.boolean)
      return {
        ...state,
        menu: action.boolean
      }
    default:
      return state;
  }
}

export default reducer
