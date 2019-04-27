import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/index/top_nav"
import Intro from "../components/index/intro"
import About from "../components/index/about"
import Example from "../components/index/example"
//import Purpose from "../components/index/purpose"
import Download from "../components/index/download"
import Team from "../components/index/team"
import Acknowledge from "../components/index/acknowledge"

const IndexPage = () => (
  <div className="index">
    <TopNav />
    <Intro />
    <Layout>
      <SEO title="AudioCaps: Generating Captions for Audios in the Wild" />
      <About />
      <Example />
      {/*<Purpose />*/}
      <Download />
      <Team />
      <Acknowledge />
    </Layout>
  </div>
)

export default IndexPage
