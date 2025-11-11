import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionSpeakers from "../components/section-speakers"
import SectionSchedule from "../components/section-schedule"
import SectionUpdates from "../components/section-updates"
import SectionInfo from "../components/section-info"
import SplashVideo from "../assets/CSICon 2022 Promo Vid-3.mp4"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import InfoBlock from "../components/info-block"

const IndexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "CSIConference",
    description:
      "CSICon is the premiere conference in the US for science and skepticism. Don't miss out. Register today.",
    image:
      "https://cdn.centerforinquiry.org/wp-content/uploads/sites/29/2024/04/10121848/CSICon2024_Banner_v1.png",
    startDate: "2024-10-24",
    endDate: "2024-10-27",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Horseshoe Las Vegas",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89101",
        addressCountry: "US",
      },
    },
    breadcrumb: {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Registration",
          item: "https://csiconference.org/registration/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hotel Information",
          item: "https://csiconference.org/hotel/",
        },
      ],
    },
  }

  return (
    <div className="page-template-home-page">
      <Layout>
        <Seo title="CSICon Homepage" schemaMarkup={schema} />
        <div className="csicon-slider ">
          <Carousel fade>
          <Carousel.Item>
              <StaticImage
                src="../assets/csicon26-savedate-web-banner.jpg"
                className="d-block w-100"
                objectFit="cover"
                loading="eager"
                placeholder="blurred"
                alt="Brian Cox attending csicon"
                transformOptions="cropFocus: attention"
              />
            </Carousel.Item>
            {/*<Carousel.Item>
              <Link to="/registration">
                <StaticImage
                  src="../assets/slider-spacebg.png"
                  className="d-block w-100"
                  objectFit="cover"
                  loading="eager"
                  placeholder="blurred"
                  alt="csicon register"
                  transformOptions="cropFocus: attention"
                />
                <div className="carousel-item-text">
                  <h2 class="brightest-stars">SEE THE BRIGHTEST STARS OF</h2>
                  <h2 class="brightest-stars">REASON & SCIENCE SHINE</h2>

                  <h3 class="brightest-stars">OCTOBER 24—27, 2024</h3>
                  <h3 class="brightest-stars">HORSESHOE LAS VEGAS</h3>
                </div>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../assets/slider/cox-slide1.png"
                className="d-block w-100"
                objectFit="cover"
                loading="eager"
                placeholder="blurred"
                alt="Brian Cox attending csicon"
                transformOptions="cropFocus: attention"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../assets/slider/tyson-slide1.png"
                className="d-block w-100"
                objectFit="cover"
                loading="eager"
                placeholder="blurred"
                alt="Tyson attending csicon"
                transformOptions="cropFocus: attention"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../assets/slider/sgu-slide1.png"
                className="d-block w-100"
                objectFit="cover"
                loading="eager"
                placeholder="blurred"
                alt="sgu attending csicon"
                transformOptions="cropFocus: attention"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/hotel">
                <StaticImage
                  src="../images/slider/Web Slider_Template_RoomRates.png"
                  className="d-block w-100"
                  objectFit="cover"
                  loading="eager"
                  placeholder="blurred"
                  alt="csicon speaker lineup"
                  transformOptions="cropFocus: attention"
                />
                <div className="carousel-item-text">
                  <h2 class="brightest-stars">ENJOY SPECIAL EVENT</h2>
                  <h2 class="brightest-stars">ROOM RATES</h2>
                  <h3 class="brightest-stars">WHEN YOU BOOK TODAY</h3>
                </div>
              </Link>
            </Carousel.Item>
            */}
          </Carousel>
        </div>

        <SectionSpeakers />
        {/*removing info block to clean up the layout. add back maybe somehwere cleaner when we have info<InfoBlock />*/}
        <SectionSchedule />
        {/*Removing info section so there is no 2024 info on the live site />*/}
      </Layout>
    </div>
  )
}

export default IndexPage
