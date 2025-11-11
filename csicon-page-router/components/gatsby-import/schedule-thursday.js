import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import ScheduleAccordion from "./schedule-accordion"

const SCHEDULE_QUERY_THURSDAY = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "event" }, day: { eq: "Thursday" } }
      }
      sort: { fields: frontmatter___startTime, order: ASC }
    ) {
      nodes {
        html
        frontmatter {
          title
          location
          fullspkr
          paid
          slug
          day
          speakers
          startTime
          endTime
        }
      }
    }
  }
`

const ScheduleThursday = props => {
  return (
    <>
      <div id="accordionThursday" className="accordion">
        <div className="card no-desc">
          <div className="card-header" id="heading-thursday">
            <p className="mb-0">
              <strong>Thursday, October 24</strong>
            </p>
          </div>
        </div>
        <StaticQuery
          query={SCHEDULE_QUERY_THURSDAY}
          render={({ allMarkdownRemark: { nodes: posts } }) => {
            return posts.map(post => (
              <>
                <ScheduleAccordion
                  title={post.frontmatter.title}
                  location={post.frontmatter.location}
                  fullspkr={post.frontmatter.fullspkr}
                  paid={post.frontmatter.paid}
                  slug={post.frontmatter.slug}
                  day={post.frontmatter.day}
                  speakers={post.frontmatter.speakers}
                  startTime={post.frontmatter.startTime}
                  endTime={post.frontmatter.endTime}
                  html={post.html}
                />
              </>
            ))
          }}
        />
      </div>
    </>
  )
}

export default ScheduleThursday
