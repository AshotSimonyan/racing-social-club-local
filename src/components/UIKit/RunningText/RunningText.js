import React from "react"
import { RunningTextStyle } from "./RunningText.style"
import Flag from "../../../assets/rally-flag.svg"

const RunningText = ({ withFlag, image, withBorder }) => {
  return (
    <RunningTextStyle image={image} withFlag={withFlag} withBorder={withBorder}>
      {withFlag && <img src={Flag} className="flag" alt="" />}
    </RunningTextStyle>
  )
}

export default RunningText
