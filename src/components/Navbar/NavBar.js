import { useState } from "react"
import { NavBarStyle } from "./NavBar.style"
import { theme } from "../../styles/theme"
import Logo from "../../assets/logo.svg"
import LogoIcon from "../../assets/logo-icon.svg"
import { Button, Icon } from "../UIKit"
import { useLockedBody } from "../../hooks/useLockedBody"
import { navList } from "./config"
import Progress from "./Progress/Progress"

const NavBar = ({ onLinkClick, progress, touchDevice }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [, setLocked] = useLockedBody()

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened)
    setLocked(false)
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }

  return (
    <NavBarStyle className={drawerOpened ? "open" : ""}>
      <div className="navbar-content">
        <div className="logo-wrapper">
          <div className="logo" onClick={() => handleMenuLinkClick("#about")}>
            <picture>
              <source media="(max-width: 991px)" srcSet={LogoIcon} />
              <img src={Logo} alt="Racing Social Club" />
            </picture>
          </div>
        </div>

        <nav className="header-nav">
          <div className="header-nav-inner">
            <ul className="header-nav-list">
              {navList.map(({ to, title }) => {
                return (
                  <li key={to} onClick={() => handleMenuLinkClick(to)}>
                    {title}
                  </li>
                )
              })}
            </ul>
            <div className="social-mobile">
              <ul className="social">
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/racingsocial_nft/"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <Icon name="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/racingsocialnft"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <Icon name="twitter" />
                  </a>
                </li>
                <li>
                  <Button
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.com/invite/racingsocialclubnft"
                    className="discord social-btn"
                  >
                    DISCORD
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="progress-wrapper">
          {!touchDevice && <Progress filled={progress} />}
        </div>
        <ul className="social social-desktop">
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/racingsocial_nft/"
              rel="noreferrer"
              className="social-btn"
            >
              <Icon name="instagram" size={32} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/racingsocialnft"
              rel="noreferrer"
              className="social-btn"
            >
              <Icon name="twitter" size={32} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              href="https://discord.com/invite/racingsocialclubnft"
            >
              <Icon name="discord" size={32} />
              <span>JOIN OUR DISCORD</span>
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          type="button"
          onClick={handleDrawerToggle}
          // onClick={() => {}}
        >
          <Icon
            name={drawerOpened ? "close" : "menu"}
            size={32}
            color={theme.colors.white}
          />
        </button>
      </div>
    </NavBarStyle>
  )
}

export default NavBar
