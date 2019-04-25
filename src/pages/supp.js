import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import SEO from "../components/seo"
import Example from "../components/supp/example"
import "./supp.scss"

const VIDEOS = [
  {
    id: "6BJ455B1aAs",
    startSeconds: 0,
    Ours: "a large explosion followed by a loud pop",
    GT: "a whooshing noise followed by an explosion",
  },
  {
    id: "31WGUPOYS5g",
    startSeconds: 22,
    Ours:
      "a small motor is running , whirring occurs , and a high - pitched whine is present",
    GT: "a drone whirring followed by a crashing sound",
  },
  {
    id: "EzWEO2WD_MM",
    startSeconds: 70,
    Ours:
      "a small motor is running , whirring occurs , and a high - pitched whine is present",
    GT: "a drone whirring followed by a crashing sound",
  },
  {
    id: "-YS5uKWoB6g", // original YT key "_YS5uKWoB6g"
    startSeconds: 30,
    Ours: "a man and woman talking , then a baby crying",
    GT:
      "a kid crying as a man and a woman talk followed by a car door opening then closing",
  },
  {
    id: "fGGYeXR_LS8",
    startSeconds: 30,
    Ours: "a man speaking with a series of whistling in the background",
    GT:
      "a man talking as another person whistles while water trickles on a hard surface in the background",
  },
  {
    id: "hJtOGmN_KVw",
    startSeconds: 140,
    Ours: "a man speaking as plastic crinkles",
    GT:
      "plastic crumpling and crinkling are ongoing , and an adult male speaks",
  },
  {
    id: "bX2vDaHL26U",
    startSeconds: 60,
    Ours: "a vehicle engine is running and revving , and tires squeal",
    GT: "white noise , then a motor revving up and a tire skidding",
  },
  {
    id: "YIqpIjjee00",
    startSeconds: 30,
    Ours: "hissing and gurgling of water flowing down a toilet",
    GT:
      "plastic crumpling and crinkling are ongoing , and an adult male speaks",
  },
  {
    id: "bygBWUkpaC8",
    startSeconds: 270,
    Ours: "a man speaks with birds chirping in the distance",
    GT:
      "a man speaking with light wind followed by brief silence then birds chirping",
  },
  {
    id: "yhDw7PZje3g",
    startSeconds: 30,
    Ours: "a man speaking followed by bees buzzing",
    GT: "a man speaks with wind blowing and buzzing of insects",
  },
  {
    id: "SGaIvgwwWSE",
    startSeconds: 30,
    Ours: "a thunderstorm is in the distance",
    GT: "rain falling and thunder roaring in the distance",
  },
  {
    id: "bpv_LneHmfU",
    startSeconds: 10,
    Ours: "a large aircraft engine is running",
    GT: "humming of a nearby jet engine",
  },
  {
    id: "GuizRlAQ8qQ",
    startSeconds: 50,
    Ours: "a vehicle engine revving",
    GT: "high pitched continuous drilling that slows down",
    wrong: true,
  },
  {
    id: "FDwK7T1JO_0",
    startSeconds: 160,
    Ours: "a man speaking and a sewing machine working",
    GT:
      "two men speaking followed by plastic clacking then a power tool drilling",
    wrong: true,
  },
]

const SuppPage = () => (
  <div className="supp">
    <SEO title="AudioCaps Supplementary" />
    <header className="container mt-2 mb-5">NAACL-HLT 2019</header>
    <div className="container my-5">
      <div className="row justify-content-center">
        <h1>[Supplementary Materials] </h1>
        <h1>AudioCaps: Generating Captions for Audios in The Wild</h1>
      </div>
    </div>
    <div className="container mb-5">
      <h2>Abstract</h2>
      <p align="justify">
        We explore the problem of <em>audio captioning</em>: generating natural
        language description for any kind of audio in the wild, which has been
        surprisingly unexplored in previous research. We contribute a
        large-scale dataset of about 46K audio clips to human-written text pairs
        collected via crowdsourcing on the &nbsp;
        <a href="https://research.google.com/audioset">AudioSet </a> dataset.
        Our thorough empirical studies not only show that our collected captions
        are indeed faithful for audio inputs and but also discover what forms of
        audio representation and captioning models are effective for the audio
        captioning. From extensive experiments, we also propose two novel
        components that help improve audio captioning performance: the top-down
        multi-scale encoder and aligned semantic attention.
      </p>
    </div>
    <div className="container mb-5">
      <h2>Examples</h2>
      <div className="row">
        {VIDEOS.filter(v => v.wrong !== true).map(v => (
          <Example key={v.id} video={v} />
        ))}
      </div>
    </div>{" "}
    {/* end of examples container */}
    <div className="container">
      <h2>Wrong Examples</h2>
      <div className="row">
        {VIDEOS.filter(v => v.wrong).map(v => (
          <Example key={v.id} video={v} />
        ))}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>
)

export default SuppPage
