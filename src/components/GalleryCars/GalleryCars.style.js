import styled from 'styled-components'

export const GalleryCarsStyle = styled.section`
  display: grid;
  column-gap: 5px;

  .wrapper-members {
    padding: 120px 40px;
    border-top: 5px solid ${({ theme }) => theme.colors.white};

    .container {
      max-width: 738px;
      width: 100%;
      text-align: center;
      margin-inline: auto;

      .title {
        position: relative;
        padding-bottom: 24px;

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
        margin-top: 24px;
        margin-bottom: 24px;
      }
    }
  }
`

