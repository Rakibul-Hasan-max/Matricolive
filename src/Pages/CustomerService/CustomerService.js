import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Dense from "../Components/Dense/Dense";

const CustomerService = () => {
  return (
    <Box>
      <Dense />
      <Box sx={{backgroundColor: "#007185", textAlign: "left", p: 5, paddingLeft: "110px"}}>
        <Typography  variant="h5" sx={{color: "white", pb: 1}} >Welcome to Matricolive Customer Service</Typography>
        <Typography  variant="h6" sx={{color: "white", fontWeight: 400}} >What would you like help with today? You can quickly take care of most things here, or connect with us when needed.
</Typography>
      </Box>
    </Box>
  );
};

export default CustomerService;