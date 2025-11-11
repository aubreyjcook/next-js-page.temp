import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const InfoBlock = () => {
  return (
    <div className="main-info-container">
      <div className="space-info">
        <StaticImage
          src="../assets/STScI.png"
          alt="Web space bg"
          layout="fullWidth"
          placeholder="blurred"
          objectFit="cover"
          style={{ position: "absolute" }}
          className={"backgroundImage"}
        />
      </div>
      <div className="info-grid-container">
        <div className="info-grid-item">
          <div className=" info-grid-text">
            <h2>Where</h2>
            <StaticImage
              src="../images/Hotel.png"
              alt="Hotel Icon"
              width={100}
              height={100}
              placeholder="blurred"
              style={{ marginBottom: "20px" }}
            />
            <p>
              Find your rooms at the Horseshoe Las Vegas. Act fast because there
              are a limited number of rooms available!
            </p>
            <Link to="/hotel/" class="btn green-button">
              More Hotel Information
            </Link>
          </div>
        </div>
        <div className="info-grid-item">
          <div className=" info-grid-text">
            <h2>When</h2>
            <StaticImage
              src="../assets/Asset-2.png"
              alt="Hotel Icon"
              width={100}
              height={100}
              placeholder="blurred"
              style={{ marginBottom: "20px" }}
            />

            <p>CSICon 2024 is happening October 24-27, 2024.</p>
          </div>
        </div>
        <div className="info-grid-item">
          <h2>How</h2>
          <StaticImage
            src="../assets/Asset.png"
            alt="Hotel Icon"
            width={125}
            height={125}
            placeholder="blurred"
            style={{ marginBottom: "20px" }}
          />
          <p>
            Register for CSICon 2024 today. You won't want to miss this year's
            amazing guests and speakers!
          </p>
          <Link to="/registration/" class="btn green-button">
            Register Today
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock
