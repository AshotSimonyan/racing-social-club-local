import styled from "styled-components"

export const TeamStyle = styled.section`
  padding: 200px 0;

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
  .team-list {
    display: flex;
    align-items: flex-start;
    margin-left: -24px;
  }
  .team-card {
    width: 204px;
    margin-left: 24px;

    &:nth-child(even) {
      margin-top: 120px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 160px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 120px 0;
    .team-list {
      justify-content: space-between;
      flex-wrap: wrap;
      margin-left: -16px;
    }
    .team-card {
      width: calc((100% / 3) - 24px);
      margin-left: 16px;
      margin-bottom: 40px;

      &:nth-child(even) {
        margin-top: 0;
      }

      &:nth-child(2) {
        margin-top: 120px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 120px 0 60px;
    .team-list {
      justify-content: flex-start;
    }
    .team-card {
      width: calc((100% / 2) - 24px);

      &:nth-child(even) {
        margin-top: 120px;
      }
    }
  }
`
