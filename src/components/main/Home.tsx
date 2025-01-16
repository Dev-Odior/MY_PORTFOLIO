import profile from "../../assets/img/profile.png";
import { home } from "../../data/main.data";

const Home = () => {
  const { name, occupation, description } = home;

  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__content border-white">
          <span className="home__small">Hello</span>
          <h1 className="home__title">
            <span>I'm</span> {`${name}`} <br />a{` `}
            <span className="">{`${occupation}`}</span>
          </h1>

          <p className="home__description">{`${description}`}</p>

          <div className="home__btns">
            <a href="#contact" className="btn">
              Hire Me
            </a>
            <a href="#portfolio" className="btn btn--transparent">
              Portfolio
            </a>
          </div>
        </div>

        <div className="home__img-wrapper">
          <img src={profile} className="home__img" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Home;
