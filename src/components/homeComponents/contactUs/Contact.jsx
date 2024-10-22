import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle";
import "./contact.scss";
import ContactForm from "./contactForm/ContactForm";

function Contact() {
  return <div className="home-contact-us-container">

<HomeSectionTitle key={"contact home"} title={"Contact Us"} description={"Nous sommes là pour vous aider à organiser votre événement. Contactez-nous pour discuter de vos besoins."}/>
<ContactForm/>
  </div>;
}

export default Contact;
