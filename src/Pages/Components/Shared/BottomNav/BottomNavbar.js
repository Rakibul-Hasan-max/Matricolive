import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import WindowIcon from '@mui/icons-material/Window';
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function BottomNavbar() {
  const [value, setValue] = React.useState(null);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value, setValue]);

  return (
    <Box sx={{ pb: 7, display: { xs: "flex", sm: "none" } }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction href='/home' label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction href='/category' label="Category" icon={<WindowIcon />} />
          <BottomNavigationAction href='/cart' label="Cart" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction href='/profile' label="Account" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
