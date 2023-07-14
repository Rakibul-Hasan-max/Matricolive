import { Container, Grid, Typography } from "@mui/material";
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
          py: "60px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ color: "white", pb: 1 }}>
            Welcome to Matricolive Customer Service
          </Typography>
          <Typography variant="h6" sx={{ color: "white", fontWeight: 400 }}>
            What would you like help with today? You can quickly take care of most
            things here, or connect with us when needed.
          </Typography>
        </Container>
        <Box sx={{ my: 5,  }}>
          <Container maxWidth="lg">
            <Grid
              container
              sx={{ gap: 3 }}
            >
              <Grid
                xs={12}
                md={4}
                sx={{
                  backgroundColor: "white",
                  padding: "30px 20px",
                  borderRadius: 1,
                }}
              >
                <Typography>A delivery, order or return</Typography>
              </Grid>
              <Grid
                xs={12}
                md={4}
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
                xs={12}
                md={4}
                sx={{
                  backgroundColor: "white",
                  padding: "30px 20px",
                  borderRadius: 1,
                }}
              >
                <Typography>Accessibility</Typography>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sx={{
                  backgroundColor: "white",
                  padding: "30px 20px",
                  borderRadius: 1,
                }}
              >
                <Typography>Login & password</Typography>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sx={{
                  backgroundColor: "white",
                  padding: "30px 20px",
                  borderRadius: 1,
                }}
              >
                <Typography>Report Something Suspicious</Typography>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sx={{
                  backgroundColor: "white",
                  padding: "30px 20px",
                  borderRadius: 1,
                }}
              >
                <Typography>Something else</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerService;
