import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Dense from "../Components/Dense/Dense";

const CustomerService = () => {
  return (
    <Box>
      <Dense />
      <Box
        sx={{
          backgroundColor: "#007185",
          textAlign: "left",
          p: 5,
          paddingLeft: "110px",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", pb: 1 }}>
          Welcome to Matricolive Customer Service
        </Typography>
        <Typography variant="h6" sx={{ color: "white", fontWeight: 400 }}>
          What would you like help with today? You can quickly take care of most
          things here, or connect with us when needed.
        </Typography>
        <Box sx={{ my: 5, ml: 3 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ gap: 3 }}
          >
            <Grid
              xs={4}
              sx={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: 1,
              }}
            >
              <Typography>A delivery, order or return</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: 1,
              }}
            >
              <Typography>
                Memberships, subscriptions or communications
              </Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: 1,
              }}
            >
              <Typography>Accessibility</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: 1,
              }}
            >
              <Typography>Login & password</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: 1,
              }}
            >
              <Typography>Report Something Suspicious</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: 1,
              }}
            >
              <Typography>Something else</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerService;
