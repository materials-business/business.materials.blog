import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Materials.Business Newsletter is an initiave from <span className="icon -love"><RiHeart2Line/></span> <Link to="https://scalista.com" target="_blank">Scalista GmbH</Link> in Collaboration with <Link to="https://arroyave.co" target="_blank">Ph.D. Carlos Arroyave</Link><span className="icon -love"><RiHeart2Line/></span> <Link to="https://arroyave.co" target="_blank">arroyave.co</Link></p>
    </div>
    <a href="https://www.producthunt.com/posts/materials-business-newsletter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-materials-business-newsletter" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=272698&theme=dark" alt="Materials Business Newsletter - All About Asset Integrity & Corrosion Materials Business | Product Hunt"  /></a>
  </footer>
)

export default Footer