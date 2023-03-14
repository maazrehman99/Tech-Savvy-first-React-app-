import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.scss"

import { HashLink } from 'react-router-hash-link'

function Header() {
  return (
    <nav>
        <h1>TechSavvy</h1>
        <main>
         <HashLink to={"/#Home"}>Home</HashLink>
         <Link to={"/Contact"}>Contact</Link>
         <HashLink to={"/#About"}>About</HashLink>
         <HashLink to={"/#Brands"}>Brands</HashLink>
         <Link to={"/Services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header