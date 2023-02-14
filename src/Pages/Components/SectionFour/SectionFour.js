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
            <Box>
              <img style={{ width: "150px", margin: "60px 20px", alignItems: "center", justifyContent: "center" }} src="https://steadfast.com.bd/icon/logo.svg" alt="" />
              <img style={{ width: "150px" }} src="https://i.ibb.co/0hNqsT2/redx.png" alt="" />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionFour;
