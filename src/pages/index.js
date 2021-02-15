import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Intro from "../components/layout/sections/Intro"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
    </Layout>
  )
}

export default IndexPage
