import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const SectionOne = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid #E5B8F4",
        padding: "25px 50px",
        margin: "20px 70px 60px 70px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          paddingRight: "30px",
          borderRight: "1px solid #E5B8F4",
        }}
      >
        <Typography variant="body1">Free Delivery</Typography>
        <Typography variant="caption" sx={{ color: "grey" }}>
          For all orders over ৳5000
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0 30px",
          borderRight: "1px solid #E5B8F4",
        }}
      >
        <Typography variant="body1">90 Days Return</Typography>
        <Typography variant="caption" sx={{ color: "grey" }}>
          If goods have problems
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0 30px",
          borderRight: "1px solid #E5B8F4",
        }}
      >
        <Typography variant="body1">Secure Payment</Typography>
        <Typography variant="caption" sx={{ color: "grey" }}>
          100% secure payment
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0 30px",
          borderRight: "1px solid #E5B8F4",
        }}
      >
        <Typography variant="body1">24/7 Support</Typography>
        <Typography variant="caption" sx={{ color: "grey" }}>
          Dedicated support
        </Typography>
      </Box>
      <Box
        sx={{
          paddingLeft: "30px",
        }}
      >
        <Typography variant="body1">Gift Service</Typography>
        <Typography variant="caption" sx={{ color: "grey" }}>
          Support gift service
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionOne;
