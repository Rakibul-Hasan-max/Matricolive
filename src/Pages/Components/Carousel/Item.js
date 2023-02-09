import { Box } from "@mui/material";

function Item({ item }) {
  return (
    <Box>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", maxHeight: "500px" }}
      />
    </Box>
  );
}

export default Item;
