import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import ScheduleAccordion from "./schedule-accordion"

const SCHEDULE_QUERY_FRIDAY = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "event" }, day: { eq: "Saturday" } }
      }
      sort: { fields: frontmatter___startTime, order: ASC }
    ) {
      nodes {
        html
        frontmatter {
          title
          location
          paid
          fullspkr
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

const ScheduleFriday = props => {
  return (
    <>
      <div id="accordionFriday" className="accordion">
        <div className="card no-desc">
          <div className="card-header" id="heading-friday">
            <p className="mb-0">
              <strong>Saturday, October 26</strong>
            </p>
          </div>
        </div>
        <StaticQuery
          query={SCHEDULE_QUERY_FRIDAY}
          render={({ allMarkdownRemark: { nodes: posts } }) => {
            return posts.map(post => (
              <>
                <ScheduleAccordion
                  title={post.frontmatter.title}
                  location={post.frontmatter.location}
                  paid={post.frontmatter.paid}
                  fullspkr={post.frontmatter.fullspkr}
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

export default ScheduleFriday
