import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import parse from "html-react-parser"

const SPEAKERS_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "speaker" } } }
      sort: { fields: frontmatter___order, order: ASC }
      limit: 4
    ) {
      nodes {
        html
        frontmatter {
          title
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                placeholder: BLURRED
                transformOptions: { fit: CONTAIN }
              )
            }
          }
        }
      }
    }
  }
`

const SectionSpeakers = props => {
  return (
    <>
      <div id="speakers" className="home-header">
        <h1 id="speakers-header">
          <strong>2024 Featured Speakers</strong>
        </h1>
        <hr />
      </div>
      <div className="row page-row no-stretch spkr-row">
        <div className="col-12 col-lg-8 spk_col">
          <StaticQuery
            query={SPEAKERS_QUERY}
            render={({ allMarkdownRemark: { nodes: posts } }) => {
              return (
                <div className="speakers-grid">
                  {posts.map(post => (
                    <div
                      key={post.frontmatter.slug}
                      className="home-speaker-card"
                    >
                      <GatsbyImage
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        alt={post.frontmatter.title}
                        className="home-speaker-img"
                        loading="lazy"
                        imgStyle={{ objectFit: "contain" }}
                        width={100} // Adjust width as needed
                        height={100} // Adjust height as needed
                      />

                      <div className="home-speaker-bio">
                        <div className="speaker-bio-inner">
                          <p>
                            <strong>{post.frontmatter.title}</strong>
                          </p>
                          {parse(post.html)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }}
          />
          {/*<Link to="/speakers/" className="btn green-button" id="speakers-btn">
            See the Full Lineup
          </Link>*/}
        </div>
      </div>
    </>
  )
}

export default SectionSpeakers
