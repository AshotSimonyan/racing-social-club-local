import styled from "styled-components"

export const ProgressStyle = styled.div`
  height: 16px;
  transform: skewX(-32deg);
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  >div {
    //transform: skewX(-48deg);
    transition: 0.3s;
    // background: ${({ theme }) => theme.colors.primaryGradient} !important;
    height: 100% !important;
  }
`
