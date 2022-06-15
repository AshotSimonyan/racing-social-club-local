import styled from "styled-components"

export const TeamStyle = styled.section`
  .running-text-wrapper {
    border-top: 6px solid ${({ theme }) => theme.colors.white};
    border-bottom: 6px solid ${({ theme }) => theme.colors.white};
  }

  .content {
    .slick-slider {
      padding-bottom: 48px;
    }
    .slick-slide {
      will-change: opacity;
      padding: 0 12px 24px;
    }

    .slick-next,
    .slick-prev {
      top: 100%;
      width: 72px;
      transition: width 0.5s;
      pointer-events: all;
      height: 36px;
      margin: 0 12px;
      &:hover {
        width: 80px;
      }

      :before {
        content: none;
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
  }
  .img-wrapper {
    margin-bottom: 16px;

    img {
      width: 100%;
      //border-radius: 50%;
      display: block;
      background-color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({theme}) => theme.colors.greyLight};
    }
  }

  .name {
    display: flex;
    font-size: ${({theme}) => theme.fontSizes.lg};
    margin-bottom: 8px;
    font-weight: 700;

    &.nft-stack {
      margin-bottom: 18px;

      a {
        display: flex;
      }
    }

    .icon {
      margin-left: 8px;
    }
  }

  .position {
    margin-bottom: 8px;
    font-size: ${({theme}) => theme.fontSizes.sm};
  }

  .description {
    font-size: ${({theme}) => theme.fontSizes.sm};
  }


`
