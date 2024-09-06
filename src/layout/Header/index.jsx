import './header.module.scss';
import logo from '../../assets/common/logo.png';

// HEADER COMPONENT ========================================//
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} className="header__logo" />
      </div>
      <nav className="header__nav">
        <ul className="nav-list">
          <li className="nav-item">
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
              Réglage
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
