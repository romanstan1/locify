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

const LOGGER = true

export const combinedReducer = (state, action) => {
  if (LOGGER) {
    console.log(`%c ${action.type} `, "background: #222; color: #bada55")
    console.log("%c PREVIOUS STATE ", "background: #A90B0B; color: #fff", state)
  }

  const newState = {
    ...state,
    theme: mainReducer(state.theme, action),
    counter: counterReducer(state.counter, action)
  }

  if (LOGGER) {
    console.log("%c NEW STATE ", "background: #006CA2; color: #fff", newState)
    console.log(" ")
    console.log(" ")
  }
  return newState
}
