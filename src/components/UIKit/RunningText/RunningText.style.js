import styled, { css, keyframes } from "styled-components"

const animateRunText = keyframes`

  from {
    background-position: center 0
  }
  to {
    background-position: center 10000px
  }
`

export const RunningTextStyle = styled.div(
  ({ image, withFlag, withBorder, theme }) => css`
    background: url('${image}.svg') repeat-y left scroll;
    width: ${withFlag ? '150px' : '130px'};
    height: 100%;
    animation: ${animateRunText} 50s infinite linear;
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
