import React from "react"

const images = ['SNUVL.png', 'KAKAO.png', 'NRF.jpeg']

const Acknowledge = () => (
  <div id="acknowlege" className="container mb-5">
    <h2>Acknowledgement</h2>
    <div className="sponsors">
      { images.map( (i) => (
        <img
          src={require(`../../images/${i}`)}
          className={i}
          alt={i}
          key={i}
        />
      ))}
    </div>
  </div>
)

export default Acknowledge
