import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import fProduct from "./fProduct.json";
import Item from "./Item";

export default function Product() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{display: "flex", flexDirection: "row"}}
      >
        <Grid xs={2} sm={4} md={3} >
          {fProduct.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
