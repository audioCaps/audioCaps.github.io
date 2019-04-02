import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './supp.css'

const VIDEOS = [
  {
    id: "6BJ455B1aAs",
    startSeconds: 0,
    Ours: 'a large explosion followed by a loud pop',
    GT: 'a whooshing noise followed by an explosion',
  },
  {
    id: "31WGUPOYS5g",
    startSeconds: 22,
    Ours: 'a small motor is running , whirring occurs , and a high - pitched whine is present</strong>',
    GT: 'a drone whirring followed by a crashing sound',
  },
  {id: "EzWEO2WD_MM", startSeconds: 70 },
  {id: "_YS5uKWoB6g", startSeconds: 30 },
  {id: "fGGYeXR_LS8", startSeconds: 30 },
  {id: "hJtOGmN_KVw", startSeconds: 140 },
  {id: "bX2vDaHL26U", startSeconds: 60 },
  {id: "YIqpIjjee00", startSeconds: 30 },
  {id: "bygBWUkpaC8", startSeconds: 270 },
  {id: "yhDw7PZje3g", startSeconds: 30 },
  {id: "SGaIvgwwWSE", startSeconds: 30 },
  {id: "bpv_LneHmfU", startSeconds: 10 },
  {id: "GuizRlAQ8qQ", startSeconds: 50 },
  {id: "FDwK7T1JO_0", startSeconds: 160 },
]

const SuppPage = () => (
  <>
    <SEO title="AudioCaps Supplementary" />
    <header className="container mt-2 mb-5">
      NAACL-HLT 2019
    </header>
    <div className="container my-5">
      <div className="row justify-content-center">
        <h1>[Supplementary Materials] </h1>
        <h1>AudioCaps: Generating Captions for Audios in The Wild</h1>
      </div>
    </div>
    <div className="container mb-5">
      <h2>Abstract</h2>
      <p align="justify">
      We explore the problem of <em>audio captioning</em>: generating natural language description for any kind of audio in the wild, which has been surprisingly unexplored in previous research.
      We contribute a large-scale dataset of about 46K audio clips to human-written text pairs collected via crowdsourcing on the
      <a href="https://research.google.com/audioset">AudioSet </a> dataset.
      Our thorough empirical studies not only show that our collected captions are indeed faithful for audio inputs and but also discover what forms of audio representation and captioning models are effective for the audio captioning.
      From extensive experiments, we also propose two novel components that help improve audio captioning performance: the top-down multi-scale encoder and aligned semantic attention.
      </p>
    </div>
    <div className="container mb-5">
      <h2>Examples</h2>
      <div className="row mb-5">
        <div className="col-sm">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(0)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(0)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger  material-icons w-100" onclick="ref_pauseFunction(0)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a large explosion followed by a loud pop</strong> </div>
          <div className="text-dark mb-1"> (GT) a whooshing noise followed by an explosion </div>
          <button type="button" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(0)">Video</button>
          <div id='reference_player_0'></div>
        </div>
        <div className="col-sm">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(1)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(1)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger  material-icons w-100" onclick="ref_pauseFunction(1)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a truck engine is running , a siren is occurring , and an adult male speaks</strong> </div>
          <div className="text-dark mb-1"> (GT) a child shouts , and adult male speaks , and an emergency vehicle siren sounds and the horn blows</div>
          <button type="button" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(1)">Video</button>
          <div id='reference_player_1'></div>
        </div>
        <div className="col-sm">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(2)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(2)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(2)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a small motor is running , whirring occurs , and a high - pitched whine is present</strong> </div>
          <div className="text-dark mb-1"> (GT) a drone whirring followed by a crashing sound</div>
          <button type="button" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(2)">Video</button>
          <div id='reference_player_2'></div>
        </div> {/* end of col-sm */}
      </div> {/* end of row */}
      <div className="row mb-5">
        <div className="col-sm">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(3)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(3)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(3)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a man and woman talking , then a baby crying</strong> </div>
          <div className="text-dark mb-1"> (GT) a kid crying as a man and a woman talk followed by a car door opening then closing</div>
          <button type="button" id="show_video_3" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(3)">Video</button>
          <div id='reference_player_3'></div>
        </div> {/* end of col-sm */}
        <div className="col-sm">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(4)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(4)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(4)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a man speaking with a series of whistling in the background</strong> </div>
          <div className="text-dark mb-1"> (GT) a man talking as another person whistles while water trickles on a hard surface in the background</div>
          <button type="button" id="show_video_4" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(4)">Video</button>
          <div id='reference_player_4'></div>
        </div>
        <div className="col-sm">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(5)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(5)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(5)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a man speaking as plastic crinkles</strong> </div>
          <div className="text-dark mb-1"> (GT) plastic crumpling and crinkling are ongoing , and an adult male speaks</div>
          <button type="button" id="show_video_5" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(5)">Video</button>
          <div id='reference_player_5'></div>
        </div>
      </div> {/* end of row */}
      <div className="row mb-5">
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(6)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(6)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(6)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a vehicle engine is running and revving , and tires squeal</strong> </div>
          <div className="text-dark mb-1"> (GT) white noise , then a motor revving up and a tire skidding</div>
          <button type="button" id="show_video_6" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(6)">Video</button>
          <div id='reference_player_6'></div>
        </div>
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(7)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(7)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(7)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) hissing and gurgling of water flowing down a toilet</strong> </div>
          <div className="text-dark mb-1"> (GT) plastic crumpling and crinkling are ongoing , and an adult male speaks</div>
          <button type="button" id="show_video_7" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(7)">Video</button>
          <div id='reference_player_7'></div>
        </div>
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(8)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(8)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(8)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a man speaks with birds chirping in the distance</strong> </div>
          <div className="text-dark mb-1"> (GT) a man speaking with light wind followed by brief silence then birds chirping</div>
          <button type="button" id="show_video_8" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(8)">Video</button>
          <div id='reference_player_8'></div>
        </div>
      </div> {/* end of row */}
      <div className="row mb-5">
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(9)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(9)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(9)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a man speaking followed by bees buzzing</strong> </div>
          <div className="text-dark mb-1"> (GT) a man speaks with wind blowing and buzzing of insects</div>
          <button type="button" id="show_video_9" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(9)">Video</button>
          <div id='reference_player_9'></div>
        </div>
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(10)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(10)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(10)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a thunderstorm is in the distance</strong> </div>
          <div className="text-dark mb-1"> (GT) rain falling and thunder roaring in the distance</div>
          <button type="button" id="show_video_10" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(10)">Video</button>
          <div id="reference_player_10"></div>
        </div>
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(11)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(11)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(11)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a large aircraft engine is running</strong> </div>
          <div className="text-dark mb-1"> (GT) humming of a nearby jet engine</div>
          <button type="button" id="show_video_11" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(11)">Video</button>
          <div id="reference_player_11"></div>
        </div>
      </div> {/* end of row */}
    </div> {/* end of examples container */}
    <div className="container">
      <h2>Wrong Examples</h2>
      <div className="row">
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(12)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(12)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(12)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a vehicle engine revving</strong> </div>
          <div className="text-dark mb-1"> (GT) high pitched continuous drilling that slows down</div>
          <button type="button" id="show_video_12" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(12)">Video</button>
          <div id="reference_player_12"></div>
        </div>
        <div className="col-sm-4">
          <div className="btn-group d-flex" role="group">
            <button type="button" className="btn btn-sm btn-warning material-icons w-100" onclick="ref_restartFunction(13)">replay</button>
            <button type="button" className="btn btn-sm btn-success material-icons w-100" onclick="ref_playFunction(13)">play_arrow</button>
            <button type="button" className="btn btn-sm btn-danger material-icons w-100" onclick="ref_pauseFunction(13)">pause</button>
          </div>
          <div className="text-dark mb-1"><strong> (Ours) a man speaking and a sewing machine working</strong> </div>
          <div className="text-dark mb-1"> (GT) two men speaking followed by plastic clacking then a power tool drilling</div>
          <button type="button" id="show_video_13" className="btn btn-sm btn-outline-danger audio-control" onclick="show_video(13)">Video</button>
          <div id="reference_player_13"></div>
        </div>
      </div> {/* end of row */}
    </div> {/* end of container */}
  </>
)

export default SuppPage
