import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import DevicesFoldIcon from '@mui/icons-material/DevicesFold';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HailIcon from '@mui/icons-material/Hail';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ToysIcon from '@mui/icons-material/Toys';
import WeekendIcon from '@mui/icons-material/Weekend';
import Woman2Icon from '@mui/icons-material/Woman2';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Category() {
  return (
    <Box sx={{pt: "100px", pb: "70px"}}>
      <Box>
        <Typography variant="h6">All Categories</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            mb: 5,
            width: 128,
            height: 128,
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><HailIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Men's Fashion
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><Woman2Icon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Women's Fashion
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><DevicesOtherIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Watches, Bags, Jewellery
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><MedicationLiquidIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Health & Beauty
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><ToysIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Babies & Toys
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><DisplaySettingsIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Electronic Devices
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><DevicesFoldIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Electronic Accessories
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><CastConnectedIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Electronic Gadgets
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><AddHomeWorkIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Home & Lifestyle
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><WeekendIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Furniture
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><ShoppingBasketIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Foods & Beverages
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          <Paper sx={{backgroundColor: "white", p: 1}}><ExitToAppIcon sx={{fontSize: "100px", color: "#0C134F"}} /></Paper>Export Item
        </Box>
      </Box>
    </Box>
  );
}
