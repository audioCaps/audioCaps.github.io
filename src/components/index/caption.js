import React from "react"
import { MdVisibility, MdHearing } from "react-icons/md"

const Caption = ({ visible, video }) => (
  <h5>
    {visible
        ? <div><MdVisibility /> {video.videoCaption}</div>
        : <div><MdHearing /> {video.audioCaption}</div>
    }
  </h5>
)
export default Caption
