import * as React from "react"
import parse from "html-react-parser"
import SpeakerCredit from "./speaker-credit"
import { IconContext } from "react-icons"
import { FaTicketAlt } from "react-icons/fa"

function ScheduleAccordion({
  startTime,
  endTime,
  day,
  fullspkr,
  location,
  title,
  slug,
  paid,
  speakers,
  html,
}) {
  let startInitials = "AM"
  const startHourMath = startTime / 60
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

  let endInitials = "AM"
  const endHourMath = endTime / 60
  const endHour = Math.floor(endHourMath)
  let endMinutes = (endHourMath - endHour) * 60
  if (endMinutes === 0) {
    endMinutes = "00"
  }
  let endHourFinal = endHour
  if (endHour > 12) {
    endHourFinal = endHour - 12
    endInitials = "PM"
  }
  if (endHour === 12) {
    endHourFinal = endHour
    endInitials = "PM"
  }

  return (
    <>
      <div id={slug} className="schedule-anchor"></div>
      {html ? (
        <IconContext.Provider value={{ className: "fa-ticket-alt" }}>
          <div className="card">
            <div className="card-header" id={slug + "heading"}>
              <p className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + slug + "collapse"}
                  aria-expanded="false"
                  aria-controls={slug + "collapse"}
                >
                  {startHourFinal}:{startMinutes} {startInitials}
                  {endTime &&
                    "–" +
                      endHourFinal +
                      ":" +
                      endMinutes +
                      " " +
                      endInitials}{" "}
                  | {title} <br /> {fullspkr}
                  <br />
                  {paid && <FaTicketAlt />}
                </button>
              </p>
            </div>
            <div
              id={slug + "collapse"}
              className="collapse"
              aria-labelledby={slug + "heading"}
              data-parent={"#accordion" + day}
            >
              <div className="card-body">
                {parse(html)}

                {paid && (
                  <div className="alert alert-success" role="alert">
                    <p>
                      <FaTicketAlt /> This optional event requires a special
                      ticket. Be sure to choose it when registering if
                      interested.
                    </p>
                  </div>
                )}
                <hr />
                <p className="mt-3" style={{ textAlign: "center" }}>
                  <em>Event Location</em>
                  <p>{location}</p>
                </p>

                <p className="mt-3" style={{ textAlign: "center" }}>
                  <em>Presented by</em>
                </p>
                <SpeakerCredit speakers={speakers} />
              </div>
            </div>
          </div>
        </IconContext.Provider>
      ) : (
        <div className="no-desc card">
          <div className="card-header" id={slug + "heading"}>
            <p className="mb-0">
              <span className="active-event" style={{ display: "none" }}></span>
              {startHourFinal}:{startMinutes} {startInitials}
              {endTime &&
                "–" + endHourFinal + ":" + endMinutes + " " + endInitials}{" "}
              | {title}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default ScheduleAccordion
