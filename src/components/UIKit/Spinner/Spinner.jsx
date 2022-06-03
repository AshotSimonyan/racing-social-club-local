import React from "react"
import { SpinnerStyle } from "./Spinner.style"

const Spinner = ({size="sm"}) => {
  return (
    <SpinnerStyle className={['spinner', size].join(' ')}>
      <img src="/assets/spinner.svg" alt="" />
    </SpinnerStyle>
  )
}

export default Spinner
