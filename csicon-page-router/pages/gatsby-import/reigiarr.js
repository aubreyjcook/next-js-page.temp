import React from "react"
import Layout from "../components/layout"
import EAHelmetSubcomp from "../components/EveryAction-helmet-subcomp"
import PrintButton from "../components/printbutton"

const RegistrationPage = () => {
  return (
    <Layout>
      <EAHelmetSubcomp
        title="CSICon: Register Today"
        description="Register for CSICon today!"
      />
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Register Now for the Premiere Skeptic Conference
        <hr />
      </h1>
      <div
        className="ngp-form"
        data-form-url="https://secure.everyaction.com/v1/Forms/ayV-bmHoM0WRWaRsBDalxQ2"
        data-custom-css="https://nvlupin.blob.core.windows.net/designs/CustomStylesheet_7e07e727d6bcb12caab1b0a2d750f45854d023241d316e4730abd9d702bfcb48.css"
        data-fastaction-endpoint="https://fastaction.ngpvan.com"
        data-inline-errors="true"
        data-fastaction-nologin="true"
        data-databag-endpoint="https://profile.ngpvan.com"
        data-databag="everybody"
        data-mobile-autofocus="false"
      ></div>

      <PrintButton />
    </Layout>
  )
}

export default RegistrationPage
