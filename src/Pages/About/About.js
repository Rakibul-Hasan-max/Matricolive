import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import banner from "../../images/about.jpg";
import OurTeam from "../Components/OurTeam/OurTeam";

const About = () => {
  return (
    <Box>
      <img style={{ width: "100%", height: "280px" }} src={banner} alt="" />
      <Box sx={{ my: 5 }}>
        <Box>
          <Typography variant="h5">Meet Our Team</Typography>
        </Box>
        <OurTeam />
      </Box>
    </Box>
  );
};

export default About;
