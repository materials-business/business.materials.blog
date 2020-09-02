import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Materials Business is an initiave from Scalista GmbH<span className="icon -love"><RiHeart2Line/></span> by <Link to="/">scalista.com</Link> in Collaboration with P.h.D Carlos Enrique Arroyave Posada<span className="icon -love"><RiHeart2Line/></span><Link to="/">arroyave.co</Link></p>
    </div>
  </footer>
)

export default Footer