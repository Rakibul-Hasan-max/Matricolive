import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

function Item({ card }) {
  // const {image, title, price} = card;
  return (
    <Box sx={{ maxWidth: 160 }}>
      <Card>
    <NavLink to="/details" style={{ textDecoration: "none" }}>
      <CardMedia
        component="img"
        image={card.image}
        alt="green iguana"
      />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          gutterBottom
          variant="caption"
          component="div"
          color="primary"
        >
          {card.title}
        </Typography>

        <Typography variant="body2" color="#f44336">
        {card.price}
        </Typography>
      </CardContent>
    </NavLink>
  </Card>
    </Box>
  );
}

export default Item;
