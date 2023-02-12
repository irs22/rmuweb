import './sidebar.scss'
import Logo from '../../assets/img/logo.svg'
// icons
import { BiHomeCircle } from 'react-icons/bi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { TbLayersSubtract } from 'react-icons/tb'
import { FaRegStickyNote } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { TiInfoLargeOutline } from 'react-icons/ti'

function Sidebar() {
  return (
    <aside className="aside">

      <nav className="nav">

        <div className="nav__menu">

          <ul className="nav__list">

            <li className="nav__item">
              <a href="#hero" className="nav__link"><BiHomeCircle className='icon' /></a>
              <span className="tooltip">Home</span>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link"><TiInfoLargeOutline className='icon' /></a>
            <span className="tooltip">Blogs</span>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link"><MdOutlinePermContactCalendar className='icon' /></a>
              <span className="tooltip">Albums</span>
            </li>
            <li className="nav__item">
              <a href="#remuse" className="nav__link"><MdOutlinePermContactCalendar className='icon' /></a>
              <span className="tooltip">Live Streams</span>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link"><TbLayersSubtract className='icon' /></a>
              <span className="tooltip">Join</span>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link"><RiCustomerService2Fill className='icon' /></a>
              <span className="tooltip">Contact</span>
            </li>
            <li className="nav__item">
              <a href="Contact" className="nav__link"><RiCustomerService2Fill className='icon' /></a>
              <span className="tooltip">About</span>
            </li>


          </ul>

        </div>

      </nav>

    </aside>
  )
}

export default Sidebar