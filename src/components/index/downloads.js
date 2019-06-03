import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "./image"

const Downloads = () => (
  <div id="downloads" className="container mb-5">
    <h2>Downloads</h2>
    <Row>
      <Col sm>
        <Image
          fileName="Database-icon-min.png"
          label="Data"
          link="https://github.com/cdjkim/audiocaps"
          wrapperClass="icon"
        />
      </Col>
      <Col sm>
        <Image
          fileName="GitHub-min.png"
          label="Code" link="https://github.com/cdjkim/audiocaps"
          wrapperClass="icon"
        />
      </Col>
    </Row>
  </div>
)

export default Downloads
