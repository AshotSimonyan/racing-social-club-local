import styled from 'styled-components'

export const GalleryCarsStyle = styled.section`
  display: grid;
  column-gap: 5px;

  .wrapper-carousel {
    border-top: 10px solid ${({ theme }) => theme.colors.white};
    border-bottom: 5px solid ${({ theme }) => theme.colors.white};
    margin-bottom: 5px;
  }

  .wrapper-members {
    border-top: 5px solid ${({ theme }) => theme.colors.white};

    .container {
      max-width: 818px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
          max-width: calc(756px + 40px * 2);
      }
    }

    .content {
      display: grid;
      justify-items: center;

      .title {
        position: relative;
        margin-top: 24px;
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

