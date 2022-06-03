import styled from 'styled-components'

export const RSCUtilityStyle = styled.section`
  padding-block: 120px;
  border-top: 10px solid ${({ theme }) => theme.colors.white};

  .container-title {
    p {
      margin-top: 24px;
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }

  .wrapper-utilities {
    margin-top: 80px;
  }
  .container-utilities {
    .content {
      display: grid;
      row-gap: 80px;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .membership, .trait {
      display: flex;
      flex-direction: column;
      max-width: 708px;

      .text {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-left: 64px;

        .block {
          h4 {
            font-size: ${({ theme }) => theme.fontSizes.lg};
          }

          p {
            margin-top: 16px;
          }
        }
      }
    }

    .trait {
      justify-self: end;
    }
  }
`
