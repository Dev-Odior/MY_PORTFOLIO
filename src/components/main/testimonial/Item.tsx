type Props = { desc: string; img: string; name: string; identity: string };

const Item = ({ desc, img, name, identity }: Props) => {
  return (
    <div className="testimonials__item">
      <p className="testimonials__description">{desc}</p>

      <div className="testimonials__data">
        <img src={img} alt="" className="testimonials__img" />

        <div>
          <h3 className="testimonials__name">{name}</h3>
          <span className="testimonials__identity">{identity}</span>
        </div>
      </div>
    </div>
  );
};
export default Item;
