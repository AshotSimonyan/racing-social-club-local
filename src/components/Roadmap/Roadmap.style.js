import styled from 'styled-components'

export const RoadmapStyle = styled.section`
  margin-top: 24px;

  .running-text-wrapper {
    border-top: 10px solid ${({ theme }) => theme.colors.white};
    border-bottom: 10px solid ${({ theme }) => theme.colors.white};
  }

  .wrapper {
    border-bottom: 5px solid ${({ theme }) => theme.colors.white};
  }

  .container {
    .mr-6 {
      margin-right: 24px;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        max-width: 100%;

        img {
          display: block;
          width: 100%;
        }
      }

      &__text {
        max-width: 643px;
        width: 100%;
        flex-shrink: 0;

        .text {
          margin-top: 40px;
          display: grid;
          gap: 24px;
        }
      }
    }
  }
`
