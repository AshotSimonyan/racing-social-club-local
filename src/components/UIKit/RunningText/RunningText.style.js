import styled, { css, keyframes } from "styled-components"

const animateRunText = keyframes`

  from {
    background-position-y: 0
  }
  to {
    background-position-y: 10000px
  }
`

export const RunningTextStyle = styled.div(
  ({ image, withFlag, withBorder, theme }) => css`
    background: url('${image}.png') repeat-y left;
    background-position-x: center;
    width: ${withFlag ? "150px" : "130px"};
    height: 100vh;
    animation: ${animateRunText} 50s infinite linear;
   will-change: transform;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: ${theme.colors.black};

    ${withFlag && css`

      .flag {
        width: 38px;
        position: absolute;
        top: 0;
        right: -34px;
        bottom: 0;
      }
    `}

    ${withBorder && css`
      border-right: 10px solid ${theme.colors.white};
    `}
  `
)
