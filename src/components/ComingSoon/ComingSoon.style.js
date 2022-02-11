import styled from "styled-components"

export const ComingSoonStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
  

  header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      max-width: 224px;

      img {
        width: 100%;
      }
    }
  }

  section {
    padding: 48px 0;
    img {
      width: 100%;
    }
  }

  footer {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;

      li {
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }
`
