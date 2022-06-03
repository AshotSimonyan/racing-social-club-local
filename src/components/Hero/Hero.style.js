import styled, { keyframes } from "styled-components"

export const HeroStyle = styled.section`
  width: 100%;

  .running-text-wrapper {
    border-top: 6px solid ${({ theme }) => theme.colors.white};
    border-bottom: 6px solid ${({ theme }) => theme.colors.white};
  }

  .content {
    background-image: url('/assets/hero/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 96px);
    position: relative;

    a {
      position: absolute;
      bottom: 120px;
    }
  }
`
