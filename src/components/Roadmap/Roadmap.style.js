import styled from 'styled-components'

export const RoadmapStyle = styled.section`
  margin-top: 24px;

  .running-text-wrapper {
    border-top: 10px solid ${({ theme }) => theme.colors.white};
    border-bottom: 10px solid ${({ theme }) => theme.colors.white};
  }

  .wrapper {
    padding-inline: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.wrapper-2, &.wrapper-3, &.wrapper-4 {
      border-top: 5px solid ${({ theme }) => theme.colors.white};
    }

    &.wrapper-1 {
      .img {
        margin-right: 106px;
      }
    }

    &.wrapper-2 {
      .img {
        margin-left: 44px;
      }
    }

    &.wrapper-3 {
      .img {
        margin-right: 24px;
      }
    }
  }

  .roadmap-step {
    display: flex;
    align-items: center;
    padding-block: 120px;

    .content {
      max-width: 644px;

      .text {
        margin-top: 40px;
        display: grid;
        gap: 24px;
      }
    }
  }
`
