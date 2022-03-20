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
    padding: 120px 0 100px;
    width: 830px;
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
    padding: 0 32px 24px 50px;
    overflow: auto;
    max-height: 220px;
    margin-right: 16px;

    p {
      &:not(:first-child) {
        padding-top: 16px;
      }
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.greyLight};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.white};
    }
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
    padding: 0 20px;
    max-width: 714px;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    .title {
      position: relative;
      padding-bottom: 40px;
      margin-bottom: 24px;

      &:after {
        content: "";
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 120px;

    .contact-block {
      width: 960px;

      .title {
        position: relative;
        padding-bottom: 24px;
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 96px;
    .faq-content {
      width: 620px;
      padding: 80px 0 100px;
    }
    .contact-block {
      width: 600px;
    }
    .contact-content {
      max-width: 100%;
    }

    .Collapsible__contentInner {
      max-height: 100px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .faq-content {
      width: 480px;
    }
    .contact-block {
      width: 500px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-left: 70px;
    .faq-content {
      width: 100vw;
    }
    .contact-block {
      width: 100vw;
    }
  }
  @media (max-height: 480px) {
    .faq-content {
      padding-top: 0;
    }
    .Collapsible__contentInner {
      padding-bottom: 8px;
      max-height: 80px;
    }

    .trigger-inner {
      padding: 12px 50px;
    }
  }
`
