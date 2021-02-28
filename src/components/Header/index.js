import './styles.scss'

import Logo from '../../assets/logo.png'

import { BsFillGearFill } from 'react-icons/bs'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { AiOutlinePoweroff } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-background">
        <li className="nav-items">
          <ul>
            <BsFillGearFill color="#fff" className="gear" />
          </ul>
          <ul>
            <hr />
          </ul>
          <ul>
            <TiArrowSortedDown color="#fff" className="arrow" />
            <TiArrowSortedUp color="#fff" className="arrow" />
          </ul>
          <ul className="logo-background">
            <div className="logo">
              <img src={Logo} alt={Logo} />
            </div>
          </ul>

          <div className="links" style={{ marginLeft: '8.5rem' }}>
            <h3>HEROES</h3>
          </div>
          <div className="links">
            <h3>STORE</h3>
          </div>
          <div className="links">
            <h3>WATCH</h3>
          </div>
          <div className="links">
            <h3>LEARN</h3>
          </div>
          <div className="links">
            <h3>ARCADE</h3>
          </div>
          <div className="exit-background">
            <div className="exit">
              <AiOutlinePoweroff
                style={{ fontWeight: 'bolder', fontSize: '17px' }}
              />
            </div>
          </div>
        </li>
      </div>
    </div>
  )
}

export default Header
