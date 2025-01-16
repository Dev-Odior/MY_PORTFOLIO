type Props = { name: string };
const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__copyright">
          &copy; {`2023 ${props.name}. All Rights Researched`}
        </p>

        <div className="footer__social-links">
          <a href="" className="footer__social-link">
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a href="" className="footer__social-link">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="" className="footer__social-link">
            <i className="fa-brands fa-square-facebook"></i>
          </a>

          <a href="" className="footer__social-link">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
