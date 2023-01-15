import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Item({ item }) {
  return (
    <Card>
    <NavLink to="/details" style={{ textDecoration: "none" }}>
      <CardMedia
        component="img"
        maxHeight="250"
        image={item.image}
        alt="green iguana"
      />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          gutterBottom
          variant="caption"
          component="div"
          color="primary"
        >
          {item.title}
        </Typography>

        <Typography variant="body2" color="#f44336">
        {item.price}
        </Typography>
      </CardContent>
    </NavLink>
  </Card>
  );
}

export default Item;
