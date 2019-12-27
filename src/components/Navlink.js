import React from "react"
import styled from "styled-components"
import {navigate} from "hookrouter"

const Wrapper = styled.div`
  background: paleturquoise;
  display: inline-block;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  &:hover {
    opacity: 0.8;
  }
`

const NavLink = ({to, children}) => {
  const handleClick = () => {
    navigate(to)
  }

  return (
    <Wrapper onClick={handleClick}>
      {children}
    </Wrapper>
  )
}


export default NavLink
