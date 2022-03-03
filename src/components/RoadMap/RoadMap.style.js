import styled, { css } from "styled-components"

export const RoadMapStyle = styled.section(({roadMapImage, theme}) => css`
  padding-left: 130px;
  display: flex;
 will-change: transform;

  .content-wrapper {
    display: flex;
    height: 100%;
    padding-right: 10px;
    border-right: 20px solid ${theme.colors.white};
  }
  .content {
    width: 1280px;
    background: no-repeat center;
    height: 100%;
    border-right: 10px solid ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: 80px 80px 120px;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 420px;
    width: 100%;
    
    >div:not(:first-child) {
      p {
        padding-top: 16px;
      }
    }
  }

  .content1 {
    background-image: url('${roadMapImage}1.svg');
    background-size: auto 75%;
  }
  .content2 {
    background-image: url('${roadMapImage}2.svg');
    background-size: auto 75%;
  }
  .content3 {
    background-image: url('${roadMapImage}3.svg');
    background-size: 50% auto;
  }
  .content4 {
    background-image: url('${roadMapImage}4.svg');
    background-size: 50% auto;
  }
  
  .carousel-block {
    border-left: 10px solid ${theme.colors.white};
    border-right: 10px solid ${theme.colors.white};
    height: 100%;
    margin-left: 10px;
    display: flex;
    width: 1100px;
    
    .left {
      min-width: 300px;
      padding-top: 100px;
      padding-left: 40px;
      
      .title  {
        padding-bottom: 20px;
      }
      
      .text {
        font-size: ${({theme}) => theme.titleSizes.h5}
      }
      
    }
    
    .right {
      width: calc(100% - 300px);
    }
  }
  
  .text-block {
    width: 780px;
    height: 100%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 10px solid ${({theme}) => theme.colors.white};
    border-right: 2px solid ${({theme}) => theme.colors.white};
    margin-right: 12px;
    
    .text {
      padding-top: 20px;
      position: relative;
      
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 200px;
        background-color: ${({theme}) => theme.colors.white};
        box-shadow: 2px 0 10px 2px white;
        border-radius: 3px;
      }
    }
  }

  .carousel-2-block {
    padding: 80px;
    border-left: 2px solid ${theme.colors.white};
    height: 100%;
    margin-left: 10px;
    display: flex;
    width: 1280px;

    .left {
      min-width: 480px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 120px;

      .spinner {
        text-align: center;
        padding-bottom: 40px;
      }
      .title  {
        padding-bottom: 40px;
      }

      .text {
        font-weight: 400;
        font-size: ${({theme}) => theme.titleSizes.h3};
      }

    }

    .right {
      width: calc(100% - 480px);
    }
  }

`)

