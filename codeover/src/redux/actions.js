export const addUser = (uname, password) => ({
  type: 'ADD_USER',
  uname,
  password
})

export const ActionType = {
  ADD_USER: 'ADD_USER'
}
