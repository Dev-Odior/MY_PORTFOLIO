import { testimonial } from "../../data/main.data";
import Item from "./testimonial/Item";

const Testimonial = () => {
  return (
    <section className="testimonials section">
      <h2 className="section__title title-center" data-title="Testimonials">
        What My Clients Say
      </h2>

      <div className="testimonials__container container grid">
        {testimonial.map((each) => {
          return <Item key={each.name} {...each} />;
        })}
      </div>
    </section>
  );
};
export default Testimonial;
