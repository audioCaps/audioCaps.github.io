import React from "react"
import { Col, Row } from "react-bootstrap"

const About = () => (
  <div id="about" className="container mb-5">
    <h2>What is AudioCaps?</h2>
    <Row>
      <Col md={6}>
        <img
          src={require(`../../images/audio_vs_video-min.png`)}
          alt="code"
          width="100%"
        />
      </Col>
      <Col>
        <p align="justify">
          We explore <strong>audio captioning</strong>: generating natural
          language description for any kind of audio in the wild.
        </p>
        <p align="justify">
          We contribute AudioCaps, a large-scale dataset of about{" "}
          <strong>46K</strong> audio clips to human-written text pairs collected
          via crowdsourcing on the &nbsp;
          <a href="https://research.google.com/audioset">AudioSet </a> dataset.
          The collected captions of AudioCaps are indeed faithful for audio
          inputs.
        </p>
        <p align="justify">
          We provide the source code of the models to explore what forms of
          audio representation and captioning models are effective for the audio
          captioning.
        </p>
      </Col>
    </Row>
  </div>
)

export default About
