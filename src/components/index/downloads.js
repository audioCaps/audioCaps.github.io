import React from "react"
import Image from "./image"

const Downloads = () => (
  <div id="downloads" className="container mb-5">
    <h2>Downloads <span className="soon">Comming soon!</span></h2>
    <div className="images">
      <Image src="Database-icon-min.png"
             label="Data"
             link="/"
             wrapperClass="icon"
      />
      <Image src="GitHub-min.png"
             label="Code"
             link="/"
             wrapperClass="icon"
      />
    </div>
  </div>
)

export default Downloads
