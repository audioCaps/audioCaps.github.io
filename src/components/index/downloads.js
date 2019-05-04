import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "./image"

const Downloads = () => (
  <div id="downloads" className="container mb-5">
    <h2>Downloads <span className="soon">&nbsp;soon!</span></h2>
    <Row>
      <Col sm>
        <Image
          fileName="Database-icon-min.png"
          label="Data"
          link="/"
          wrapperClass="icon"
        />
      </Col>
      <Col sm>
        <Image
          fileName="GitHub-min.png"
          label="Code" link="/"
          wrapperClass="icon"
        />
      </Col>
    </Row>
  </div>
)

export default Downloads
