import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

import Layout from "../components/layout"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Example from "../components/example"
import Download from "../components/download"
import Acknowledge from "../components/acknowledge"

const IndexPage = () => (
  <div class="index">
    <Header />
    <Intro />
    <Layout>
      <About/>
      <Example/>
      <Download/>
      <Acknowledge/>
    </Layout>
  </div>
)

export default IndexPage
