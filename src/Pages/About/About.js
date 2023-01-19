import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import OurTeam from "../Components/OurTeam/OurTeam";

const About = () => {
  return (
    <Box>
      <img
        style={{ width: "100%", maxHeight: "350px" }}
        src="https://i.ibb.co/Y3kWSZv/pexels-fauxels-3183183.jpg"
        alt=""
      />
      <Box sx={{ my: 5 }}>
        <Box>
          <Typography variant="h6" sx={{ textAlign: "left", mx: "20%" }}>
            Welcome to Matricolive
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", mx: "20%", my: 5, fontStyle: "italic" }}
          >
            "We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all."
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "left", mx: "20%", my: 5, color: "#333333" }}
          >
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage and scale their businesses. Our mission
            is to reimagine commerce in ways that build a more fulfilling and
            lasting world, and we’re committed to using the power of business to
            strengthen communities and empower people.
          </Typography>
        </Box>
        <Box sx={{margin:"100px 0"}}>
          <Typography variant="h5">Meet Our Team</Typography>
          <OurTeam />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
