import { ReactComponent as Logo } from '../assets/logoKasa.svg'

export default function Footer() {
    return (
        <footer>
            <Logo className='footer__logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}