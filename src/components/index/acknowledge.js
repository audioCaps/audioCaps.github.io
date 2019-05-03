import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const IMAGES = ["SNUVL.png", "KAKAO.png", "NRF.jpeg"]

const Sponsor = ({ name }) => (
  <Col className="sponsor" sm>
    <img src={require(`../../images/${name}`)} alt={name} />
  </Col>
)

const Acknowledge = () => (
  <div id="acknowlege" className="container mb-5">
    <h2>Acknowledgement</h2>
    <Row>
      {IMAGES.map(filename => (
        <Sponsor name={filename} key={filename} />
      ))}
    </Row>
  </div>
)

export default Acknowledge
