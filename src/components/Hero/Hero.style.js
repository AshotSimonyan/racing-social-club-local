import styled, { keyframes } from 'styled-components'

export const HeroStyle = styled.section`
  width: 100%;

  .running-text-wrapper {
    border-top: 6px solid ${({ theme }) => theme.colors.white};
    border-bottom: 6px solid ${({ theme }) => theme.colors.white};
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;


    .banner {
      &-desktop, &-mobile {
        max-width: 100%;
        width: 100%;
        height: auto;
      }

      &-desktop {
        display: block
      }

      &-mobile {
        display: none
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        &-desktop {
          display: none;
        }

        &-mobile {
          display: block;
        }
      }
    }
  }

  a {
    position: absolute;
    bottom: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      bottom: 104px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      bottom: 62px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      bottom: 75px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      bottom: 50px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      bottom: 25px;
    }
  }
`
