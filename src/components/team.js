import React from "react"

const Person = ({ name }) => (
  <div className="col-md-3">
    <picture style={{marginBottom: '1rem'}}>
      <source type="image/webp" srcSet={require(`../images/${name}-min.webp`)} />
      <img src={require(`../images/${name}-min.png`)} alt={name} />
    </picture>
    <div style={{textAlign: 'center'}}>
      {name}
    </div>
  </div>
)

const Team = () => (
  <div id="team" className="container mb-5">
    {/* Todo update authors link */}
    <h2>Team</h2>
    <div className="row" align="center">
      <Person name="Dongjoo Kim" />
      <Person name="Byeongchang Kim" />
      <Person name="Hyunmin Lee" />
      <Person name="Gunhee Kim" />
    </div>
  </div>
)

export default Team
