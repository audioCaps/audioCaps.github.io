import React from "react"

const Caption = ({ visible, video }) => (
  <h5> {visible ? video.videoCaption : video.audioCaption} </h5>
)
export default Caption
