import actions from "./actions"

const mainReducer = (theme, action) => {
  switch (action.type) {
    case actions.CHANGE_THEME:
      return {
        ...theme,
        primary: action.payload
      }
    default: return theme
  }
}

const counterReducer = (counter, action) => {
  switch (action.type) {
    case actions.UPDATE_COUNTER:
      return counter + action.payload
    default: return counter
  }
}

export const combinedReducer = (state, action) => {
  // console.log("previous state:", state)
  // console.log("action:", action)

  const newState = {
    ...state,
    theme: mainReducer(state.theme, action),
    counter: counterReducer(state.counter, action)
  }

  // console.log("newState:", newState)
  // console.log(" ")
  return newState
}
