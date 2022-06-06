import React from "react"
import { ProgressStyle } from "./Progress.style"
import ProgressBar from "./ProgressLogic";

const Progress = ({ filled }) => {
  return (
    <ProgressStyle>
      <ProgressBar
        color="#E8C66C"
        gradient={true}
        colorGradient="#cccccc"
        height={5}
        position="bottom"
      />
    </ProgressStyle>
  )
}

export default Progress
