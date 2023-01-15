import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Furniture from "./Furniture";

const SectionTwo = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid>
          <Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", fontWeight: 500, mt: 5 }}
            >
              Featured Product <hr/>
            </Typography>
            <Box>
                {/* <FProduct /> */}
                <Furniture />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionTwo;
