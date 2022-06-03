import { createGlobalStyle, keyframes } from "styled-components"
import { fontFace } from "../utils/utils"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const GlobalStyle = createGlobalStyle`
  /*reset*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  article, aside, details, figcaption, figure, dialog,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  ul, ul li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;

    &:before, &:after {
      content: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 100%;
    color: inherit;
  }


  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * Paul Irish box sizing reset so all elements have broder-box.
   */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  /**
   * custom smarty resets
   */
  a {
    text-decoration: none;
  }

  button, input, a, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*global*/
  body {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    line-height: 1.4;
    //overflow: hidden;
    position: relative;
    height: 100%;
    letter-spacing: 0.04em;
  }

  .scroll-horizontal {
    display: flex;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: scroll;
    transition: .5s;

    section {
      flex-shrink: 0;
      position: relative;
      height: calc(100vh - 60px);
      overflow-y: hidden;

      &:not(:last-child) {
        border-right: 10px solid ${({ theme }) => theme.colors.white};
      }
    }
  }

  .main-wrapper {
    height: 100vh;
    width: 100vw;
  }


  /*typography*/

  h1, h2, h4, h5, .h1, .h2, .h4, .h5 {
    line-height: 1.2;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  .text-shadow {
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.black};
    text-shadow: 0 0 18px ${({ theme }) => theme.colors.white};
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.titleSizes.h1};
    font-weight: 500;
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.black};
    text-shadow: 0 0 18px ${({ theme }) => theme.colors.white};
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.titleSizes.h2};
    font-weight: 500;
  }

  h4, .h4 {
    font-size: ${({ theme }) => theme.titleSizes.h4};
  }


  /*colors*/
  .color-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .fw-bold {
    font-weight: 700;
  }
  .fw-regular {
    font-weight: 400;
  }
  .fw-medium {
    font-weight: 500;
  }


  /*animations*/
  .animated {
    opacity: 0;
  }

  .transition {
    transition: transform .1s linear;
  }

  .fade-in {
    animation: ${fadeIn} .5s ease-in forwards;
  }


  iframe {
    pointer-events: none; /*for development*/
  }


  /*media queries*/
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {

    h1, .h1 {
      font-size: ${({ theme }) => theme.titleSizesSM.h1};
    }

    h2, .h2 {
      font-size: ${({ theme }) => theme.titleSizesSM.h2};
    }
  }

  /*media queries*/
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1, .h1 {
      font-size: ${({ theme }) => theme.titleSizesXS.h1};
    }
    h2, .h2 {
      font-size: ${({ theme }) => theme.titleSizesXS.h2};
    }
    h4, .h4 {
      font-size: ${({ theme }) => theme.titleSizesXS.h4};
    }
  }

  @media (max-height: 680px) {
    h2, .h2 {
      font-size: ${({ theme }) => theme.titleSizesXS.h2};
    }
  }

  //@media (max-height: 840px) and (orientation: landscape)  {
  //  h1, .h1 {
  //    font-size: ${({ theme }) => theme.titleSizesSM.h1};
  //  }
  //}

  @media (hover: none), (pointer:coarse), (-moz-touch-enabled: 1) {
    .scroll-horizontal {
      overflow: scroll !important;
      overflow: overlay !important;
      overflow-x: scroll !important;
      overflow-x: overlay !important;
      overflow-y: hidden !important;
      -ms-overflow-style: none !important;
      scrollbar-width: none !important;

      &>div {
        transform: none !important;
        position: relative;
      }

      &::-webkit-scrollbar {
        display: none !important;
      }
    }
  }

`
