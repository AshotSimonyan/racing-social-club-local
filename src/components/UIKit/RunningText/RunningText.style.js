import styled, { css, keyframes } from "styled-components"

const animateRunText = keyframes`

  from {
    background-position-y: 0
  }
  to {
    background-position-y: 10000px
  }
`

export const RunningTextStyle = styled.div`
  background: url("${({ image }) => image}.png") repeat-y center;
  background-position-x: center;
  width: ${({ withFlag }) => (withFlag ? "150px" : "130px")};
  height: 100vh;
  animation: ${animateRunText} 50s infinite linear;
  will-change: transform;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    background: url("${({ image }) => image}-lg.png") repeat-y center;
    width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    background: url("${({ image }) => image}-md.png") repeat-y center;
    width: 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    background: url("${({ image }) => image}-xs.png") repeat-y center;
    width: 70px;
  }

  ${({ withFlag }) =>
    withFlag &&
    css`
      .flag {
        width: 38px;
        position: absolute;
        top: 0;
        right: -34px;
        bottom: 0;
      }
    `}

  ${({ withBorder }) =>
    withBorder &&
    css`
      border-right: 10px solid ${({ theme }) => theme.colors.white};
    `}
`
