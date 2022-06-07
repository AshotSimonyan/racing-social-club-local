import styled from "styled-components";

export const LegendariesStyle = styled.section`
  border-top: 10px solid ${({theme}) => theme.colors.white};
  border-bottom: 10px solid ${({theme}) => theme.colors.white};
  margin-bottom: 20px;
  .content {
    display: flex;
  }


  .left {
    padding-right: 104px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }


  .title {
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
    .left {
      margin-bottom: 80px;
      padding-right: 0;
    }
  }
`

