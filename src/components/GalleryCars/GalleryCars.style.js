import styled from 'styled-components'

export const GalleryCarsStyle = styled.section`
  display: grid;
  column-gap: 5px;

  .wrapper-carousel {
    border-top: 10px solid ${({ theme }) => theme.colors.white};
    border-bottom: 5px solid ${({ theme }) => theme.colors.white};
    margin-bottom: 5px;
  }

  .carousel {
    width: 100vw;
    .slick-slide {
      padding: 0 40px;
      transition: 0.3s;
      //width: 400px;

      &:not(.slick-center) {
        opacity: 0.5;
      }
      .item {
        cursor: pointer;
        display: block;
        margin: 40px 0;
        overflow: hidden;

        img {
          width: 100%;
          transition: all 0.8s;
          will-change: transform;
        }
      }
    }

    .slick-center {
      transform: scale(1.2);

      .item {
        img {
          transform: scale(1);
        }
      }
    }
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
  .slick-next,
  .slick-prev {
    margin: 0 12px;
    top: 100%;
    width: 72px;
    transition: width 0.5s;
    transform: translateY(100%);
    pointer-events: all;
    height: 36px;
    &:hover {
      width: 80px;
    }

    .icon-wrapper {
      position: relative;
      display: block;

      &:after {
        content: "";
        width: calc(100% - 6px);
        height: 2px;
        background-color: ${({ theme }) => theme.colors.white};
        position: absolute;
        display: block;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .arrow-text {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      margin-bottom: 10px;
      display: inline-block;
    }

    &:before {
      content: none;
    }
  }

  .slick-next {
    left: 50%;
    right: inherit;
    text-align: left;

    .arrow-text {
      text-align: left;
    }

    .icon-wrapper {
      text-align: right;

      &:after {
        left: 0;
      }
    }
  }

  .slick-prev {
    left: inherit;
    right: 50%;
    text-align: right;

    .arrow-text {
      text-align: right;
    }

    .icon-wrapper {
      text-align: left;

      &:after {
        right: 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .carousel {
      .slick-slide {
        padding: 0 20px;
      }
      .slick-center {
        transform: scale(1.3);
      }
    }
  }
`

