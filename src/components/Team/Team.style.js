import styled from "styled-components"

export const TeamStyle = styled.section`
  padding-left: 130px;

  .content-wrapper {
    display: flex;
    height: 100%;
  }
  .content1 {
    height: 100%;
    width: 670px;
    margin-left: 160px;

    .img-wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        transition: 0.5s;
      }
    }
  }

  .content2 {
    padding: 80px 80px 100px;

    .img-wrapper {
      padding-bottom: 16px;
      height: 100%;

      img {
        display: block;
        height: 100%;
      }
    }
  }

  .title {
    padding-bottom: 48px;
    display: flex;
    justify-content: center;

    span {
      opacity: 0;
    }
  }

  .name {
    font-weight: 700;
    padding-bottom: 4px;
  }

  .position {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  .team-list {
    display: flex;
    align-items: center;
    margin-left: -24px;
    height: 100%;
  }
  .team-card {
    height: 40vh;
    margin-left: 32px;

    &:nth-child(even) {
      margin-top: 20%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 120px;

    .content2 {
      padding: 60px 60px 100px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .content2 {
      padding: 40px 40px 100px;
    }
    .team-card {
      &:nth-child(even) {
        margin-top: 120px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-left: 70px;

    .content1 {
      width: 100vw;
    }
  }
  @media (max-height: 480px) {
    .team-card {
      width: 130px;

      &:nth-child(even) {
        margin-top: 40px;
      }
    }
  }
`
