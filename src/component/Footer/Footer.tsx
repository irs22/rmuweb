import Socials from "../Public/Socials";
import Logo from '../../assets/img/rmu__logo.jpg'
import './footer.scss';
import { MdVerified } from 'react-icons/md'

function Footer() {
    return (
        <section className="footer" id="footer">

            <div className="grid footer__grid">

                <div className="company grid__child">
                    <div className="logo__wrapper">
                        <img src={Logo} alt="Radapasa Media Unit" />
                    </div>
                    <span className="name">Radapasa Meadia Unit</span>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quaerat?</p>
                </div>

                <div className="discover grid__child">
                    <span className="footer__title">discover</span>
                    <ul>
                        <li><a href="#" className="footer__link">Home</a></li>
                        <li><a href="#" className="footer__link">Blogs</a></li>
                        <li><a href="#" className="footer__link">About</a></li>
                        <li><a href="#" className="footer__link">join with us</a></li>
                        <li><a href="#" className="footer__link">Albums</a></li>
                    </ul>
                </div>

                <div className="about grid__child">
                    <span className="footer__title">Website Source Code</span>
                    <ul>
                        <li><a href="#" className="footer__link">Github</a></li>
                        <li><a href="#" className="footer__link">Gitlab</a></li>
                    </ul>
                </div>
                <div className="grid__child contact">
                    <span className="footer__title">Contact Us</span>
                    <ul>
                        <li className="footer__link">Tel : +94 000 000 000</li>
                        <li className="footer__link">Email : mail@rmuweb.com</li>
                        <li className="footer__link">Address : 'rmulive',rajapaksha central college,weeraketiya</li>
                    </ul>
                </div>

                <div className="footer__bottom">
                    <div className="rights grid__child">
                        <div>&copy;2023 ‧ <a href="/">Rmuweb <MdVerified /></a> ‧  All rights reserved.</div>
                    </div>

                    <Socials />
                </div>

            </div>




        </section>
    )
}

export default Footer