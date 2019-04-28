import React from "react"
import Image from "./image"

const Team = () => (
  <div id="team" className="container mb-5">
    <h2>Team</h2>
    <div className="row" align="center">
      <Image
        src="Dongjoo Kim-min.png"
        label="Dongjoo Kim"
        link="http://vision.snu.ac.kr/people/dongjookim.html"
        wrapperClass="col-md-3 person"
      />
      <Image
        src="Byeongchang Kim-min.png"
        label="Byeongchang Kim"
        link="https://bckim92.github.io"
        wrapperClass="col-md-3 person"
      />
      <Image
        src="Hyunmin Lee-min.png"
        label="Hyunmin Lee"
        link="https://qpzm.github.io"
        wrapperClass="col-md-3 person"
      />
      <Image
        src="Gunhee Kim-min.png"
        label="Gunhee Kim"
        link="http://vision.snu.ac.kr/~gunhee/"
        wrapperClass="col-md-3 person"
      />
    </div>
  </div>
)

export default Team
