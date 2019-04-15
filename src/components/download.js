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
      <h3>AudioCaps: Genrating Captions for Audios in The Wild</h3>
      <p>
        Chris Dongjoo Kim,&nbsp;
        <a href="https://bckim92.github.io/">Byeongchang Kim,&nbsp;</a>
        <a href="https://qpzm.github.io/">Hyunmin Lee, and&nbsp;</a>
        <a href="http://vision.snu.ac.kr/~gunhee">Gunhee Kim&nbsp;</a>
        NAACL-HLT 2019 <strong>(Oral)</strong>&nbsp;
        <a href="https://github.com/bckim92/audio2text">[Code]&nbsp;</a>
        <a href="/">[Dataset]</a>
      </p>
      {/* TODO update paper link */}
      <a href="/">
        <img src={require(`../images/paper-min.png`)}
          alt= 'code'
          width= '100%'
        />
      </a>
      <h5>Bibtex</h5>
    <pre>{bibtex}</pre>
  </div>
)

export default Download
