import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {FaSave} from 'react-icons/fa'

import {
  SideBarContainer,
  OptionContainer,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsLinks,
  FacebookIcon,
  ContactUsText,
  OptionItem,
  OptionButton,
} from './styledComponents'
import './index.css'
const SideBar = () => {
  return (
    <SideBarContainer>
      <OptionContainer>
        <OptionItem>
          <Link to="/">
            <OptionButton>
              <AiFillHome className="options-icon" />
              Home
            </OptionButton>
          </Link>
          <Link to="/trending">
            <OptionItem>
              <OptionButton>
                <ImFire className="options-icon" />
                Trending
              </OptionButton>
            </OptionItem>
          </Link>
        </OptionItem>

        <OptionItem>
          <Link to="/gaming">
            <OptionButton>
              <SiYoutubegaming className="options-icon" />
              Gaming
            </OptionButton>
          </Link>
        </OptionItem>

        <OptionItem>
          <Link to="/saved-videos">
            <OptionButton>
              <FaSave className="options-icon" />
              Saved Videos
            </OptionButton>
          </Link>
        </OptionItem>
      </OptionContainer>
      <ContactUsContainer>
        <ContactUsHeading>CONTACT US</ContactUsHeading>
        <ContactUsLinks>
          <FacebookIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <FacebookIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <FacebookIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactUsLinks>
        <ContactUsText>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsText>
      </ContactUsContainer>
    </SideBarContainer>
  )
}

export default SideBar
