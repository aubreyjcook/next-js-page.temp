import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GatsbyImage } from "gatsby-plugin-image"

function SpeakerCredit({ speakers }) {
  const SPEAKER_CREDIT = graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "speaker" } } }
        sort: { fields: frontmatter___slug, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  height: 230
                  width: 230
                  quality: 70
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER, fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  `
  return (
    <>
      <StaticQuery
        query={SPEAKER_CREDIT}
        render={({ allMarkdownRemark: { nodes: allSpeakers } }) => {
          return allSpeakers.map(speaker => (
            <>
              {speakers.includes(speaker.frontmatter.slug) && (
                <>
                  <div className="presenter mt-3">
                    <AnchorLink to={"/speakers#" + speaker.frontmatter.slug}>
                      <GatsbyImage
                        image={
                          speaker.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        alt={speaker.frontmatter.title}
                        className="mr-3"
                        loading="lazy"
                      />
                    </AnchorLink>
                    <div className="presenter-info">
                      <AnchorLink to={"/speakers#" + speaker.frontmatter.slug}>
                        <h5>{speaker.frontmatter.title}</h5>
                      </AnchorLink>
                    </div>
                  </div>
                </>
              )}
            </>
          ))
        }}
      />
    </>
  )
}

export default SpeakerCredit
