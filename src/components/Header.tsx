type Props = { name: string };

const Header = (props: Props) => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {props.name}
        </a>

        <input type="checkbox" name="" id="nav-toggler" />

        <label htmlFor="nav-toggler" className="nav__toggle">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#qualification" className="nav__link">
              Experience
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#works" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
