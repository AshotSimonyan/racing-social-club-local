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
  //justify-content: flex-end;
  visibility: visible;
  opacity: 1;
  transition: 1s ease-in-out;
  background-color: ${({ theme }) => theme.colors.black};

  &.hide-loader {
    //opacity: 0;
    //visibility: hidden;
    transform: translateX(-100%);

    .progress {
      transform: translateX(-1000px);
    }
  }

  .progress {
    color: ${({ theme }) => theme.colors.white};
    font-size: 200px;
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.black};
    text-shadow: 0 0 18px ${({ theme }) => theme.colors.white};
    transition: .9s ease-in;
    width: 100%;

    p {
      text-align: right;
      padding-right: 80px;
    }
  }
}


@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
  .progress {
    font-size: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .progress {
      font-size: 160px;

      p {
        padding-right: 40px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    .progress {
      font-size: 80px;
    }
  }
`
