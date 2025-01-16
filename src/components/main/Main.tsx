import Home from "./Home";
import About from "./About";
import Qualification from "./Qualification";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Main = () => {
  return (
    <main className="main relative">
      <Home />
      <About />
      <Qualification />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Contact />
    </main>
  );
};
export default Main;
