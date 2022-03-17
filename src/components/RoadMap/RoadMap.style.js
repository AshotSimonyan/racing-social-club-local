import styled, { css } from "styled-components"

export const RoadMapStyle = styled.section(
  ({ roadMapImage, theme }) => css`
    padding-left: 130px;
    display: flex;
    will-change: transform;

    .content-wrapper {
      display: flex;
      height: 100%;
      padding-right: 10px;
      border-right: 20px solid ${theme.colors.white};
    }

    .content {
      width: 1280px;
      background: no-repeat center;
      height: 100%;
      border-right: 10px solid ${theme.colors.white};
      display: flex;
      justify-content: space-between;
      padding: 80px 80px 120px;
      flex-direction: column;

      .text {
        margin-left: auto;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      max-width: 440px;
      width: 100%;

      > div:not(:first-child) p,
      > p:not(:first-child) {
        padding-top: 16px;
      }
    }

    .content1 {
      background-image: url("${roadMapImage}1.svg");
      background-size: auto 75%;
    }

    .content2 {
      background-image: url("${roadMapImage}2.svg");
      background-size: auto 75%;
    }

    .content3 {
      background-image: url("${roadMapImage}3.svg");
      background-size: 50% auto;
    }

    .content4 {
      background-image: url("${roadMapImage}4.svg");
      background-size: 50% auto;
    }

    .carousel-block {
      border-left: 10px solid ${theme.colors.white};
      border-right: 10px solid ${theme.colors.white};
      height: 100%;
      margin-left: 10px;
      display: flex;
      width: 1100px;

      .left {
        min-width: 400px;
        padding-top: 100px;
        padding-left: 40px;
        padding-right: 40px;

        .title {
          padding-bottom: 20px;
        }

        .text {
          font-size: ${({ theme }) => theme.titleSizes.h5};
        }
      }

      .right {
        width: calc(100% - 400px);
      }
    }

    .text-block {
      width: 500px;
      height: 100%;
      padding: 80px 40px 120px;
      border-right: 10px solid ${({ theme }) => theme.colors.white};
      margin-right: 6px;

      .text {
        padding-top: 20px;
        font-size: ${({ theme }) => theme.titleSizes.h4};
      }
    }

    .carousel-2-block {
      padding: 80px;
      border-left: 10px solid ${theme.colors.white};
      height: 100%;
      margin-left: 6px;
      display: flex;
      width: 1280px;

      .left {
        min-width: 480px;
        display: flex;
        flex-direction: column;

        .spinner {
          text-align: center;
        }

        .title {
          padding-bottom: 40px;
        }

        .text {
          font-weight: 400;
          font-size: ${({ theme }) => theme.titleSizes.h4};
          padding-bottom: 24px;
        }
      }

      .right {
        width: calc(100% - 480px);
      }
    }

    .text-block-2 {
      display: flex;
      border-left: 10px solid ${theme.colors.white};

      .left {
        padding: 80px 40px 120px;
        border-right: 1px solid ${theme.colors.white};
        width: 500px;

        .text {
          font-size: ${({ theme }) => theme.titleSizes.h4};
          padding-top: 40px;
        }
      }
      .right {
        width: 420px;
        padding-top: 24px;

        .Collapsible {
          border-bottom: 1px solid ${({ theme }) => theme.colors.white};
        }

        .Collapsible__trigger {
          display: block;
          border-radius: 16px 16px 0 0;

          &.is-open {
            .icon {
              transform: rotate(180deg);
            }
          }
        }

        .Collapsible__contentInner {
          padding: 0 24px 16px;
          overflow: auto;
          max-height: 600px;
          margin-right: 16px;
          margin-bottom: 16px;

          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            border-radius: 20px;
            background-color: ${({ theme }) => theme.colors.greyLight};
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: ${({ theme }) => theme.colors.white};
          }
        }

        .trigger-inner {
          position: relative;
          font-weight: 700;
          padding: 24px 50px;
          cursor: pointer;
        }

        .title {
          padding: 16px 0;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.lg}px) {
      padding-left: 120px;

      .content {
        width: 992px;
      }

      .content3,
      .content4 {
        background-size: 75% auto;
      }

      .carousel-block {
        width: 1000px;

        .left {
          padding-top: 60px;
        }
      }

      .text-block {
        padding-top: 60px;
      }

      .carousel-2-block {
        padding: 60px 60px 80px;
      }

      .text-block-2 {
        .right {
          .Collapsible__contentInner {
            max-height: 400px;
          }
        }
        .left {
          padding-top: 60px;
          .text {
            padding-top: 24px;
            font-size: ${({ theme }) => theme.titleSizesXS.h4};
          }
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}px) {
      padding-left: 96px;

      .content {
        width: 768px;
        padding: 60px 60px 100px;
      }

      .content1,
      .content2 {
        background-size: auto 50%;
      }

      .text-block {
        padding: 40px 40px 100px;
      }

      .carousel-2-block {
        padding: 40px 40px 80px;
        width: 1180px;
      }
    }

    @media (max-width: ${theme.breakpoints.sm}px) {
      .content {
        width: 576px;
        padding: 40px 40px 100px;
      }

      .carousel-block {
        width: 850px;

        .left {
          padding-top: 40px;

          .text {
            font-size: ${({ theme }) => theme.titleSizesXS.h5};
          }
        }
      }

      .text-block {
        width: 576px;
        padding: 40px 40px 70px;

        .text {
          font-size: ${({ theme }) => theme.titleSizesXS.h4};
        }
      }

      .text-block-2 {
        .left {
          padding: 40px 40px 70px;
          .text {
            font-size: ${({ theme }) => theme.titleSizesXS.h4};
          }
        }
      }

      .carousel-2-block {
        width: 867px;

        .left {
          min-width: 340px;

          .text {
            font-size: ${({ theme }) => theme.titleSizesXS.h4};
          }

          .title {
            padding-bottom: 16px;
          }
        }

        .right {
          min-width: calc(100% - 340px);
        }
      }
    }
    @media (max-width: ${theme.breakpoints.xs}px) {
      padding-left: 70px;

      .text-block {
        width: 420px;
      }
    }

    @media (max-height: ${({ theme }) => theme.breakpoints.xs}px) {
      .content {
        padding: 20px 40px 100px;
      }

      .text {
        > div:not(:first-child) {
          p {
            padding-top: 4px;
          }
        }
      }

      .carousel-block {
        .left {
          padding-top: 40px;
        }
      }
    }

    @media (max-height: 480px) {
      .content1,
      .content2 {
        background-size: auto 60%;
      }
      .content3,
      .content4 {
        background-size: 50% auto;
      }
      .title {
        display: flex;
        flex-wrap: wrap;

        > div:not(:first-child) {
          h1 {
            padding-left: 20px;
          }
        }
      }

      .text-block {
        padding: 40px 20px 60px;

        .text {
          font-size: ${({ theme }) => theme.fontSizes.md};
        }
      }

      .carousel-block {
        .left {
          .text {
            font-size: ${({ theme }) => theme.fontSizes.md};
          }
        }
      }

      .carousel-2-block {
        padding: 40px 20px 60px;
        width: 900px;

        .left {
          .text {
            font-size: ${({ theme }) => theme.fontSizes.md};
          }
        }
      }
      .text-block-2 {
        .right {
          .Collapsible__contentInner {
            max-height: 200px;
          }
        }

        .text {
          font-size: ${({ theme }) => theme.fontSizes.md};
        }
      }
    }
  `
)
