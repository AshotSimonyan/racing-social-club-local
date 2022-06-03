import styled from 'styled-components'

export const RSCFundsStyle = styled.section`
  .wrapper {
    border-top: 5px solid ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 120px 40px;
    background-image: ${({ theme }) => theme.colors.primaryGradient};

    .container {
      max-width: 930px;
      text-align: center;
      margin-inline: auto;
      color: ${({ theme }) => theme.colors.black};

      >p {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.fontSizes.lg};
      }

      >a {
        margin-top: 32px;
      }
    }
  }
`
