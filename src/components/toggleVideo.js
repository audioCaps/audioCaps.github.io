import React from "react"
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import Overlaid from './overlaid'

const ToggleVideo = ({ visible, toggleVisibility }) => (
  <Overlaid>
    <h4 className="visibility-control" onClick={toggleVisibility}>
      { visible ? <MdVisibility/> : <MdVisibilityOff/> }
      <span>
        &nbsp; { visible ? 'Video Caption' : 'Audio Caption' }
      </span>
    </h4>
  </Overlaid>
)
export default ToggleVideo
