/**
 * @file
 */
import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Links = (props) => (
  <div className="Links" {...props}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/wowza">Wowza</Link></li>
    </ul>
  </div>
)

export default Links
