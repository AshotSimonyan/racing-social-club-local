import styled from "styled-components";

export const DriverStyle = styled.section`
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
    margin-bottom: 56px;
  }

  .spinner, .spinner img {
    height: 160px;
    width: 160px;
  }
`
