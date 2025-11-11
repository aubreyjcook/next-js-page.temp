import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import ScheduleThursday from "./schedule-thursday"
import ScheduleFriday from "./schedule-friday"
import ScheduleSaturday from "./schedule-saturday"
import ScheduleSunday from "./schedule-sunday"

const SectionSchedule = () => (
  <>
    <div id="schedule" className="home-header">
      <h1>
        <strong id="schedule-header">2024 CSICon Schedule</strong>
      </h1>
      <hr />
    </div>
    <div className="row">
      <div className="col-12 col-lg-6 mx-auto tt_row">
        <ScheduleThursday />
      </div>
      <div className="col-12 col-lg-6 mx-auto tt_row">
        <ScheduleFriday />
      </div>
      <div className="col-12 col-lg-6 mx-auto tt_row">
        <ScheduleSaturday />
      </div>
      <div className="col-12 col-lg-6 mx-auto tt_row">
        <ScheduleSunday />
      </div>
    </div>
  </>
)

export default SectionSchedule
