import styled from "styled-components"

export const Carousel1Style = styled.div`
  position: relative;
  pointer-events: none;

  .slick-slide {
    will-change: opacity;

    img {
      height: 100vh;
      margin-left: auto;
    }
  }

  .progress-wrapper {
    position: absolute;
    top: 80px;
    right: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .count {
      width: 50px;
      text-align: center;
      font-weight: 700;
    }
  }

  .progress {

    width: 2px;
    height: 230px;
    border-right: 2px;
    background: ${({ theme }) => theme.colors.white};

    span {
      display: block;
      transition: height .3s;
      background: ${({ theme }) => theme.colors.primaryGradient};
    }
  }
`
