type Props = {
  name: string;
  no: string;
  description: string;
  percentage: number;
};

const Skill = ({ name, no, description, percentage }: Props) => {
  return (
    <div className="skills__item">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__no">{no}</span>
      </div>
      <p className="skills__description">{description}</p>

      <div className="skills__bar">
        <div
          className={`skills__percentage`}
          style={{ width: `${percentage}%` }}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
