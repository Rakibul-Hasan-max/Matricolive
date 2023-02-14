import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Category() {
  return (
    <Box sx={{paddingTop: "70px"}}>
      <Box>
        <Typography variant="h6">All Categories</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper sx={{p: 1}}>Men's Fashion</Paper>
        <Paper sx={{p: 1}}>Women's Fashion</Paper>
        <Paper sx={{p: 1}}>Watches, Bags, Jewellery</Paper>
        <Paper sx={{p: 1}}>Health & Beauty</Paper>
        <Paper sx={{p: 1}}>Babies & Toys</Paper>
        <Paper sx={{p: 1}}>Electronic Devices</Paper>
        <Paper sx={{p: 1}}>Electronic Accessories</Paper>
        <Paper sx={{p: 1}}>Electronic Gadgets</Paper>
        <Paper sx={{p: 1}}>Home & Lifestyle</Paper>
        <Paper sx={{p: 1}}>Furniture</Paper>
        <Paper sx={{p: 1}}>Foods & Beverages</Paper>
        <Paper sx={{p: 1}}>Export Item</Paper>
      </Box>
    </Box>
  );
}
