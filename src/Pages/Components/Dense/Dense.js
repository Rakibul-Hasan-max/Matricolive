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
      <AppBar position="static" sx={{ backgroundColor: "#336699", pt: {xs: "55px", sm: "60px", md: "65px"} }}>
        <Toolbar variant="dense">
          <IconButton href='/category' edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            <Typography variant='body1' sx={{fontWeight: 500, marginLeft: 1, marginRight: 5, display: { xs: "none", sm: "flex" },}}>Shop by Department</Typography>
          </IconButton>
          <NavLink to="/home" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              sx={{ marginRight: 4 }}
            >
              Home
            </Typography>
          </NavLink>
          <NavLink to="/shop" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginRight: 4 }}>
              Shop
            </Typography>
          </NavLink>
          <NavLink to="/wholesale" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginRight: 4 }}>
              Wholesale
            </Typography>
          </NavLink>
          <NavLink to="/customer-service" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginRight: 4 }}>
              Customer Service
            </Typography>
          </NavLink>
          <NavLink to="/sell-products" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginRight: 4 }}>
              Sell products on Matricolive
            </Typography>
          </NavLink>
          <NavLink to="/become-affiliate" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginRight: 4 }}>
              Become an Affiliate
            </Typography>
          </NavLink>
          <NavLink to="/manufacturer" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="body1" color="inherit" component="div" >
              Connect with the manufacturer
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
