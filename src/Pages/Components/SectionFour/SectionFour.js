import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const SectionFour = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid>
          <Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", fontWeight: 500, mx: 5, mt: 5 }}
            >
              Our Clients <hr />
            </Typography>
            <Box sx={{ mb: 10 }}>
              <img style={{ width: "150px" }} src="https://redxenergy.com.au/wp-content/uploads/2022/07/Linkedin-Comany-Logo.png" alt="" />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionFour;
