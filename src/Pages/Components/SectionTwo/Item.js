import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Item({ card }) {
  // const {image, title, price} = card;
  return (
    <Box sx={{ maxWidth: 155 }}>
      <Card>
        <Link href="/details" style={{ textDecoration: "none" }}>
          <CardMedia component="img" image={card.image} alt="green iguana" sx={{height: "150px"}} />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              color="primary"
            >
              {card.title.slice(0, 35)}
            </Typography>

            <Typography variant="body2" color="#f44336">
              {card.price}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Box>
  );
}

export default Item;
