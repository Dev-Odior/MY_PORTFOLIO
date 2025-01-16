import { qualification } from "../../data/main.data";
import Items from "./qualification/Items";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title title-center" data-title="My Journey">
        Qualification
      </h2>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3 className="resume__heading">Education</h3>

          {qualification.education.map((item) => {
            return <Items key={item.title} {...item} />;
          })}
        </div>

        <div className="resume__group">
          <h3 className="resume__heading">Experience</h3>

          {qualification.experience.map((item) => {
            return <Items key={item.title} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Qualification;
