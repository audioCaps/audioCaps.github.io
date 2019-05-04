import React from "react"
import ReactPlayer from "react-player"
import Caption from "./caption"
import VideoControl from "./videoControl"
import { Image } from "./image"

class Ytplayer extends React.Component {
  state = {
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

  openNewTabSecurely = () => {
    const { video } = this.props
    const ytUrl = `https://www.youtube.com/watch?v=${video.id}`
    window.open(ytUrl, '_blank').opener = null
  }

  render() {
    const { video, visible } = this.props
    const { playing, playedSeconds } = this.state
    return (
      <div className="video">
        <Caption visible={visible} video={video} />
        <VideoControl
          playing={playing}
          pauseFunc={this.pause}
          playFunc={this.play}
          // To show full progress bar despite update delays
          progressInPercent={(playedSeconds / (video.duration - 1)) * 100}
        />
        <div style={{position: "relative"}}>
          <ReactPlayer
            ref={this.ref}
            className={!visible ? 'invisible' : ''}
            style={{
              marginBottom: "1rem",
            }}
            config={{
              youtube: {
                playerVars: { showinfo: 1, fs: 1 },
              },
            }}
            width="100%"
            height=""
            progressInterval={100}
            playing={playing}
            url={require(`../../videos/${video.id}_${video.startSeconds}.mp4`)}
            onEnded={this.onEnded}
            onProgress={this.onProgress}
            onPlay={this.onPlay}
            onPause={this.onPause}
          />
          <div
            className={`yt-link ${!visible && 'invisible'}`}
            onClick={this.openNewTabSecurely}
          >
            <Image fileName='yt_icon_rgb.png' />
          </div>
        </div>
      </div>
    )
  }
}

export default Ytplayer
