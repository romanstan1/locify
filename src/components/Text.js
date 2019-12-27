import styled, {css} from "styled-components"
import COLORS, {colorFinder} from "../styles/colors"

const base = 18
export const rem = (px) => `${px / base}rem`

const textBase = css`
  position: relative;
  color: ${COLORS.black};
  font-weight: normal;
  ${(props) =>
    props.color &&
    css`
      color: ${colorFinder(props.color)};
    `}
`

export const H1 = styled.h1`
  ${textBase};
  font-size: ${rem(40)};
  line-height: ${rem(45)};
  letter-spacing: ${rem(3)};
`

export const H2 = styled.h2`
  ${textBase};
  font-size: ${rem(30)};
  line-height: ${rem(34)};
`

export const H3 = styled.h3`
  ${textBase};
  font-size: ${rem(17)};
  line-height: ${rem(20)};
`

export const H4 = styled.h4`
  ${textBase};
  font-size: ${rem(12)};
  line-height: ${rem(17)};
`

export const Para = styled.p`
  ${textBase};
  font-size: ${rem(16)};
  line-height: ${rem(23)};
`
