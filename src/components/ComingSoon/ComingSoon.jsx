import { ComingSoonStyle } from "./ComingSoon.style"
import ComingLG from "../../assets/coming-soon/coming-soon.svg"
import ComingMD from "../../assets/coming-soon/coming-soon-md.svg"
import ComingSM from "../../assets/coming-soon/coming-soon-sm.svg"
import ComingXS from "../../assets/coming-soon/coming-soon-xs.svg"
import Logo from "../../assets/logo.svg"
import { Icon } from "../UIKit/Icons/Icon"

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      <header>
        <div className="logo">
          <img src={Logo} alt="Racing Social Club" />
        </div>
      </header>
      <section>
        <picture>
          <source
            srcSet={ComingXS}
            media="(max-width: 576px) and (min-width: 360px)"
          />
          <source
            srcSet={ComingSM}
            media="(max-width: 991px) and (min-width: 576px)"
          />
          <source
            srcSet={ComingMD}
            media="(max-width: 1199px) and (min-width: 992px)"
          />
          <source srcSet={ComingLG} media="(min-width:1200px)" />
          <img src={ComingLG} alt="Coming Soon" />
        </picture>
        {/*<img src={ComingImg} alt="Coming Soon"/>*/}
      </section>
      <footer>
        <ul>
          <li>
            <a
              href="https://discord.com/invite/racingsocialclubnft"
              target="_blank"
            >
              <Icon name="discord" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/racingsocial_nft"
              target="_blank"
            >
              <Icon name="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/racingsocialnft" target="_blank">
              <Icon name="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </ComingSoonStyle>
  )
}

export default ComingSoon
