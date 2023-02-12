import './sidebar.scss'
import Logo from '../../assets/img/logo.svg'
// icons
import { BiHomeCircle } from 'react-icons/bi'
import { BiVideoRecording } from 'react-icons/bi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs' //about
import { HiOutlineNewspaper } from 'react-icons/hi' // blog
import { RiCustomerService2Fill } from 'react-icons/ri'//contact
import { FiUserPlus } from 'react-icons/fi' //join

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
              <a href="#about" className="nav__link"><HiOutlineNewspaper className='icon' /></a>
              <span className="tooltip">Blogs</span>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link"><MdOutlinePermContactCalendar className='icon' /></a>
              <span className="tooltip">Albums</span>
            </li>
            <li className="nav__item">
              <a href="#remuse" className="nav__link"><BiVideoRecording className='icon' /></a>
              <span className="tooltip">Live Streams</span>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link"><FiUserPlus className='icon' /></a>
              <span className="tooltip">Join</span>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link"><RiCustomerService2Fill className='icon' /></a>
              <span className="tooltip">Contact</span>
            </li>
            <li className="nav__item">
              <a href="Contact" className="nav__link"><BsFillPeopleFill className='icon' /></a>
              <span className="tooltip">About</span>
            </li>


          </ul>

        </div>

      </nav>

    </aside>
  )
}

export default Sidebar