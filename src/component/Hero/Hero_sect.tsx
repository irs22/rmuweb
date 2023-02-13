// styles
import './hero.scss'

// img
import Me from '../../assets/img/rmu__logo.jpg'

// component
import Socials from '../Public/Socials'
import Shapes from '../Public/Shapes'


function Hero_sect() {

  return (
    <section className="hero container" id="hero">

      <div className="intro">
        <div className="img__wrapper">
        <img src={Me} alt="Radapasa media unit" className="hero__img" />
        </div>
        <h1 className="hero__name">Radapasa media unit</h1>
        <span> 	&lt; Media unit of RCC /	&gt; </span>

        <Socials />

        <a href="#contact" className="btn">Join with US</a>


        <p className="scrollDown">
          <a href="#about" className="wrapper">
            <span className="name">Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </p>

      </div>


      <Shapes />

    </section>
  )
}

export default Hero_sect