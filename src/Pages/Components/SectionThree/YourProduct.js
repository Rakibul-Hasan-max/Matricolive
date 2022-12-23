import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function YourProduct() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "23px", ml: 5, mb: 5 }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://images.express.com/is/image/expressfashion/0039_04350006_0098_f002?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            1 Set Blazer Solid Color Turndown Collar Long Sleeve Slim Fit
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳3500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://static-01.daraz.com.bd/p/53e72a92469dc5f08a5fec41a743e89c.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            Vintage Denim Jackets Men Slim Fit Casual Mens Jeans Coat
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳4800
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://image.made-in-china.com/202f0j00OQSfURbIvGgj/Btl106542019new-Models-PU-Leather-Fashion-Lady-Hand-Bags-Shoulder-Women-Handbag.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            Square Star Sequin Messenger Crossbody Bag for Women
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳650
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://m.media-amazon.com/images/I/7182N164NRL._AC_UL1500_.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            LouisWill Gold Brands Men Waterproof Luxury Watch
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳2500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://cf.shopee.com.my/file/30ad9cd35e543c42690aafce4ba2c392"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            New Men Boots Leather Military Boots Men Winter
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳4500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-luggage-1554348191.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            VIP Hard Body Luggage - Quad 8 Wheels Polypropylene Luggage
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳12000
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://techcrunch.com/wp-content/uploads/2022/02/am_hatsu_top.jpg?w=730&crop=1"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            Custom Gaming Keyboard - Alice Layout 66 Keys
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳3500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://assets.reedpopcdn.com/g502x_f9QuuM8.jpeg/BROK/thumbnail/1200x1200/quality/100/g502x_f9QuuM8.jpeg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            Gaming T-Wolf V6 Mouse With Multicolor Lighting
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳1500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" color="success">
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
