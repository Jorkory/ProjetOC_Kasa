import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/logoKasa.svg'
import '../styles/header.scss'

export default function Header() {

    return (
        <header>
            <Link to="/"><Logo className='header_logo'/></Link>
            <nav>
                <Link className='nav_link' to='/'>Accueil</Link>
                <Link className='nav_link' to='/propos'>A Propos</Link>
            </nav>
        </ header>
    )
}