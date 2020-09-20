import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Materials.Business Newsletter is an initiave from <span className="icon -love"><RiHeart2Line/></span> <Link to="https://scalista.com" target="_blank">Scalista GmbH</Link> in Collaboration with <Link to="https://arroyave.co" target="_blank">Ph.D. Carlos Arroyave</Link><span className="icon -love"><RiHeart2Line/></span> <Link to="https://arroyave.co" target="_blank">arroyave.co</Link></p>
    </div>
  </footer>
)

export default Footer