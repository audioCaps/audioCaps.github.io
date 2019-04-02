import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Overlaid = ({ children, placement='right', content='Click to toggle!' }) => (
  <OverlayTrigger
    key={placement}
    placement={placement}
    overlay={
      <Tooltip id={`tooltip-${placement}`}>
        {content}
      </Tooltip>
    }
  >
    {children}
  </OverlayTrigger>
)

export default Overlaid
