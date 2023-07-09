import { Link } from 'react-router-dom'
import React from 'react'
import styles from './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles?.navContainer}>
        <li className={styles?.slowlyBigger}>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/champions'>Champions</Link>
        </li>
        <li>
          <Link to='/synergies'>Synergies</Link>
        </li>
        <li>
          <Link to='/lore'>lore</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
