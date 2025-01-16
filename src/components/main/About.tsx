import { about } from "../../data/main.data";
import src from "../../assets/img/about.png";

const About = () => {
  const { me, description, fullName, age, location, email, images } = about;

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__img-wrapper">
          {images.map((each) => {
            return <img src={src} key={each} className="about__img" />;
          })}
        </div>

        <div className="about__content">
          <h2 className="section__title" data-title="Who am i?">
            {me}
          </h2>

          <p className="about__description">{description}</p>

          <ul className="about__data grid">
            <li className="data__item">
              <h3 className="data__title">Name:</h3>
              <span className="data__description">{fullName}</span>
            </li>

            <li className="data__item">
              <h3 className="data__title">Age:</h3>
              <span className="data__description">{age} Years</span>
            </li>

            <li className="data__item">
              <h3 className="data__title">From:</h3>
              <span className="data__description">{location}</span>
            </li>

            <li className="data__item">
              <h3 className="data__title">Email:</h3>
              <span className="data__description">{email}</span>
            </li>
            
          </ul>

          <div className="about__bottom">
            <a href="" className="btn">
              Download Cv
            </a>

            <div className="about__social-links">
              <a href="" className="about__social-link">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="" className="about__social-link">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="" className="about__social-link">
                <i className="fa-brands fa-square-facebook"></i>
              </a>

              <a href="" className="about__social-link">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
