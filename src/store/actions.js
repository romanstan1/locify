const actions = {
  CHANGE_THEME: "CHANGE_THEME",
  UPDATE_COUNTER: "UPDATE_COUNTER"
}

export default actions

export const updateTheme = (color) => {
  return (dispatch) => dispatch({
    type: actions.CHANGE_THEME,
    payload: color
  })
}

export const updateCounter = (value) => {
  return (dispatch) => dispatch({
    type: actions.UPDATE_COUNTER,
    payload: value
  })
}
