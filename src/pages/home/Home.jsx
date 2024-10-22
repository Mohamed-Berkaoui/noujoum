import "./home.scss";
import HomeHeader from "../../components/homeComponents/header/HomeHeader";
import Footer from "../../components/footer/Footer";
import NotreMission from "../../components/homeComponents/NotreMissionHome/NotreMission";
import RichesseNotreCultureHome from "../../components/homeComponents/RichesseNotreCultureHome/RichesseNotreCultureHome";
import NosEvenements from "../../components/homeComponents/nosEvenements/NosEvenements";
import NosCollaborationsArtistiques from "../../components/homeComponents/nosCollaborationsArtistiques/NosCollaborationsArtistiques";
import Contact from "../../components/homeComponents/contactUs/Contact";

function Home({ loading, setLoading }) {
  return (
      <div className="home-container">
        <HomeHeader />
        <NotreMission />
        <RichesseNotreCultureHome/>
        <NosEvenements/>
        <NosCollaborationsArtistiques/>
        <Contact/>
        {/* <Footer /> */}
      </div>
  );
}

export default Home;
