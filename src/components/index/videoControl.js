import React from "react"
import PropTypes from 'prop-types'
import { MdPlayArrow, MdPause } from "react-icons/md"
import ProgressBar from "react-bootstrap/ProgressBar"

const VideoControl = ({
  playing,
  pauseFunc,
  playFunc,
  progressInPercent,
}) => (
  <div className="btn-group d-flex" role="group">
    {playing ? (
      <button
        type="button"
        className="btn btn-sm btn-warning w-100"
        onClick={pauseFunc}
      >
        <MdPause />
      </button>
    ) : (
      <button
        type="button"
        className="btn btn-sm btn-success w-100"
        onClick={playFunc}
      >
        <MdPlayArrow />
      </button>
    )}
    <ProgressBar
      id="progress"
      now={progressInPercent}
    />
  </div>
)

VideoControl.propTypes = {
  playing: PropTypes.number,
  pauseFunc: PropTypes.func,
  playFunc: PropTypes.func,
  progressInPercent: PropTypes.number,
}

export default VideoControl
