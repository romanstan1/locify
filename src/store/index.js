import React, {createContext, useContext, useReducer} from "react"
import {initialState} from "./initialState"
import {combinedReducer} from "./reducers"

const defaultContext = {}

const StateContext = createContext(defaultContext)

export const StateProvider = ({children}) => {
  const reducerValue = useReducer(combinedReducer, initialState)
  return (
    <StateContext.Provider value={reducerValue}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  const [state, dispatch] = useContext(StateContext)
  return {state, dispatch}
}
