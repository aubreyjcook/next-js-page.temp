import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PapersPage = () => (
  <Layout>
    <div class="row page-row">
      <div class="col-12 col-lg-8">
        <div class="page-header">
          <hr />
          <h1>
            <strong>LiliCon: Sign up today!</strong>
          </h1>
        </div>

        <div class="entry-content conference-max mt-3">
          <h3>What is Lilicon?</h3>
          <p>
            LiliCon is a half day of short presentations on the topic of how to
            best teach critical thinking as it relates to rational skepticism by
            university scholars and instructors. Come learn what we know about
            best practices that allow students to learn the difference between
            science and pseudoscience, and how we use evidence to inform and
            improve our textbooks and teaching strategies.
          </p>
          <p>
            If you are interested in learning more about teaching critical
            thinking, visit the main{" "}
            <Link to="/registration">CSICon Registration</Link> and be sure to
            add "Thursday - LilliCon" to your CSICon ticket.
          </p>
          <StaticImage
            src="../assets/lilicon_schedule.jpg"
            alt=""
            height="100%"
            loading="lazy"
            placeholder="tracedSVG"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default PapersPage
