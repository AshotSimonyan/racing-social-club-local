import styled from "styled-components";

export const LegendariesStyle = styled.section`
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
`

