import AddBanner from "../Components/AddBanner/AddBanner";
import Banner from "../Components/Banner/Banner";
import BannerThree from "../Components/BannerThree/BannerThree";
import Newsletter from "../Components/Newsletter/Newsletter";
import SectionFour from "../Components/SectionFour/SectionFour";
import SectionOne from "../Components/SectionOne/SectionOne";
import SectionThree from "../Components/SectionThree/SectionThree";
import SectionTwo from "../Components/SectionTwo/SectionTwo";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionOne />
      <SectionTwo />
      <AddBanner />
      <SectionThree />
      <BannerThree />
      <SectionFour />
      <Newsletter />
    </div>
  );
};

export default Home;
