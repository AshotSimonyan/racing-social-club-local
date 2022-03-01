import React from "react"
import { ProgressStyle } from "./Progress.style"

const Progress = ({filled}) => {
  return (
    <ProgressStyle>
      <div className='filled' style={{width: `${filled >=100 ? 100 : filled }%`}}/>
    </ProgressStyle>
  )
}

export default Progress
