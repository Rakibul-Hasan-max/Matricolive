import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink } from "react-router-dom";

export default function Furniture() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(8)).map((_, index) => (
          <Grid xs={2} sm={4} md={3} key={index}>
            <Card>
              <NavLink to="/details" style={{ textDecoration: "none" }}>
                <CardMedia
                  component="img"
                  maxHeight="250"
                  image="https://i.ibb.co/Lpg6yJj/Whats-App-Image-2023-01-07-at-10-17-33-PM.jpg"
                  alt="sofa set"
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    color="primary"
                  >
                    XXL Bean Bag Premium
                  </Typography>

                  <Typography variant="body2" color="#f44336">
                    ৳4500
                  </Typography>
                </CardContent>
              </NavLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
