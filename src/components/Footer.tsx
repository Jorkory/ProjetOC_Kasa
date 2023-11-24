import { ReactComponent as Logo} from '../assets/logoKasa.svg'
import "../styles/footer.scss"

export default function Footer() {
    return(
        <footer>
            <Logo className='footer_logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}