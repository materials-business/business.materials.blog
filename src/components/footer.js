import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Materials.Business Newsletter is an initiave from <span className="icon -love"><RiHeart2Line/></span> <Link to="https://www.infinitygrowth.ca" target="_blank">Infinity Growth Corporation</Link> <span className="icon -love"><RiHeart2Line/></span> </p>
    </div>
  </footer>
)

export default Footer
