import React from 'react'

const Purpose = () => (
  <div id="purpose" className="container mb-5">
    <h2>Why AudioCaps?</h2>
      <img src={require(`../images/dataset_comparison-min.png`)}
          alt="dataset-comparison"
          width="100%"
      />
    <p align="justify">
      The captions from (a) <a href="https://sites.google.com/site/describingmovies/home">LSMDC</a> and (b) <a href="https://www.microsoft.com/en-us/research/publication/msr-vtt-a-large-video-description-dataset-for-bridging-video-and-language/">MSR-VTT</a>
      have multiple visually <span style={{color: '#007bff'}}>grounded vocabularies</span>,
      whereas (c) the caption from <em>AudioCaps</em> contains vocabularies relying on <span style={{color: 'red'}}>auditory cues</span>.
    </p>
  </div>
)

export default Purpose
