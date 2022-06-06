import styled, { css, keyframes } from 'styled-components'

const scaleImg = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`

export const AboutStyle = styled.section`
  border-top: 5px solid ${({ theme }) => theme.colors.white};

  .content__text {
    margin-top: 32px;
    display: grid;
    gap: 16px;
  }

  .banner {
    width: 100%;
    height: fit-content;
    max-height: 400px;
    border-top: 5px solid ${({ theme }) => theme.colors.white};

    img {
      width: 100%;
      object-fit: cover;
      object-position: left;
      display: block;
      max-height: 400px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      height: 369px;

      img {height: 369px}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 236px;

      img {height: 236px}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      height: 213px;

      img {height: 213px}
    }
  }
`
