import styled, { css } from "styled-components"

export const ButtonStyle = styled.a`
  padding: 0 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: inline-flex;
  align-items: center;

  .icon {
    margin-right: 12px;
    path {
      transition: 0.5s;
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      height: 60px;
      font-size: ${({theme}) => theme.fontSizes.md};
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.white};

      &:hover {
        //background-color: transparent;
        color: ${({ theme }) => theme.colors.black};

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.black} !important;
          }
        }
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    
    css`
      height: 40px;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.black} !important;
          }
        }
      }
    `}



  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`
