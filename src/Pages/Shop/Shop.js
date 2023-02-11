import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import banner from "../../images/Shop.png";
import Dense from "../Components/Dense/Dense";
import YourProduct from "../Components/SectionThree/YourProduct";
import FProduct from "../Components/SectionTwo/FProduct";

const Shop = () => {
  return (
    <Box>
      <Dense />
      <Box sx={{pt: {xs: "55px", sm: "0px", md: "0px"}}}><img style={{ width: "100%", maxHeight: "380px" }} src={banner} alt="" /></Box>
      <Box>
        <Box>
          <Container maxWidth="lg">
            <Grid>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", fontWeight: 500, mt: 5 }}
                >
                  Featured Product <hr />
                </Typography>
                <Box>
                  <FProduct />
                </Box>
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Grid>
            <Box>
              <Typography
                variant="h5"
                sx={{ textAlign: "left", fontWeight: 500, mt: 5 }}
              >
                For You Product <hr />
              </Typography>
              <Box sx={{ mb: 10 }}>
                <YourProduct />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Shop;
