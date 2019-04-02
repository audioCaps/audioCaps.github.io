import React from "react"
import { Col, Row, Pagination } from "react-bootstrap"
import { Link } from "gatsby"

import Ytplayer from './ytplayer'

const VIDEOS = [
  {
    id: "EzWEO2WD_MM",
    startSeconds: 70,
    audioCaption: "A drone whirring followed by a crashing sound",
    videoCaption: "A toy helicopter is flying over the bed in the room only to crash into the wall"
  },
  {
    id: "6BJ455B1aAs",
    startSeconds: 0,
    audioCaption: "A whooshing noise followed by an explosion",
    videoCaption: "A missile blasted a tall grey tower"
  },
  {
    id: "31WGUPOYS5g",
    startSeconds: 22,
    audioCaption: "A child shouts , and adult male speaks, and an emergency vehicle siren sounds and the horn blows",
    videoCaption: "Dressed up as Santa Claus, a man is waving from the top of a fire engine."
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
        <h2>Example</h2>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Ytplayer video={VIDEOS[active]} duration={10}/>
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
