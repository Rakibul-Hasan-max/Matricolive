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
              sx={{ textAlign: "left", fontWeight: 500, mx: 5, mt: 5 }}
            >
              For You Product <hr/>
            </Typography>
            <Box sx={{mb: 10}}>
                <YourProduct />
                <Button variant="contained" sx={{backgroundColor: "#259B24"}}>Shop Now</Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionThree;
