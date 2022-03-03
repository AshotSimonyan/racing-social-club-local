import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`
export const SpinnerStyle = styled.div`
  img {
    animation: ${rotate} 3s linear infinite;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    img {
      width: 100px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    img {
      width: 90px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    img {
      width: 80px;
    }
  }
  @media (max-height: 480px) {
    display: none;
  }
`
