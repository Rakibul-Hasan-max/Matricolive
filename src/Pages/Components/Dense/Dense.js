import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function Dense() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
      <AppBar position="static" sx={{ backgroundColor: "#0B3160", pt: {xs: "55px", sm: "60px", md: "65px"} }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            <Typography variant='body1' sx={{fontWeight: 500, marginLeft: 1, marginRight: 5, display: { xs: "none", sm: "flex" },}}>Shop by Department</Typography>
          </IconButton>
          <NavLink to="/home" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              sx={{ marginRight: 3 }}
            >
              Home
            </Typography>
          </NavLink>
          <NavLink to="/shop" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div">
              Shop
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
