import React from "react"
import { SpinnerStyle } from "./Spinner.style"

const Spinner = () => {
  return (
    <SpinnerStyle className='spinner'>
      <img src="/assets/spinner.svg" alt="" />
    </SpinnerStyle>
  )
}

export default Spinner
