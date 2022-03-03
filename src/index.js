import React from "react"
import ReactDOM from "react-dom"
import App from "./AppCopy"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/GlobalStyles"
import { ParallaxProvider } from "react-scroll-parallax"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ParallaxProvider scrollAxis="horizontal">
      <GlobalStyle />
      <App />
    </ParallaxProvider>
  </ThemeProvider>
  ,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
