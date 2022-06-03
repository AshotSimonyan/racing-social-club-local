import styled from 'styled-components'

export const FAQStyle = styled.section`
  border-top: 10px solid ${({ theme }) => theme.colors.white};

  .content {
    display: flex;
    gap: 136px;

    &__faq {
      max-width: 834px;
      padding-block: 80px 40px;
      border-left: 2px solid ${({ theme }) => theme.colors.white};
      border-right: 2px solid ${({ theme }) => theme.colors.white};
    }
  }

  .title {
    margin-top: 80px;
  }

  .Collapsible {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    padding: 24px 0 24px 38px;
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
    overflow: auto;
    margin-right: 16px;

    .answer {
      margin-top: 16px;
      display: grid;
      gap: 16px;

      p {
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }
    }
  }

  .trigger-inner {
    position: relative;
    cursor: pointer;
  }
`
