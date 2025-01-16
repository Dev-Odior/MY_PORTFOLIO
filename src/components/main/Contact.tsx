import { useState } from "react";
import { contact } from "../../data/main.data";
import { toast } from "react-toastify";
import { useConfetti } from "../../Hooks";

const Contact = () => {
  const defaults = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [{ name, email, subject, message }, setInfo] = useState(defaults);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setInfo(defaults);
    toast("Thank You!", { type: "success" });
  };

  const confetti = useConfetti(5);

  return (
    <section className="contact section" id="contact">
      {confetti}
      <h2 className="section__title title-center" data-title="Get in touch">
        Contact Me
      </h2>
      <div className="contact__container container grid">
        <div className="contact__details">
          <div className="contact__item">
            <i className="fa-solid fa-envelope contact__icon"> </i>
            <div>
              <h3 className="contact__title">Call Us</h3>
              <span className="contact__data">{contact.phone}</span>
            </div>
          </div>
          <div className="contact__item">
            <i className="fa-solid fa-location-dot contact__icon"> </i>
            <div>
              <h3 className="contact__title">Email Us</h3>
              <span className="contact__data">{contact.email}</span>
            </div>
          </div>
          <div className="contact__item">
            <i className="fa-solid fa-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Address</h3>
              <span className="contact__data">{contact.address}</span>
            </div>
          </div>
        </div>
        <form action="" className="contact__form" onSubmit={onSubmitHandler}>
          <div className="form__group">
            <div className="form__input">
              <input
                type="text"
                placeholder="Name"
                className="input__control"
                name="name"
                value={name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form__input">
              <input
                type="email"
                placeholder="Email"
                className="input__control"
                name="email"
                value={email}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Subject"
              className="input__control"
              value={subject}
              name="subject"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form__input">
            <textarea
              placeholder="Message"
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={onChangeHandler}
              className="input__control textarea"
            ></textarea>
          </div>
          <button className="btn contact__btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
