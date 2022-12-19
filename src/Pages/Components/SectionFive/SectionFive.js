import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const SectionFive = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid>
          <Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", fontWeight: 500, mx: 5, mt: 5 }}
            >
              Client Reviews <hr />
            </Typography>
            <Box sx={{ mb: 10 }}>Coming Soon...</Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionFive;
