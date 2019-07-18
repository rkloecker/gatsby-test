import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is the about page</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore
      eos deserunt expedita dignissimos a illo dicta, nam magnam aspernatur
      culpa ipsam officiis rerum molestias rem voluptatem sint possimus nulla.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
