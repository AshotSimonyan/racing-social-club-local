import styled from 'styled-components'

export const RSCUtilityStyle = styled.section`
  .wrapper {
    padding: 120px 40px;
    border-top: 10px solid ${({ theme }) => theme.colors.white}
  }

  .container-title {
    max-width: 930px;
    text-align: center;
    margin-inline: auto;

    p {
      margin-top: 24px;
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }

  .container-utilities {
    max-width: 1120px;
    margin-inline: auto;
    margin-top: 80px;
    display: grid;
    row-gap: 80px;

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
