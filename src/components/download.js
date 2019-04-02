import React from "react"

const bibtex = String.raw`@inproceedings{kim2019audiocaps,
  title={AudioCaps: Generating Captions for Audios in The Wild},
  author={Kim, Chris Dongjoo and Kim, Byeongchang and Lee, Hyunmin and Kim, Gunhee},
  booktitle={NAACL},
  year={2019}
}
`

const Download = () => (
  <div id="download" className="container mb-5">
    <div className="row">
      <div className="col-md-5">
        <h3>Dataset</h3>
        {/* TODO update dataset link */}
        <p><a href="">Download the dataset here</a>.</p>
        <h3>Paper</h3>
        {/* TODO update paper link */}
        <p><a href="">Download the paper here</a>.</p><p>
        </p>
        <h3>Code</h3>
        <p><a href="https://github.com/bckim92/audio2text">Download the code here</a>.</p>
      </div> {/* end of col-md-5 */}
      <div className="col-md-7">
        <h3>Bibtex</h3>
        {/* TODO update bibtex */}
        <pre>{bibtex}</pre>
      </div> {/* end of col-md-7 */}
    </div> {/* end of row */}
  </div>
)

export default Download
