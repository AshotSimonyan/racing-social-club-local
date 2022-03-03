import styled, { css, keyframes } from "styled-components"

const scaleImg = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`


export const AboutStyle = styled.section`
  padding-left: 150px;
  
  .content-wrapper {
    display: flex;
    height: 100%;
  }

  

  .content-2 {
    padding-left: 180px;
    width: 670px;
    margin-left: 12px;
    position: relative;
    z-index: 9;
  }

  .content-1 {
    .img-wrapper {
      max-width: 650px;

      img {
        transform: scale(1.2);
        ${({startAnim}) => startAnim && css`
        animation: ${scaleImg} 1.3s .8s forwards;
      `}
      }
    }
  }
  .content-3 {
    .img-wrapper {
      max-width: 890px;
    }
  }
  .img-wrapper {
    position: relative;
    border-radius: 12px;
    height: 100%;
    overflow: hidden;
   will-change: transform;
    img {
      object-fit: cover;
      height: 100%;
      position: relative;
      z-index: 1;
      transition: .5s;
    }
  }

  .text {
    padding-top: 24px;
    max-width: 420px;
    width: 100%;
    
   p {
     &:not(:last-child) {
       padding-bottom: 16px;
     }
   }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {

  
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    
  }
`
