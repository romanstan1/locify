import React from "react"
import ThemeChange from "../components/ThemeChange"
import CounterChange from "../components/CounterChange"
import {PageHeading} from "../components/Layout"

const AnotherPage = () => {
  return (
    <>
      <PageHeading>Another</PageHeading>
      <ThemeChange />
      <CounterChange />
    </>
  )
}


export default AnotherPage
