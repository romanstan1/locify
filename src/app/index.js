import React from "react"
import Routes from "./Routes"
import {StateProvider} from "../store"
import Navigation from "../components/Navigation"
import GlobalStyle from "../styles/global"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StateProvider>
        <Navigation />
        <Routes />
      </StateProvider>
    </>
  )
}

export default App
