import './index.scss'
import logo from '../../assets/images/dj.png'

const Logo = () => {
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={logo} alt='dj'/>
        </div>
    )
}


export default Logo;