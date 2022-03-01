import styled, { css } from "styled-components"

export const RoadMapStyle = styled.section(({roadMapImage, theme}) => css`
  padding-left: 130px;
  display: flex;

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
  
  .carousel-1 {
    border-left: 10px solid ${theme.colors.white};
    border-right: 10px solid ${theme.colors.white};
    height: 100%;
    margin-left: 10px;
    display: flex;
    width: 1100px;
    
    .left {
      max-width: 372px;
      width: 100%;
      padding-top: 100px;
      padding-left: 40px;
      
      .title  {
        padding-bottom: 20px;
      }
    }
    
    .right {
      flex: 1;
    }
  }

`)

