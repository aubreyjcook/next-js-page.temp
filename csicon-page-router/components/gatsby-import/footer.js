import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="content background">
    {/*<a
      className="mx-2 mt-lg-0 mt-lg-2"
      href="https://skepticalinquirer.org/csicon-2023-registration/"
    >
      <button className="btn green-button footer">Register</button>
    </a>
<hr /> */}
    <div className="row logo-row no-stretch">
      <a href="/#top">
        <StaticImage
          src="../images/CSICON-logo-mobile.png"
          alt="csicon logo"
          className="footer-logo"
          imgStyle={{ padding: "20px" }}
          objectFit="contain"
          placeholder="tracedSVG"
          width="250px"
          loading="lazy"
        />
      </a>
      <a href="https://skepticalinquirer.org">
        <StaticImage
          src="../images/SI-logo-tag-line.png"
          alt="logo"
          className="footer-logo"
          imgStyle={{ padding: "20px" }}
          objectFit="contain"
          placeholder="tracedSVG"
          width="250px"
          loading="lazy"
        />
      </a>
    </div>
  </footer>
)

export default Footer
