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
  &.sm {
    height: 40px;
    width: 40px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  &.lg {
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      img {
        width: 100px;
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      img {
        width: 90px;
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      img {
        width: 80px;
      }
    }
    @media (max-height: 480px) {
      display: none;
    }
  }

  img {
    animation: ${rotate} 3s linear infinite;
  }
`
