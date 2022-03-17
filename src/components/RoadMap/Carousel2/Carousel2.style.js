import styled from "styled-components"

export const Carousel2Style = styled.div`
  height: 544px;
  width: 468px;
  margin-left: auto;
  pointer-events: none;

  .slick-slide {
    will-change: opacity;
    .carousel-item {
      padding: 2px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primaryGradient};
    }

    img {
      width: 100%;
      border-radius: 50%;
      display: block;
      background-color: ${({ theme }) => theme.colors.black};
      padding: 24px;
    }
  }

  .slick-next,
  .slick-prev {
    top: 100%;
    width: 72px;
    transition: width 0.5s;
    transform: translateY(100%);
    pointer-events: all;
    height: 36px;
    &:hover {
      width: 120px;
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
    left: 60%;
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
    right: 60%;
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
  .count {
    text-align: center;
    padding-top: 36px;
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: 382px;
    width: 328px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .slick-next,
    .slick-prev {
      width: 48px;

      &:hover {
        width: 64px;
      }
    }
  }

  @media (max-height: 480px) {
    height: 100%;
    width: 170px;

    .slick-next,
    .slick-prev {
      width: 40px;

      &:hover {
        width: 52px;
      }
    }
  }
`
