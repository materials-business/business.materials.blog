import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const ThankYou = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Success!</h1>
      <p>We are thrilled to have you on board for our weekly newsletter! </p>
      <p>You can also read the previous content here: <a href="https://news.materials.business/newsletter">https://news.materials.business/newsletter</a> </p>
      <p>We hope you enjoy the content and please feel free to reach out any time with any questions or feedback you might have to <a href="mailto:news@materials.business?subject=Contact or Feedback!&body=Please write your message here: ">news@materials.business</a></p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Read now all our content for free!</Link>
    </div>

  </Layout>
)

export default ThankYou