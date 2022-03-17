import styled, {css, keyframes} from "styled-components"

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
    padding-left: 180px;
    padding-top: 80px;
    width: 670px;
    position: relative;
    z-index: 9;

    .title {
      h1 {
        font-size: 100px;
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

    .text {
      // font-size: ${({theme}) => theme.fontSizes.md};
    }
  }

  .content-1 {
    .img-wrapper {

      img {
        transform: scale(1.2);
        ${({startAnim}) =>
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
    max-width: 420px;
    width: 100%;

    p {
      &:not(:last-child) {
        padding-bottom: 16px;
      }
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.xl}px) {
    .content-2 {
      padding-left: 100px;
      padding-top: 60px;

      .text {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        padding-left: 12px;
        padding-right: 12px;

        p {
          width: 50%;

          &:not(:last-of-type) {
            padding-right: 12px;
          }
        }
      }
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.lg}px) {
    .content-2 {
      width: 620px;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}px) {
    padding-left: 130px;

    .content-2 {
      width: 580px;
      padding-left: 80px;
      padding-top: 40px;
    }
  }
  @media (max-width: ${({theme}) => theme.breakpoints.sm}px) {
    .content-2 {
        .title {
          h1 {
            font-size: 40px;
          }
        }
      .text {
        p {
          
        }
          
      }
    }
    
    .content-3 {
      .img-wrapper {
        max-width: 670px;
      }
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.xs}px) {
    padding-left: 104px;

    .content-2 {
      padding-left: 40px;
      padding-top: 40px;
    }

    .content-3 {
      .img-wrapper {
        max-width: 400px;
      }
    }
  }

  @media (max-height: 840px) and (orientation : landscape) {
    .content-2 {
      .title {
        h1 {
          font-size: 72px;
        }
      }
    }
  }

  @media (max-height: ${({theme}) => theme.breakpoints.xs}px) {
    padding-left: 104px;

    .content-2 {
      display: flex;
      width: 840px;
      padding-top: 40px;

      .title {
        h1 {
          font-size: 40px;
        }
      }

      .text {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        padding-left: 12px;

        p {
          width: 50%;

          &:not(:last-of-type) {
            padding-right: 12px;
          }
        }
      }
    }
  }
`
