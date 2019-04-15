import React from "react"
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const ToggleVideo = ({ visible, toggleVisibility }) => (
  <div className="toggle-video">
    <h4 onClick={toggleVisibility} className={visible ? 'visible' : ''}>
      <MdVisibilityOff/><span>&nbsp;Audio Caption</span>
    </h4>
    <h4 onClick={toggleVisibility} className={!visible ? 'visible' : ''}>
      <span>Video Caption&nbsp;</span><MdVisibility/>
    </h4>
  </div>
)
export default ToggleVideo
