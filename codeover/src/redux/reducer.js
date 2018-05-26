import { ActionType } from "./actions.js"

const initialState = {
  uname: "",
  password: ""
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        uname: action.uname,
        password: action.password
      })
    default:
      return state;
  }
}

export default user;
