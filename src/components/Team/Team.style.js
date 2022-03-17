import styled from "styled-components"

export const TeamStyle = styled.section`
  padding-left: 130px;

  .content-wrapper {
    display: flex;
    height: 100%;
  }
  .content2 {
    height: 100%;
    width: 670px;
    margin-left: 160px;

    .img-wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
      img {
        object-fit: cover;
        height: 100%;
        position: relative;
        z-index: 1;
        transition: 0.5s;
      }
    }
  }

  .content3 {
    padding: 80px 80px 120px;
  }

  .title {
    padding-bottom: 48px;
    display: flex;
    justify-content: center;

    span {
      opacity: 0;
    }
  }

  .img-wrapper {
    padding-bottom: 16px;

    img {
      display: block;
      width: 100%;
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
    width: 262px;
    margin-left: 32px;

    &:nth-child(even) {
      margin-top: 180px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 120px;

    .content3 {
      padding: 60px 60px 120px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {

    .content3 {
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
