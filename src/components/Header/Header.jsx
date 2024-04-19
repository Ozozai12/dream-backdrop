import { Link } from 'react-router-dom'

import { FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons'

import css from './Header.module.css'

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Link to='/'>
          <span className={css.logo}>Fotofon.Dream</span>
        </Link>
        <a href="https://www.instagram.com/fotofon.dream/"
          target="_blank"
          rel="noopener noreferrer nofollow">
          <IconContext.Provider value={{ className: css.instagram }}>
            <FaInstagram />
          </IconContext.Provider>
        </a>
      </header>
    </>
  )
}
