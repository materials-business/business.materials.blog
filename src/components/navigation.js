import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/newsletter",
    title: "Newsletter"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMenu: false}

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({      
      showMenu: !state.showMenu    
    }))
  }

  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => 
      <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    )
    return (
      <>
      <a href="https://www.producthunt.com/posts/materials-business-newsletter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-materials-business-newsletter" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=272698&theme=dark" alt="Materials Business Newsletter - All About Asset Integrity & Corrosion Materials Business | Product Hunt"  /></a>
        <nav className="site-navigation">
          <button onClick={this.handleToggleClick} className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
            <div className="icon-menu-line"><RiMenu3Line/></div>
            <div className="icon-menu-close"><RiCloseLine/></div>
          </button>
          <ul>
            {listMenuItems}
          </ul>
        </nav>
      </>
    )
  }
}

export default Navigation
