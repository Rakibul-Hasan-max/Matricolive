import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';

export default function BottomNav() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: "100%", display: { xs: "flex", sm: "none" } }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Shop"
        value="shop"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Category"
        value="category"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Account" value="account" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}