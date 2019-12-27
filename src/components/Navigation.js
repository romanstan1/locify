import React from "react"
import styled from "styled-components"
import NavLink from "./Navlink"
import {H3} from "./Text"

const Wrapper = styled.div`
  background: grey;
  display: flex; 
  height: 50px;
`

const Logo = styled.div`
  background: ghostwhite;
  width: 300px;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>Logo</Logo>
      <NavLink to="/"><H3>Home</H3></NavLink>
      <NavLink to="/another"><H3>Another</H3></NavLink>
    </Wrapper>
  )
}

export default Navigation
