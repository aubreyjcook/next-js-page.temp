import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import downloadFile from "../assets/Horseshoe Las Vegas - Meeting Space.pdf"

const MapPage = () => (
  <Layout>
    <Seo title="CSICon Conference Map" />
    <div className="row page-row">
      <div className="col-12 col-lg-8">
        <div className="page-header">
          <h1>
            <strong>Conference Map</strong>
          </h1>
          <hr />
        </div>

        <div className="entry-content conference-max mt-3">
          <h2>Conference Floor 26</h2>
          <StaticImage
            src="../images/flo26.jpg"
            alt="CSICon Flamingo Map"
            height="100%"
            loading="lazy"
            placeholder="tracedSVG"
          />
          <h2>
            Use the conference map to help move around the conference floor.
          </h2>
          <p>
            {" "}
            <a href={downloadFile} download>
              Download the map
            </a>
            {` `}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default MapPage
