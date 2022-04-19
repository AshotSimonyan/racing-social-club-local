import styled from "styled-components";
export const AppStyle = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  
  header {
    height: 190px;
    padding-top: 48px;
    position: relative;
    margin-bottom: 16px;
    
    &:after {
      content: '';
      height: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: ${({theme}) => theme.colors.primaryGradient}
    }
  }
  section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:after, &:before {
      content: '';
      position: absolute;
      background: ${({theme}) => theme.colors.primaryGradient};
      left: 0;
      right: 0;
    }
    
    &:before {
      top: 0;
      height: 20px;
    }
    &:after {
      bottom: 0;
      height: 15px;
    }
    .content  {
      max-width: 720px;
      
      padding: 40px 16px;
    }
  }
  
  footer {
    height: 130px;
    
    img {
      display: block;
      width: 100%;
    }
  }
  
  button {
    margin-top: 44px;
  }
  
  .title {
    margin-bottom: 24px;
  }

  .text {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .yellow-text {
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
  }
  
  .mint-content {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
  
  .mint-input {
    border: 1px solid ${({theme}) => theme.colors.white};
    margin-right: 24px;
    line-height: 60px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .icon {
      cursor: pointer;
    }
  }
  .mt-24 {
    margin-top: 24px;
  }
  
  .warn-text {
    font-size: ${({theme}) => theme.fontSizes.md};
    padding-top: 16px;
  }
  

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    header {
      height: 96px;
      padding-top: 24px;
      
      img {
        width: 104px;
      }
    }
    footer {
      height: 80px;
    }
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    header {
      height: 96px;
      &:after {
        bottom: 0;
        height: 5px;
      }
    }
    
    section {
      &:before {
        bottom: 0;
        height: 10px;
      }
    }
    footer {
      height: 64px;
    }
  }
`
