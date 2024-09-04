import './header.module.scss';
import logo from '../../assets/common/logo.png';

// HEADER COMPONENT ========================================//
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} className="header__logo" />
      </div>
      <div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" className="header__nav-link">
                Accueil
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Profil
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Réglages
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Communauté
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
