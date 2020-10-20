import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome.js';

export default (props) => (
  <nav className="navigation"> 
    <Link to="/about">
      <FontAwesomeIcon icon={['far', 'address-card']} className="contacticon"/>
    </Link>
    <Link to="/contact_new">
      <FontAwesomeIcon icon={['far', 'envelope']} className="contacticon"/>
    </Link>
    
    <ThemeChanger/>
  </nav>
  
)