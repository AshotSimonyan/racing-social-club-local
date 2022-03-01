import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`
export const SpinnerStyle = styled.div`
  img {
    animation: ${rotate} 3s linear infinite;
  }
  
`
