import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function FProduct() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "23px", ml: 5, mb: 5 }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/317082428_2164023450437277_1793934273531950862_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHAO-SzGLxBaKi6ZCZsWT4b129y9Y6e78DXb3L1jp7vwIjVa82fSW2a04daspsbzGNol0l7fFyQCLjRwfqzL8v-&_nc_ohc=ItSzgjGfg5sAX-RXpR5&tn=2nP2-vgM4Pft8-7R&_nc_ht=scontent.fdac8-1.fna&oh=00_AfBF8zrCZC9HdVTHUY1JaIs3UBu4III5InnvEW5c13miRQ&oe=63A5EA25"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            XXL Bean Bag Premium, Leg rest & Cushion Combo Set
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳4500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" sx={{backgroundColor:"#336699"}}>
            Buy Now
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://images.prismic.io/rushordertees-web/0d4bbbe2-2678-4f38-9c7a-e7797be75ba0_Crewneck+Sweatshirts.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1800&w=800"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            Trendy Stylish Men Cotton Round Neck Full Sleeve T-Shirt
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳600
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" sx={{backgroundColor:"#336699"}}>
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
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            STYLISH new fashon long sleeve shirt for man
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳400
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" sx={{backgroundColor:"#336699"}}>
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
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="primary"
          >
            Preimum Quality Winter Hoodie For Men
          </Typography>
          <Typography variant="body1" color="#f44336">
            ৳500
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" variant="outlined">
            Add to cart
          </Button>
          <Button size="small" variant="contained" sx={{backgroundColor:"#336699"}}>
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
