type Props = {
  subtitle: string;
  title: string;
  date: string;
  description: string;
};

const Items = ({ subtitle, title, date, description }: Props) => {
  return (
    <div className="resume__items">
      <div className="resume__item">
        <div className="resume__header">
          <h3 className="resume__subtitle">{subtitle}</h3>
          <span className="resume__icon">+</span>
        </div>

        <div className="resume__content">
          <div className="resume__date-title">
            <h3 className="resume__title">{title}</h3>
            <span className="resume__data">{date}</span>
          </div>

          <p className="resume__description">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Items;
