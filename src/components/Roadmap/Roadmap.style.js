import styled from 'styled-components'

export const RoadmapStyle = styled.section`
  margin-top: 24px;

  .running-text-wrapper {
    border-top: 10px solid ${({ theme }) => theme.colors.white};
    border-bottom: 10px solid ${({ theme }) => theme.colors.white};
  }

  .wrapper {
    border-bottom: 5px solid ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        &.wrapper {
          &-1 {
            padding-top: 230px;
            padding-bottom: 230px;
          }

          &-2 {
            padding-top: 124px;
          }
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      &.wrapper {
        &-1 {
          padding-top: 137px;
          padding-bottom: 137px;
        }

        &-2 {
          padding-top: 86px;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      &.wrapper {
        &-1 {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        &-2 {
          padding-top: 80px;
        }
      }
    }
  }

  .container {
    .mr-6 {
      margin-right: 24px;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;

      .img {
        max-width: 100%;

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          position: absolute;
          z-index: -1;
          opacity: 0.4;
          margin: 0;
        }

        img {
          display: block;
          width: 100%;
        }
      }

      &__text {
        max-width: 643px;
        width: 100%;
        flex-shrink: 0;
        margin: 0;

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            max-width: 100%;
        }

        .text {
          margin-top: 40px;
          display: grid;
          gap: 24px;
        }
      }
    }
  }
`
