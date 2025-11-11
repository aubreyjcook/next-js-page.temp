import * as React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <nav className="navbar navbar-expand-lg">
    <Link to="/#top" activeClassName="navbar-brand">
      {" "}
      <StaticImage
        id="logo"
        alt="csicon logo"
        className="d-none d-md-block"
        src="../images/CSICON-logo-standard.png"
        style={{ width: "255px" }}
        objectFit="contain"
        placeholder="tracedSVG"
        loading="eager"
      />
      <StaticImage
        id="logo"
        alt="csicon logo"
        className="d-md-none d-block"
        src="../images/CSICON-logo-mobile.png"
        width="65px"
        style={{ height: "50px" }}
        objectFit="contain"
        placeholder="tracedSVG"
        loading="eager"
      />
      <p class="date-text">June 11-14, 2026</p>
    </Link>
    <div
      id="menu-text"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      MENU
    </div>
    <div
      id="nav-icon3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-lg-auto">
        {/*<li className="btn white-button">
          <Link to="/registration/">Register Now!</Link>
        </li>*/}
        <li className="nav-item mx-auto x-lg-2">
          <AnchorLink to="/#schedule" title="Schedule"></AnchorLink>
        </li>
        <li className="nav-item mx-auto mx-lg-2">
          <AnchorLink to="/#info">Hotel Info</AnchorLink>
        </li>
        <li className="nav-item mx-auto mr-lg-2">
          <Link to="/conference-map/">Conference Map</Link>
        </li>
        <li className="nav-item mx-auto mr-lg-2">
          <Link to="/speakers/">Speakers</Link>
        </li>
        {/*<li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Other Info
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <AnchorLink
                to="/#csicon-scholarship"
                title="CSICon  Scholarship"
                className="dropdown-item"
              />
            </li>
            <li>
              <AnchorLink
                to="/#call-papers"
                title="Call for Papers"
                className="dropdown-item"
              />
            </li>
            <li>
              <AnchorLink
                to="/#volunteer"
                title="Volunteer Information"
                className="dropdown-item"
              />
            </li>
          </ul>
        </li>*/}
      </ul>
    </div>
  </nav>
)

export default Header
