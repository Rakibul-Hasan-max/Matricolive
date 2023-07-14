import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import fast from "../../../images/fast.png";

const SectionFour = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid>
          <Box sx={{mb:5}}>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", fontWeight: 500, mt: "80px" }}
            >
              Delivery Partner <hr />
            </Typography>
            <Box>
              <img style={{ width: "150px" }} src={fast} alt="" />
              <img style={{ width: "150px" }} src="https://i.ibb.co/0hNqsT2/redx.png" alt="" />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionFour;
