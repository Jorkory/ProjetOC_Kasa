import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logoKasa.svg'

export default function Header() {

    return (
        <header>
            <Link to="/"><Logo className='header__logo' /></Link>
            <nav>
                <ul className='navbar'>
                    <li><NavLink className='navbar__link' to='/'>Accueil</NavLink></li>
                    <li><NavLink className='navbar__link' to='/propos'>A Propos</NavLink></li>
                </ul>
            </nav>
        </ header>
    )
}