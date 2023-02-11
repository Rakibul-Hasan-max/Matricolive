import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState("{}");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation 
      sx={{ width: "96%", display: { xs: "flex", sm: "none" } }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        href="/home"
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        href="/shop"
        label="Shop"
        value="shop"
        icon={<ShopIcon />}
      />
      <BottomNavigationAction
        label="Category"
        value="category"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingCartIcon />}
      />
      <NavLink to="/login">
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<PersonIcon />}
        />
      </NavLink>
    </BottomNavigation>
  );
}
