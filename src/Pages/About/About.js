import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import banner from "../../images/about.jpg";
import OurTeam from "../Components/OurTeam/OurTeam";

const About = () => {
  return (
    <Box>
      <img style={{ width: "100%", height: "280px" }} src={banner} alt="" />
      <Box>
        <Typography>Meet our team</Typography>
      </Box>
      <OurTeam />
    </Box>
  );
};

export default About;
