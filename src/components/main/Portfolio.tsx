import { works } from "../../data/main.data";
import Works from "./work/Works";

const Portfolio = () => {
  return (
    <section className="works section" id="works">
      <h2 className="section__title title-center" data-title="My Portfolio">
        Recent Works
      </h2>

      <div className="work__container container grid">
        {works.map((work) => {
          return <Works key={work.title} {...work} />;
        })}
      </div>
    </section>
  );
};
export default Portfolio;
