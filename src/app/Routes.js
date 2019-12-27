import React from "react"
import {useRoutes} from "hookrouter"

import NotherPage from "../pages/Another"
import HomePage from "../pages/Home"
import NotFoundPage from "../pages/404"

const routes = {
  "/another": NotherPage,
  "/": HomePage
}

const Routes = () => {
  const routeResult = useRoutes(routes)
  return (
    <>
      { routeResult || <NotFoundPage /> }
    </>
  )
}

export default Routes
