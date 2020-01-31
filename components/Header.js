import Link from '../node_modules/next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div />
      <div className="navbar__navigation-items">
        <Link href="/">
          <a className="navbar__link" style={linkStyle}>Accueil</a>
        </Link>
        <Link href="/spectacle">
          <a className="navbar__link" style={linkStyle}>Spectacles</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
