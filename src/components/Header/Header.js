import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {

  return (
    <header className="header">
      <Link to="/" className="header__logo">vldslw</Link>
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">About</Link>
        <Link to="/" className="header__nav-link">Work</Link>
        <Link to="/" className="header__nav-link">Contact</Link>
      </nav>
    </header>
  )
};
