import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"

const propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string,
    startSeconds: PropTypes.number,
    GT: PropTypes.string,
    Ours: PropTypes.string,
  }).isRequired,
}

class Example extends React.Component {
  state = {
    visible: false,
    playing: false,
  }

  ref = player => {
    this.player = player
  }

  play = () => {
    this.setState({ playing: true })
  }

  pause = () => {
    this.setState({ playing: false })
  }

  replay = () => {
    this.player.seekTo(0)
    this.play()
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { video } = this.props
    const { visible, playing } = this.state
    return (
      <div className="col-sm-4 example">
        <div className="btn-group d-flex" role="group">
          <button
            type="button"
            className="btn btn-sm btn-warning material-icons w-100"
            onClick={this.replay}
          >
            replay
          </button>
          <button
            type="button"
            className="btn btn-sm btn-success material-icons w-100"
            onClick={this.play}
          >
            play_arrow
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger  material-icons w-100"
            onClick={this.pause}
          >
            pause
          </button>
        </div>
        <div className="text-dark mb-1">
          <strong> (Ours) {video.Ours}</strong>{" "}
        </div>
        <div className="text-dark mb-1"> (GT) {video.GT} </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-danger audio-control"
          onClick={this.toggleVisibility}
        >
          Video
        </button>
        <ReactPlayer
          ref={this.ref}
          style={{
            display: visible ? "block" : "none",
          }}
          width="100%"
          height="200px"
          playing={playing}
          url={require(`../../videos/${video.id}_${video.startSeconds}.mp4`)}
          onEnded={this.onEnded}
          onProgress={this.onProgress}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </div>
    )
  }
}

Example.propTypes = propTypes
export default Example
