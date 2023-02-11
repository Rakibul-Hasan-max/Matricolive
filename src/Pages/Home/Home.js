import AddBanner from "../Components/AddBanner/AddBanner";
import BannerThree from "../Components/BannerThree/BannerThree";
import Carousel from "../Components/Carousel/Carousel";
import Dense from "../Components/Dense/Dense";
import SectionFour from "../Components/SectionFour/SectionFour";
import SectionOne from "../Components/SectionOne/SectionOne";
import SectionThree from "../Components/SectionThree/SectionThree";
import SectionTwo from "../Components/SectionTwo/SectionTwo";
import BottomNav from "../Components/Shared/BottomNav/BottomNav";

const Home = () => {
  return (
    <div>
      <Dense />
      <Carousel />
      <SectionOne />
      <SectionTwo />
      <AddBanner />
      <SectionThree />
      <BannerThree />
      <SectionFour />
      <BottomNav />
    </div>
  );
};

export default Home;
