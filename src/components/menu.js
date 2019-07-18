import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "dodgerblue",
      color: "white",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        color: "white",
      }}
    >
      <li>
        <Link
          activeClassName="active"
          style={{
            textDecoration: `none`,
            fontSize: "1.3rem",
            color: "white",
          }}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClassName="active"
          style={{
            textDecoration: `none`,
            fontSize: "1.3rem",
            color: "white",
          }}
          to="/about"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          activeClassName="active"
          style={{
            textDecoration: `none`,
            fontSize: "1.3rem",
            color: "white",
          }}
          to="/blog"
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
