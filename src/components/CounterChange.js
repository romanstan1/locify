import React from "react"
import styled from "styled-components"
import {connect} from "../utils"
import {updateCounter} from "../store/actions"

const Wrapper = styled.div``

const NumberDisplay = styled.div`
  display: flex;
  height: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const Button = styled.div`
  width: 100px;
  padding: 20px;
  cursor: pointer;
  color: white;
  background: slategrey;
  &:hover {
    opacity: 0.8;
  }
`

const Counter = (props) => {
  const handleClick = (value) => {
    props.updateCounter(value)
  }
  return (
    <Wrapper>
      <Button
        color="green"
        onClick={() => handleClick(1)}>+</Button>
      <Button
        color="green"
        onClick={() => handleClick(-1)}>-</Button>
      <NumberDisplay>
        {props.counter}
      </NumberDisplay>
    </Wrapper>
  )
}

const mapDispatch = {
  updateCounter
}

const mapProps = (state) => ({
  counter: state.counter
})

export default connect(mapProps, mapDispatch)(Counter)
