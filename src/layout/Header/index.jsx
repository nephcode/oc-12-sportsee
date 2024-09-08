import header from './header.module.scss';
import logo from '../../assets/common/logo.png';

// HEADER COMPONENT ========================================//
const Header = () => {
  return (
    <nav className={header.header}>
      <a><img src={logo} alt="Logo" /> </a>
      <div>
        <a href="#">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </div>
    </nav>
  );
};
export default Header;
