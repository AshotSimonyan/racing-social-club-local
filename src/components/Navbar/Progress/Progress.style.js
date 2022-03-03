import styled from "styled-components"

export const ProgressStyle = styled.div`
  height: 16px;
  transform: skewX(-32deg);
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  .filled {
    //transform: skewX(-48deg);
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.primaryGradient};
    height: 100%;
  }
`
