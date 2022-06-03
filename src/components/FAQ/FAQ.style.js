import styled from 'styled-components'

export const FAQStyle = styled.section`
  border-top: 10px solid ${({ theme }) => theme.colors.white};

  .content {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
        padding-top: 16px;
    }

    &__faq {
      max-width: 834px;
      padding-top: 56px;
      padding-bottom: 40px;
      border-left: 2px solid ${({ theme }) => theme.colors.white};
      border-right: 2px solid ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
          padding-top: 36px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        position: relative;
        padding-top: 16px;
        margin-top: 16px;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          right: -16px;
          left: -16px;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.white};
          z-index: -1;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
          padding-top: 36px;
      }
    }
  }

  .title {
    margin-top: 80px;
    margin-right: 60px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        h1 {
          font-size: ${({ theme }) => theme.titleSizesSM.h1};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 0;
        margin-right: 0;
    }
  }

  .Collapsible {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    padding: 24px 0 24px 38px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-left: 16px;
    }
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
