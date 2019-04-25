import React from "react"

const Person = ({ name, link }) => (
  <div className="col-md-3 person">
    <a href={link}>
    <picture style={{marginBottom: '1rem'}}>
      <source type="image/webp" srcSet={require(`../../images/${name}-min.webp`)} />
      <img src={require(`../../images/${name}-min.png`)} alt={name} />
    </picture>
    <div style={{textAlign: 'center'}}>
      {name}
    </div>
    </a>
  </div>
)

const Team = () => (
  <div id="team" className="container mb-5">
    {/* Todo update authors link */}
    <h2>Team</h2>
    <div className="row" align="center">
      <Person name="Dongjoo Kim"
              link="https://github.com/cdjkim"
      />
      <Person name="Byeongchang Kim"
              link="https://bckim92.github.io"
      />
      <Person name="Hyunmin Lee"
              link="https://qpzm.github.io"
      />
      <Person name="Gunhee Kim"
              link="http://vision.snu.ac.kr/~gunhee/"
      />
    </div>
  </div>
)

export default Team
