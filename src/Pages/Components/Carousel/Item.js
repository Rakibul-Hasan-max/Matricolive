import { Box } from "@mui/material";

function Item({ item }) {
  return (
    <Box>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", maxHeight: "400px" }}
      />
      {/* <NavLink to="/details" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ marginTop: "-150px" }}>
          Order Now
        </Button>
      </NavLink> */}
    </Box>
  );
}

export default Item;
