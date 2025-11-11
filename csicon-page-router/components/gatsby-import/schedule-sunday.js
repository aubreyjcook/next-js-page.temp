import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import ScheduleAccordion from "./schedule-accordion"

const SCHEDULE_QUERY_SUNDAY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "event" }, day: { eq: "Sunday" } } }
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

const ScheduleSunday = props => {
  return (
    <>
      <div id="accordionSunday" className="accordion">
        <div className="card no-desc">
          <div className="card-header" id="heading-sunday">
            <p className="mb-0">
              <strong>Sunday, October 27</strong>
            </p>
          </div>
        </div>
        <StaticQuery
          query={SCHEDULE_QUERY_SUNDAY}
          render={({ allMarkdownRemark: { nodes: posts } }) => {
            return posts.map(post => (
              <>
                <ScheduleAccordion
                  title={post.frontmatter.title}
                  location={post.frontmatter.location}
                  paid={post.frontmatter.paid}
                  fullspkr={post.frontmatter.fullspkr}
                  day={post.frontmatter.day}
                  slug={post.frontmatter.slug}
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

export default ScheduleSunday
