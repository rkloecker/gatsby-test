import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              author
              date
              path
              title
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage
