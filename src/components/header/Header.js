import headerLogo from '../../resources/headerLogo.png';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <a className="header__link" href="/">
                <img width="600" height="200" src={headerLogo} alt="rick and morty site logo"/>
            </a>
        </header>
        
    )
}

export default Header;