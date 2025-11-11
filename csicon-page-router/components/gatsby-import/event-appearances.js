import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

function EventAppearances({ events }) {
  const EVENT_LISTING = graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "event" } } }
        sort: { fields: frontmatter___slug, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            slug
            startTime
            day
          }
        }
      }
    }
  `

  return (
    <>
      <StaticQuery
        query={EVENT_LISTING}
        render={({ allMarkdownRemark: { nodes: allEvents } }) => {
          return allEvents.map(event => {
            let startInitials = "AM"
            const startHourMath = event.frontmatter.startTime / 60
            const startHour = Math.floor(startHourMath)
            let startMinutes = (startHourMath - startHour) * 60
            if (startMinutes === 0) {
              startMinutes = "00"
            }
            let startHourFinal = startHour
            if (startHour > 12) {
              startHourFinal = startHour - 12
              startInitials = "PM"
            }
            if (startHour === 12) {
              startHourFinal = startHour
              startInitials = "PM"
            }
            return (
              <>
                {events.includes(event.frontmatter.slug) && (
                  <>
                    <div class="col-12 presenting-block">
                      <p>
                        <strong>{event.frontmatter.title}</strong> |{" "}
                        {event.frontmatter.day} {startHourFinal}:{startMinutes}{" "}
                        {startInitials}
                      </p>
                    </div>
                  </>
                )}
              </>
            )
          })
        }}
      />
    </>
  )
}

export default EventAppearances
