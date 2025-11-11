import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HotelPage = () => (
  <Layout>
    <Seo title="CSICon Hotel Information" />
    <div class="row page-row">
      <div class="col-12 col-lg-8">
        <div class="page-header">
          <h1>
            <strong>Hotel Information</strong>
          </h1>
          <hr />
        </div>
        <StaticImage
          src="../images/horseshoe-lv.jpg"
          alt=""
          height="100%"
          loading="lazy"
          placeholder="tracedSVG"
        />
        <div class="entry-content conference-max mt-3">
          <p>
            Book your stay for CSICon today. October 22nd, 2024 - October 27th,
            2024 at the Horseshoe Las Vegas, 3645 Las Vegas Blvd., South Las
            Vegas, NV 89109, US.
          </p>
          <p>
            Discounted rooms are available at the Horseshoe Las Vegas. Links are
            located below to complete your reservation. We recommend booking
            early as our conference rooms have sold out in the past.
          </p>
          <p>
            We have oversold our room block at the Horseshoe. We have been able
            to secure some additional rooms at the nearby Harrah's resort. You
            can use this link to book at Harrah's, or at the Horseshoe (at their
            current daily rate){" "}
          </p>
          <a
            href="https://book.passkey.com/go/SHCFI4"
            class="btn green-button-outline"
          >
            Book Your Stay Now!
          </a>
          <p>
            The hotel does not have a shuttle from the airport. Taxis are
            available 24 hours a day, and, there are several difference shuttle
            companies to choose from:
          </p>

          <ul>
            <li>
              <a href="https://www.vegas4locals.com/resources/las-vegas-airport-shuttles/">
                https://www.vegas4locals.com/resources/las-vegas-airport-shuttles/
              </a>
            </li>
            <li>
              Supershuttle: Phone - 1-800-258-3826 / Web:{" "}
              <a href="https://www.supershuttle.com/locations/lasvegas-las/">
                https://www.supershuttle.com/locations/lasvegas-las/
              </a>
            </li>
            <li>
              Harry Reid (formerly McCarron) Airport:{" "}
              <a href="https://www.harryreidairport.com/Transportation">
                https://www.harryreidairport.com/Transportation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default HotelPage
