import styled from 'styled-components'

export const RSCFundsStyle = styled.section`
  border-top: 5px solid ${({ theme }) => theme.colors.white};
  background-image: ${({ theme }) => theme.colors.primaryGradient};

  .container-md {
    .content {
      color: ${({ theme }) => theme.colors.black};

      > p {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.fontSizes.lg};
      }

      > a {
        margin-top: 32px;
      }
    }
  }
`
