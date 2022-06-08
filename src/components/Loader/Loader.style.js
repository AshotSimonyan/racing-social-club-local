import styled, { keyframes } from "styled-components"

export const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  visibility: visible;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.black};

  &.hide-loader {
    transition: 0.8s 0s ease-in-out;
    transform: translateY(-100%);

    .progress {
      transform: translateY(-1000px);
    }
  }

  .progress {
    font-family: ${({theme}) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 200px;
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.black};
    text-shadow: 0 0 18px ${({ theme }) => theme.colors.white};
    transition: .9s 1s  ease-in;
    width: 100%;

    p {
      text-align: right;
      padding-right: 80px;
    }
  }
}


@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
  .progress {
    font-size: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .progress {
      font-size: 160px;

      p {
        padding-right: 40px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .progress {
      font-size: 80px;
    }
  }
`
