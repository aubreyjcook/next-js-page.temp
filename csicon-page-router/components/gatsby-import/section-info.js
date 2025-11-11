import * as React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import HotelLogo from "../images/Hotel.png"
import Button from "react-bootstrap/Button"

const SectionInfo = props => {
  return (
    <>
      <div id="info" className="home-header">
        <h1>
          <strong id="info-header">Info</strong>
        </h1>
        <hr />
      </div>
      <div className="row page-row no-stretch">
        <div className="col-12 col-lg-7" id="info-col">
          <>
            <div className="row clearfix">
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Hotel.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-7 info-block">
                <h4>Hotel Information</h4>
                <p>
                  Discounted rooms are available at the Horseshoe Las Vegas.
                  Links are located below to complete your reservation. We
                  recommend booking early as our conference rooms sell out
                  quickly.
                </p>
                <p>
                  We have oversold our room block at the Horseshoe. We have been
                  able to secure some additional rooms at the nearby Harrah's
                  resort. You can use this link to book at Harrah's, or at the
                  Horseshoe (at their current daily rate){" "}
                </p>
                <a
                  href="https://book.passkey.com/go/SHCFI4"
                  class="btn green-button"
                >
                  Book Your Stay Now!
                </a>
                <Link to="/hotel/" class="btn green-button">
                  More Hotel Information
                </Link>

                <h5>Accessibility</h5>
                <p>
                  The Center for Inquiry values full participation at all its
                  events, including participation from individuals with
                  disabilities. Requests for reasonable accommodation may be
                  made by contacting Barry Karr at (716) 636-4869 ext. 217
                  or&nbsp;
                  <a href="mailto:bkarr@centerforinquiry.org">
                    bkarr@centerforinquiry.org
                  </a>
                  .
                </p>
                <h5>Policies</h5>
                <p>
                  Policy on Hostile Conduct / Harassment at Conferences:{" "}
                  <a
                    href="https://skepticalinquirer.org/harassment-policy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Harassment Policy
                  </a>
                </p>
              </div>
            </div>
          </>
          <>
            <div className="row clearfix">
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Info.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-7 info-block">
                <div id="volunteer"></div>
                <h4>LiliCon</h4>
                <p>
                  LiliCon is a half day of short presentations on the topic of
                  how to best teach critical thinking as it relates to rational
                  skepticism by university scholars and instructors. Come learn
                  what we know about best practices that allow students to learn
                  the difference between science and pseudoscience, and how we
                  use evidence to inform and improve our textbooks and teaching
                  strategies.
                </p>
                <Link to="/lilicon/" class="btn green-button-outline">
                  Learn More
                </Link>
              </div>
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Info.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </>
          <>
            <div className="row clearfix">
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/papers.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-7 info-block">
                <div id="call-papers"></div>
                <h4>Call for Papers</h4>
                <p>
                  The Committee for Skeptical Inquiry is delighted to announce
                  our annual Call for Papers. Selected applicants will have the
                  opportunity to give a talk at the Sunday Morning Papers
                  session of CSICon 2024.
                </p>
                <p>
                  The tradition of the Papers session recognizes new voices and
                  new ideas, and showcases them on the CSICon stage. If you have
                  had success in communicating scientific skepticism, combating
                  pseudoscience, or furthering the mission of CSI in a
                  significant way, we encourage you to submit a proposal.
                </p>
                <p>
                  Appropriate topics are those which support the mission of the
                  Committee for Skeptical Inquiry, and which reflect the type of
                  material typically published in <em>Skeptical Inquirer</em>.
                </p>
                <a
                  href="https://docs.google.com/document/d/19DIBwU2q-4lDz0OqSJC9a4TmZ-b_IDSOiKwHtXR0CPQ/edit?usp=sharing"
                  class="btn green-button-outline"
                >
                  Submit a Paper
                </a>
              </div>
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/papers.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </>
          <>
            <div className="row clearfix">
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Info.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-7 info-block">
                <div id="volunteer"></div>
                <h4>Volunteer Information</h4>
                <p>
                  CSICon Las Vegas needs your help! We are seeking a number of
                  volunteers to help support the event, whether with speaker
                  support, registration, event management, PR, merchandising,
                  outreach, tabling, or other opportunities.
                </p>
                <Link to="/volunteer/" class="btn green-button-outline">
                  Volunteer Instructions
                </Link>
              </div>
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Info.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </>
          <>
            <div className="row clearfix">
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/warning-icon.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-7 info-block">
                <div id="csicon-scholarship"></div>
                <h4>Apply for the CSICon Scholarship</h4>
                <a
                  class="btn green-button-outline"
                  href="https://skepticalinquirer.org/csicon-scholarship-contest/"
                >
                  Students! Apply Today!
                </a>
              </div>
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/warning-icon.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </>

          {/*<>
            <div className="row clearfix">
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Artboard-53.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-8 info-block">
                <div id="help-studnets"></div>
                <h4>Send Students to CSICon 2022</h4>
                <p>
                  Help bring local high school students to CSICon! Your donation
                  goes directly toward student registrations for a field trip
                  for a lucky high school in Las Vegas. Donors to this great
                  cause do not need to attend CSICon themselves.
                </p>
                <a
                  href="https://skepticalinquirer.org/send-students-to-csicon-2022/"
                  class="btn green-button"
                >
                  Help Students
                </a>
              </div>
              <div className="col-12 col-md-2 col-lg-4 info-icon">
                <div>
                  <StaticImage
                    src="../images/Artboard-53.png"
                    objectFit="scale-down"
                    loading="lazy"
                  />
                </div>
              </div>
              
            </div>
          </>*/}
        </div>
      </div>
    </>
  )
}

export default SectionInfo
