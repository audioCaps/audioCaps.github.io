import React from "react"
import { Col, Row, Pagination } from "react-bootstrap"
import { Link } from "gatsby"

import Ytplayer from './ytplayer'

const VIDEOS = [
  {
    id: "EzWEO2WD_MM",
    startSeconds: 70,
    audioCaption: "A drone is whirring followed by a crashing sound",
    videoCaption: "A toy helicopter is flying over the bed in the room only to crash into the wall",
    duration: 9,
  },
  {
    id: "6BJ455B1aAs",
    startSeconds: 0,
    audioCaption: "A whooshing noise followed by an explosion",
    videoCaption: "A missile blasted a tall grey tower",
    duration: 6,
  },
  {
    id: "31WGUPOYS5g",
    startSeconds: 22,
    audioCaption: "A child shouts, and an adult male speaks, while an emergency vehicle siren sounds with the horn blowing",
    videoCaption: "Dressed up as Santa Claus, a man is waving from the top of a fire engine.",
    duration: 9,
  },
]
class Example extends React.Component {

  state = {active: 0}

  changeActive= (n) => {
    this.setState({active: n})
  }

  render= () => {
    const { active } = this.state
    const numItems = VIDEOS.length
    return (
      <div id="example" className="container mb-5">
        <h2>Examples</h2>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Ytplayer video={VIDEOS[active]} />
            <Pagination>
              {Array.from(Array(numItems).keys()).map((number) => (
                <Pagination.Item
                  key={number}
                  value={number}
                  active={number === active}
                  onClick={() => this.changeActive(number)}
                >
                  {number + 1}
                </Pagination.Item>)
              )}
              <li className="page-item">
                <Link className="page-link" to="/supp">See more</Link>
              </li>
            </Pagination>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Example
