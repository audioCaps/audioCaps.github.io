import React from "react"
import ReactPlayer from 'react-player'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import Caption from './caption'
import ToggleVideo from './toggleVideo'

class Ytplayer extends React.Component {
  state = {
    visible: false,
    playing: false,
    playedSeconds: 0,
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

  onProgress = state => {
    const { video } = this.props
    const { playedSeconds } = this.state
    this.setState(state)
    if (playedSeconds > video.duration) {
      this.player.seekTo(0)
    }
  }

  onPlay = () => {
    this.setState({ playing: true })
  }

  onPause = () => {
    this.setState({ playing: false })
  }

  onStart = () => {
    this.setState({ playing: true })
  }

  onEnded = () => {
    this.player.seekTo(0)
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { video } = this.props
    const { playing, visible, playedSeconds } = this.state
    return (
      <>
        <ToggleVideo
          visible={visible}
          toggleVisibility={this.toggleVisibility}
        />
        <Caption
          visible={visible}
          video={video}
        />
        <div className="btn-group d-flex" role="group">
          { playing ?
            <button type="button" className="btn btn-sm btn-warning w-100" onClick={this.pause}><MdPause /></button>
            : <button type="button" className="btn btn-sm btn-success w-100" onClick={this.play}><MdPlayArrow /></button>
          }
          <ProgressBar
            id="progress"
            // To show full progress bar
            now={playedSeconds / (video.duration - 1) * 100 }
            animated
          />
        </div>
        <ReactPlayer
          ref={this.ref}
          style={
            {
              marginBottom: '1rem',
              display: visible ? 'block' : 'none',
            }
          }
          width='100%'
          progressInterval={100}
          playing={playing}
          url={require(`../videos/${video.id}_${video.startSeconds}.mp4`)}
          onEnded={this.onEnded}
          onProgress={this.onProgress}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </>
    )
  }
}

export default Ytplayer
