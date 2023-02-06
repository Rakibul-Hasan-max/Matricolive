import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import YourProduct from "./YourProduct";

const SectionThree = () => {
  return (
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
                <Button href="/shop" variant="contained" sx={{ backgroundColor: "#336699", mt: 2 }}>
                  Shop Now
                </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionThree;
