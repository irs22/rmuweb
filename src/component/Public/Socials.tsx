import { RiDribbbleLine} from 'react-icons/ri'
import { RiRedditLine} from 'react-icons/ri'
import { SiTelegram} from 'react-icons/si'
import { FaBehanceSquare} from 'react-icons/fa'
import { FaFacebookSquare} from 'react-icons/fa'
import { RxTwitterLogo} from 'react-icons/rx'


function Socials() {
    return (
        <div className="socials grid__child">

            <a href="" className="social__link" target="_blank"><FaFacebookSquare className="icon" /></a>
            <a href="" className="social__link" target="_blank"><RiDribbbleLine className="icon" /></a>
            <a href="" className="social__link" target="_blank"><RiRedditLine className="icon" /></a>
            <a href="" className="social__link" target="_blank"><RxTwitterLogo className="icon" /></a>
            <a href="" className="social__link" target="_blank"><SiTelegram className="icon" /></a>

        </div>
    )
}

export default Socials