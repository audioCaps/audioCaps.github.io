import React from 'react'

const About = () => (
  <div id="about" className="container mb-5">
    <h2>What is AudioCaps?</h2>
    <p align="justify">
    We explore the problem of <em>audio captioning</em>: generating natural language description for any kind of audio in the wild, which has been surprisingly unexplored in previous research.
    </p>
    <p align="justify">
      We contribute a large-scale dataset of about <strong>46K</strong> audio clips to human-written text pairs collected via crowdsourcing on the
    &nbsp;<a href="https://research.google.com/audioset">AudioSet </a> dataset.
    </p>
    <p align="justify">
    Our thorough empirical studies not only show that our collected captions are indeed faithful for audio inputs and but also discover what forms of audio representation and captioning models are effective for the audio captioning.
    From extensive experiments, we also propose two novel components that help improve audio captioning performance: the top-down multi-scale encoder and aligned semantic attention.
    </p>
  </div>
)

export default About
