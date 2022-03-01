import styled from "styled-components"

export const FAQStyle = styled.section`
  padding-left: 130px;

  display: flex;
  
  .title {
    span {
      opacity: 0;
    }
  }
  .faq-content {
    padding: 120px 0 80px;
    max-width: 830px;
    width: 100%;
    margin: 0 auto;
  }

  .Collapsible {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }

  .Collapsible__trigger {
    display: block;
    border-radius: 16px 16px 0 0;

    &.is-open {
      .icon {
        transform: rotate(180deg);
      }
    }
  }

  .Collapsible__contentInner {
    padding: 0 50px 24px;
    // font-size: ${({ theme }) => theme.titleSizes.h4};
  }

  .trigger-inner {
    position: relative;
    font-weight: 700;
    padding: 24px 50px;
    cursor: pointer;
  }


  .contact-block {
    width: 1034px;
    border-left: 10px solid ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
  }

  .contact-content {
    max-width: 714px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    
    .title {
      position: relative;
      padding-bottom: 40px;
      margin-bottom: 24px;
      
      &:after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.white};
        width: 188px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .text {
      padding-bottom: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;
  }
`
