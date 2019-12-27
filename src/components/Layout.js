import React from "react"
import styled from "styled-components"
import {H2} from "../components/Text"

const PageHeadingWrapper = styled.div`
  background: white;
  display: flex; 
  height: 100px;
  justify-content: center;
  align-items: center;
`

export const PageHeading = ({children}) => {
  return (
    <PageHeadingWrapper>
      <H2>{children}</H2>
    </PageHeadingWrapper>
  )
}
