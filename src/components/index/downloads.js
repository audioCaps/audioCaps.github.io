import React from "react"

const Downloads = () => (
  <div id="downloads" className="container mb-5">
    <h2>Downloads</h2>
    <div className="images">
      <div className="icon">
        <img src={require("../../images/Database-icon-min.png")} />
        <span>Data</span>
      </div>
      <div className="icon">
        <img src={require("../../images/Github-min.png")} />
        <span>Code</span>
      </div>
    </div>
  </div>
)

export default Downloads
