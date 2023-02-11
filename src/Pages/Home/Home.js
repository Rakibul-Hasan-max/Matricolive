import BannerThree from "../Components/BannerThree/BannerThree";
import Carousel from "../Components/Carousel/Carousel";
import Dense from "../Components/Dense/Dense";
import MidBanner from "../Components/MidBanner/MidBanner";
import SectionFour from "../Components/SectionFour/SectionFour";
import SectionOne from "../Components/SectionOne/SectionOne";
import SectionThree from "../Components/SectionThree/SectionThree";
import SectionTwo from "../Components/SectionTwo/SectionTwo";

const Home = () => {
  return (
    <div>
      <Dense />
      <Carousel />
      <SectionOne />
      <SectionTwo />
      <MidBanner />
      <SectionThree />
      <BannerThree />
      <SectionFour />
    </div>
  );
};

export default Home;
