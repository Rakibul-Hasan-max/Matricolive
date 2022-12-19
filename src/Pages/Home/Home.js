import AddBanner from "../Components/AddBanner/AddBanner";
import Banner from "../Components/Banner/Banner";
import SectionFive from "../Components/SectionFive/SectionFive";
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
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default Home;
