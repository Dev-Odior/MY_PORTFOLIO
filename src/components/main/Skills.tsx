import { skills } from "../../data/main.data";
import Skill from "./skill/Skill";

const Skills = () => {
  return (
    <section className="skills section">
      <h2 className="section__title title-center" data-title="My Talent">
        Professional Skills
      </h2>

      <div className="skills__container container grid">
        {skills.map((skill, index) => {
          return <Skill key={index} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
