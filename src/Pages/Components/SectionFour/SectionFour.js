import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const SectionFour = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid>
          <Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", fontWeight: 500, mx: 5, marginTop: "80px" }}
            >
              Delivery Partner <hr />
            </Typography>
            <Box sx={{ mb: 0}}>
              <img style={{ width: "150px", margin: "60px 20px", alignItems: "center", justifyContent: "center" }} src="https://steadfast.com.bd/icon/logo.svg" alt="" />
              <img style={{ width: "150px" }} src="https://redxenergy.com.au/wp-content/uploads/2022/07/Linkedin-Comany-Logo.png" alt="" />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionFour;
