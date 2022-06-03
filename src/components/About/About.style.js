import styled, { css, keyframes } from "styled-components"

const scaleImg = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`

export const AboutStyle = styled.section`
  .wrapper {
    border-top: 5px solid ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 120px 40px;

    .container {
      max-width: 930px;
      text-align: center;
      margin-inline: auto;

      .content {
        margin-top: 32px;
        display: grid;
        gap: 16px;
      }
    }
  }

  .banner {
    width: 100%;
    height: fit-content;
    max-height: 400px;
    border-top: 5px solid ${({ theme }) => theme.colors.white};

    img {
      width: 100%;
      object-fit: cover;
      display: block;
      max-height: 400px;
    }
  }
`
