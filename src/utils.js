import React from "react"
import {useStateContext} from "./store"

export const connect = (props, actions) => (Component) => (rest) => {
  const {state, dispatch} = useStateContext()

  const mappedState = props(state)

  const newActions = {}

  Object.entries(actions)
    .forEach(([key, fc]) => {
      newActions[key] = (fcProps) => fc(fcProps)(dispatch)
    })

  return <Component {...newActions} {...mappedState} {...rest} />
}
