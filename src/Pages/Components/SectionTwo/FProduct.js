import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function FProduct() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "23px", ml: 5, mb: 5 }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://ii1.pepperfry.com/media/catalog/product/c/o/1100x1210/combo-classic-xxxl-bean-bag---foot-stool-with-beans-in-black-colour-by-sattva-combo-classic-xxxl-bea-q5ulln.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <NavLink to="/details" style={{ textDecoration: "none" }}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="primary"
            >
              XXL Bean Bag Premium, Leg rest & Cushion Combo Set
            </Typography>
          </NavLink>
          <Typography variant="body1" color="#f44336">
            ৳4500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#336699" }}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://i.pinimg.com/originals/f4/51/9c/f4519cdb86f8cd96da000e78bade4f08.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <NavLink to="/details" style={{ textDecoration: "none" }}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="primary"
            >
              Trendy Stylish Men Cotton Round Neck Full Sleeve T-Shirt
            </Typography>
          </NavLink>
          <Typography variant="body1" color="#f44336">
            ৳600
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#336699" }}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <NavLink to="/details" style={{ textDecoration: "none" }}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="primary"
            >
              STYLISH new fashon long sleeve shirt for man
            </Typography>
          </NavLink>
          <Typography variant="body1" color="#f44336">
            ৳400
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#336699" }}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <NavLink to="/details" style={{ textDecoration: "none" }}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="primary"
            >
              Preimum Quality Winter Hoodie For Men
            </Typography>
          </NavLink>
          <Typography variant="body1" color="#f44336">
            ৳500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#336699" }}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
