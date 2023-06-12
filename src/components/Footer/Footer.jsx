import './Footer.css';
import logoFooter from '../../assets/footer-bflix.png';

function Footer() {
    return (
        <footer className='footer'>
            <a className='footer__link' href='#'><img className='footer__logo' src={logoFooter} alt='Logo'/></a>
            <p className="copyright__text">Copyright &copy; 2023 <a className="copyright__link" href="https://github.com/Rita-Chacon/" target="_blank" rel="noopener noreferrer">Rita Chacón Oney</a></p>
        </footer>
    )
}

export default Footer;