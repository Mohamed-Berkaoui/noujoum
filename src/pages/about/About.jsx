import { motion } from "framer-motion";
import Header from "../../components/aboutCompnents/header/Header";
import NosPrincipaleActivite from "../../components/aboutCompnents/nosPrincipaleActivite/NosPrincipaleActivite";

function About() {
  return (
    <div className="about-page">
      <Header />
      <NosPrincipaleActivite/>
    </div>
  );
}

export default About;
