import styled from "styled-components";

export const DriverStyle = styled.section`

  border-top: 5px solid ${({ theme }) => theme.colors.white};
  .content {
    display: flex;
  }


  .left {
    padding-right: 104px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }


  .right {
    width: 50%;
  }

  .title {
    margin-top: 80px;
    margin-bottom: 56px;
  }

  .spinner, .spinner img {
    height: 160px;
    width: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .spinner, .spinner img {
      height: 132px;
      width: 132px;
    }
    .left {
      padding-right: 26px;
    }
    .title {
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .content {
      flex-direction: column;
    }
    .right, .left {
      width: 100%;
    }
    .left {
      padding-right: 0;
    }
  }
`
