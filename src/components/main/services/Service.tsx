type Props = {
  title: string;
  description: string;
  no: string;
};

const Service = ({ title, description, no }: Props) => {
  return (
    <div className="services__item">
      <i className="fa-solid fa-pen-to-square services__icon"></i>

      <h3 className="services__title">{title}</h3>

      <p className="services__description">{description}</p>
      <span className="services__no">{no}</span>
    </div>
  );
};
export default Service;
