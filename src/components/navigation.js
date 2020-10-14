import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Kontakt</Link>
    <Link to="/contact">Mein Linktree</Link>
    <ThemeChanger/>
  </nav>
  
)