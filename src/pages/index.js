import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

import Layout from "../components/layout"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Example from "../components/example"
import Purpose from "../components/purpose"
import Download from "../components/download"
import Team from "../components/team"
import Acknowledge from "../components/acknowledge"

const IndexPage = () => (
  <div className="index">
    <Header />
    <Intro />
    <Layout>
      <About/>
      <Example/>
      <Purpose/>
      <Download/>
      <Team/>
      <Acknowledge/>
    </Layout>
  </div>
)

export default IndexPage
