import Service from "./services/Service";
import { services } from "../../data/main.data";

const Services = () => {
  return (
    <section className="services section container grid" id="services">
      <h2 className="section__title title-center" data-title="services">
        What we do
      </h2>

      <div className="services__container grid container">
        {services.map((service, index) => {
          return <Service key={index} {...service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
