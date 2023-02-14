import Shapes from '../Public/Shapes'
import './contact.scss'
import Banner from '../../assets/img/contact-home.svg'

function Contact() {
    return (
        <section className="contact">

            <div className="grid contact__grid">
                <div className="img">
                    <img src={Banner} alt="" />
                </div>

                <form className="contact__form" target="_blank" action="https://formsubmit.co/your@email.com" method="POST">

                    <h1 className="sect__title">Contact US</h1>

                    <input type="text" placeholder='Your Name' name="name" id="" />
                    <input type="email" name="email" id="" placeholder='Your Email' />
                    <input type="text" name='message' placeholder='Your Message' />

                    <button className='btn' type="submit">Send</button>

                </form>

                <Shapes />
            </div>
        </section>
    )
}

export default Contact