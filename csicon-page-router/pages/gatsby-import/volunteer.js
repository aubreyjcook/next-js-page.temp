import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VolunteerPage = () => (
  <Layout>
    <Seo title="CSICon Volunteer Help" />
    <div className="row page-row">
      <div className="col-12 col-lg-8">
        <div className="page-header">
          <hr />
          <h1>
            <strong>Volunteer</strong>
          </h1>
        </div>

        <div className="entry-content conference-max mt-3">
          <p>
            We are seeking several volunteers to help support the event, whether
            with setup, registration, admission, queuing assistance, tear down,
            or other opportunities. By volunteering, you help keep the price of
            CSICon down for everyone. As a small nonprofit organization, CSI
            greatly appreciates the generous support of its many volunteers.
            Unfortunately, we cannot fund any part of your travel, lodging, or
            conference registration.
          </p>
          <p>
            Thank you for helping make CSICon Las Vegas a success and for
            supporting CSI's important work!
          </p>
          <hr />
          <h3>Sign-up Instructions</h3>
          <p>
            Please email:&nbsp;
            <a
              href="mailto:volunteering@csiconference.org?subject=CSICon Volunteer Sign-up&amp;body=First Name: %0D%0ALast Name: %0D%0AOrganization: %0D%0AEmail: %0D%0APhone Number: %0D%0A%0D%0APlease let us know your availability around CSICon, your arrival and departure dates/times, and how many hours you are willing to volunteer. Feel free to mention if there is anything else you would like us to know or if there is something you are particularly good at and would like to provide assistance with for the conference. Comments and questions are welcome."
              target="_blank"
              rel="noopener"
            >
              volunteering@csiconference.org
            </a>
            .
          </p>
          <p>
            In your message, include the following:&nbsp;
            <strong>
              First Name, Last Name, Organization, Email, Phone Number.
            </strong>
          </p>
          <p>
            Volunteers help for about four hours each. This time is before or
            after sessions, or during breaks, and never during something you
            paid for. Volunteers don't miss a second of the program. Please let
            us know your availability around CSICon, your arrival and departure
            dates/times, and any optional workshops or lunches you registered
            for. Feel free to mention if there is anything else you would like
            us to know or if there is something you are particularly good at and
            would like to provide assistance with for the conference. Comments
            and questions are welcome.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default VolunteerPage
