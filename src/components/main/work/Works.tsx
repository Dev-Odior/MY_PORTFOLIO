type Props = { image: string; title: string; desc: string };

const Works = ({ image, title, desc }: Props) => {
  return (
    <div className="work__card">
      <img src={image} className="work__img" alt="" />

      <div className="work__details">
        <h3 className="work__title">{title}</h3>
        <span className="work__description">{desc}</span>
      </div>
    </div>
  );
};
export default Works;
