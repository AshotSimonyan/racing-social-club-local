import styled from "styled-components"

export const NavBarStyle = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-top: 1px solid ${({ theme }) => theme.colors.white};

  &.open {
    .header-nav {
      height: calc(100% - 60px);
    }
  }

  .navbar-content {
    height: 100%;
    display: flex;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-wrapper {
    width: 150px;
    border-right: 1px solid ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
cursor: pointer;
    max-width: 102px;

    img {
      width: 100%;
      display: block;
    }
  }

  .progress-wrapper {
    padding: 0 24px;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .header-nav {
    position: fixed;
    bottom: 60px;
    right: 0;
    left: 0;
    overflow-y: auto;
    z-index: 100;
    height: 0;
    transition: height 0.5s ease-in-out;
    background-color: ${({ theme }) => theme.colors.black};
    .header-nav-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 60px);
      padding-top: 120px;
    }

    .header-nav-list {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      align-items: flex-start;

      > li {
        cursor: pointer;
        font-weight: 700;
        line-height: 1;
        position: relative;
        font-size: ${({ theme }) => theme.titleSizes.h1};
        width: 100%;
        text-align: center;
        -webkit-text-stroke: 2px ${({ theme }) => theme.colors.black};
        text-shadow: 0 0 18px ${({ theme }) => theme.colors.white};

        &:not(:first-child) {
          margin-top: 24px;
        }
      }
    }

    .copyright {
      display: none;
    }

    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  .social {
    display: flex;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.white};

    li {
      &:last-child {
        .social-btn {
          width: 172px;
          border-left: 1px solid ${({ theme }) => theme.colors.white};

          span {
            margin-left: 8px;
            font-size: ${({ theme }) => theme.fontSizes.md};
            font-weight: 700;
          }
        }
      }
    }
  }

  .social-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;

    .icon {
      path {
        transition: 0.5s;
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }

  .hamburger {
    width: 60px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.black} !important;
        }
      }
    }
  }

  .social-mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .header-nav {
      .header-nav-inner {
        padding-top: 100px;
      }

      .header-nav-list {
        > li {
          margin-bottom: 24px;
          font-size: ${({ theme }) => theme.titleSizesSM.h1};

          &:not(:first-child) {
            margin-top: 0;
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .logo-wrapper {
      width: 62px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .header-nav {
      .header-nav-inner {
        padding-top: 40px;
      }

      .header-nav-list {
        > li {
          font-size: ${({ theme }) => theme.titleSizes.h2};
        }
      }
    }

    .social-desktop {
      display: none;
    }

    .social-mobile {
      border-top: 1px solid ${({ theme }) => theme.colors.white};
      display: block;
      justify-content: center;
    }
    .social {
      border: none;

      li {
        &:last-child {
          border-left: 1px solid ${({ theme }) => theme.colors.white};
          width: 100%;

          .social-btn {
            &.discord {
              height: 60px;
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    .header-nav {

      .header-nav-list {
        > li {
          font-size: ${({ theme }) => theme.titleSizesXS.h2};
        }
      }
    }
  }
`
