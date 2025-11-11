import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EventAppearances from "../components/event-appearances"
import { GatsbyImage } from "gatsby-plugin-image"

const PageTemplate = ({ data }) => {
  const speakers = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Seo title="CSICon Speakers & Guests" />
      <div className="row page-row">
        <div className="col-12 col-lg-8">
          <div className="page-header">
            <h1>
              <strong>Speakers</strong>
            </h1>
            <hr />
          </div>
          {speakers.map(speaker => (
            <div id={speaker.frontmatter.slug} className="row speaker-row">
              <GatsbyImage
                image={
                  speaker.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                }
                alt={speaker.frontmatter.title}
                className="speaker-img"
                loading="lazy"
              />
              <div className="col-12 col-md-7 speaker-bio">
                <p>
                  <strong>{speaker.frontmatter.title}</strong>
                </p>
                {parse(speaker.html)}
              </div>
              {console.log(speaker.frontmatter.events)}
              <EventAppearances events={speaker.frontmatter.events} />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const speakerQuery = graphql`
  query AllSpeakers {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "speaker" } } }
      sort: { fields: frontmatter___slug, order: ASC }
    ) {
      nodes {
        html
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                height: 400
                width: 400
                quality: 70
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
          events
          slug
        }
      }
    }
  }
`
