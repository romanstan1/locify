import React from "react"
import styled from "styled-components"
import {connect} from "../utils"
import {updateTheme} from "../store/actions"

const Wrapper = styled.div``

const Color = styled.div`
  display: flex;
  height: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const Button = styled.div`
  width: 300px;
  padding: 20px;
  cursor: pointer;
  color: white;
  background: slategrey;
  &:hover {
    opacity: 0.8;
  }
`

const ThemeChange = (props) => {
  const handleClick = (color) => {
    props.updateTheme(color)
  }

  return (
    <Wrapper>
      <Button
        color="red"
        onClick={() => handleClick("red")}>Red</Button>
      <Button
        color="green"
        onClick={() => handleClick("green")}>Green</Button>
      <Button
        color="green"
        onClick={() => handleClick("blue")}>Blue</Button>
      <Color>
        {props.theme.primary}
      </Color>
    </Wrapper>
  )
}

const mapDispatch = {
  updateTheme
}

const mapProps = (state) => ({
  theme: state.theme
})

export default connect(mapProps, mapDispatch)(ThemeChange)
