import styled, { css } from "styled-components"

export const ButtonStyle = styled.a`
  padding: 0 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 60px;

  .icon {
    path {
      transition: 0.5s;
    }
  }

  &:hover {
    background-image: none;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};

    .icon {
      path {
        fill: ${({ theme }) => theme.colors.black} !important;
      }
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      font-size: ${({theme}) => theme.fontSizes.md};
      background-image: ${({ theme }) => theme.colors.primaryGradient};
      color: ${({ theme }) => theme.colors.black};
      border: none;
      transition: none;

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.black} !important;
        }
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&

    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.white};
    `}

  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`
