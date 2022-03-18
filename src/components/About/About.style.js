import styled, { css, keyframes } from "styled-components"

const scaleImg = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`

export const AboutStyle = styled.section`
  padding-left: 150px;

  .content-wrapper {
    display: flex;
    height: 100%;
  }

  .content-2 {
    padding: 80px 60px 100px 180px;
    width: 708px;
    position: relative;
    z-index: 9;

    .title {
      h2 {
        &.first {
          transform: translateX(-40%);
        }

        &.second {
          transform: translateX(-20%);
        }

        &.third {
          transform: translateX(0);
        }
      }
    }
  }

  .content-1 {
    .img-wrapper {
      img {
        transform: scale(1.2);
        ${({ startAnim }) =>
          startAnim &&
          css`
            animation: ${scaleImg} 1.3s 1.5s forwards;
          `}
      }
    }
  }

  .content-3 {
    .img-wrapper {
      max-width: 890px;
    }
  }

  .img-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
    will-change: transform;

    img {
      object-fit: cover;
      height: 100%;
      position: relative;
      z-index: 1;
      transition: 0.5s;
      width: 100%;
      object-position: center;
    }
  }

  .text {
    padding-top: 24px;
    width: 100%;

    p {
      padding-bottom: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .content-2 {
      padding: 60px 60px 100px 100px;

      .text {
        display: flex;
        flex-wrap: wrap;

        p {
          width: 50%;
          padding-right: 12px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .content-2 {
      width: 620px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 130px;

    .content-2 {
      width: 540px;
      padding: 60px;

      .text {
        display: block;

        p {
          width: 100%;
          padding-right: 0;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .content-2 {
      width: 540px;
      padding: 40px;
    }

    .content-3 {
      .img-wrapper {
        max-width: 670px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-left: 104px;

    .content-2 {
      width: 100vw;

      .title {
        h2 {
          &.first,
          &.second,
          &.third {
            transform: translateX(0);
          }
        }
      }
      .text {
        padding-top: 16px;

        p {
          padding-bottom: 12px;
        }
      }
    }

    .content-3 {
      .img-wrapper {
        max-width: 100vw;
      }
    }
  }

  @media (max-height: 840px) and (orientation: landscape) {
    .content-2 {
    }
  }

  @media (max-height: ${({ theme }) =>
      theme.breakpoints.xs}px) and (orientation: landscape) {
    .content-2 {
      width: auto;
      padding: 12px 40px;

      .title {
        h2 {
          &.first,
          &.second,
          &.third {
            transform: translateX(0);
          }
        }
      }

      .text {
        display: flex;
        flex-wrap: nowrap;
        padding-top: 8px;

        p {
          width: 400px;
          padding-right: 12px;
        }
      }
    }
  }
`
