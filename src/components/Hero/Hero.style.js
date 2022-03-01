import styled, { keyframes } from "styled-components"


export const HeroStyle = styled.section`
  //padding: 100px 0;

  .content {
    display: flex;
    justify-content: space-between;

    .left {
      width: 480px;
      padding-right: 24px;
    }

    .right {
      width: calc(100% - 480px);
      max-width: 540px;
    }
    .img-list {
      display: flex;
      flex-wrap: wrap;
      margin-left: -24px;

      li {
        width: calc((100% / 3) - 24px);
        margin-left: 24px;
        margin-bottom: 24px;

        img {
          display: block;
          width: 100%;
          max-width: 200px;
        }
      }
    }
  }

  .title {
    padding-bottom: 24px;

    p {
      overflow: hidden;
    }
  }
  .text {
    padding-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 0;
    .content {
      .left {
        width: 360px;
      }
      .right {
        width: calc(100% - 360px);
      }

      .img-list {
        margin-left: -16px;

        li {
          width: calc((100% / 3) - 16px);
          margin-left: 16px;
          margin-bottom: 16px;

          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 60px 0;
    .content {
      flex-direction: column;
      .left {
        width: 100%;
        padding-right: 0;
        padding-bottom: 60px;
      }
      .right {
        max-width: 540px;
        width: 100%;
      }
    }
  }
`
