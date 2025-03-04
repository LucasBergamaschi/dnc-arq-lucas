import { useContext } from 'react'
import { Link } from 'react-router-dom'

//ASSETS

import './Footer.css'
import Brazillog from '../../assets/brazil.svg'
import Logo from '../../assets/dnc-logo 2.svg'
import Usalog from '../../assets/usa.svg'
import Facebooklog from '../../assets/facebook-icon.svg'
import Instagramlog from '../../assets/instagram-icon.svg'
import Linkedinlog from '../../assets/linkedin-icon.svg'
import Twiterlog from '../../assets/twiter-icon.svg'


//COMPONENTS
import Button from '../Button/Button'

//CONTEXT   
import { AppContext } from '../../Contexts/appContext'





function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
              <div className="d-flex jc-space-between mobile-fd-column">
                <div className="footer-logo-col">
                    <img src={Logo} className="footer-logo"/>
                    <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                    <div className="d-flex social-links">
                        <a href="https://google.com" target="_blank">
                            <img src={Facebooklog} />
                        </a>
                        <a href="https://google.com" target="_blank">
                            <img src={Instagramlog} />
                        </a>
                        <a href="https://google.com" target="_blank">
                            <img src={Linkedinlog} />
                        </a>
                        <a href="https://google.com" target="_blank">
                            <img src={Twiterlog} />
                        </a>
                    </div>
                </div>
                <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul >
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
              </div>
              <div className="d-flex jc-space-between footer-copy">
                <p className="grey-1-color">Copyright © DNC - 2024</p>
                <div className="langs-area d-flex">
                    <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                        <img src={Brazillog}/>  
                    </Button>
                    <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                        <img src={Usalog}/>
                    </Button>
                </div>
              </div>
            </div>
        </footer>
    )
}

export default Footer