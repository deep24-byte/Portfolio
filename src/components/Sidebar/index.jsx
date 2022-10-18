import './index.scss'
// import { useState } from 'react'
import LogoS from '../../assets/images/logo-d.png'
import LogoSubtitle from '../../assets/images/logo-dd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
//   faSuitcase,
//   faBars,
//   faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'




const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo"/>
                <img className='sub-logo' src={LogoSubtitle} alt="slobodan"/>
            </Link>
            
            <nav>
                <NavLink exact="true" activeclassname="active"to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname='active' className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"/>
                </NavLink>
                
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/deep-jadhav-50b8a2189/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e">
                        </FontAwesomeIcon>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/deep24-byte">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e">
                        </FontAwesomeIcon>
                    </a>
                </li>     


                <li>
                    <a target="_blank" rel='noreferrer' href="https://join.skype.com/invite/y24cA2xahKRl">
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e">
                        </FontAwesomeIcon>
                    </a>
                </li>                
            </ul>
        </div>
    )
}

export default Sidebar;