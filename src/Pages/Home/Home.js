import AddBanner from "../Components/AddBanner/AddBanner";
import BannerThree from "../Components/BannerThree/BannerThree";
import Carousel from "../Components/Carousel/Carousel";
import SectionFour from "../Components/SectionFour/SectionFour";
import SectionOne from "../Components/SectionOne/SectionOne";
import SectionThree from "../Components/SectionThree/SectionThree";
import SectionTwo from "../Components/SectionTwo/SectionTwo";

const Home = () => {
  return (
    <div>
      <Carousel />
      <SectionOne />
      <SectionTwo />
      <AddBanner />
      <SectionThree />
      <BannerThree />
      <SectionFour />
    </div>
  );
};

export default Home;
