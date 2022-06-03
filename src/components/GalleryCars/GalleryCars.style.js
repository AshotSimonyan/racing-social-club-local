import styled from 'styled-components'

export const GalleryCarsStyle = styled.section`
  display: grid;
  column-gap: 5px;

  .wrapper-members {
    padding: 120px;
    border-top: 5px solid ${({ theme }) => theme.colors.white};

    .container {
      max-width: 818px;
    }

    .content {
      display: grid;
      justify-items: center;

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

  .flag {
    height: 163px;
    width: 100%;
    background-image: url('/assets/gallery-cars/flag.svg');
    background-position-y: 3px;
    position: relative;

    ::before, ::after {
      content: '';
      position: absolute;
      height: 19px;
      width: 100%;
      background-image: ${({ theme }) => theme.colors.primaryGradient};
    }

    ::before {
      top: 0;
    }

    ::after {
      bottom: 0;
    }
  }
`

