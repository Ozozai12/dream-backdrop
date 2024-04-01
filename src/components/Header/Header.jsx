import { RxHamburgerMenu } from 'react-icons/rx'
import { IconContext } from 'react-icons'

import css from './Header.module.css'

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <span className={css.logo}>Fotofon.Dream</span>
        <IconContext.Provider value={{ className: css.burger }}>
          <RxHamburgerMenu />
        </IconContext.Provider>
      </header>
    </>
  )
}
