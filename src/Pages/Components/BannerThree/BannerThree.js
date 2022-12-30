import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const BannerThree = () => {
  return (
    <Box sx={{ backgroundColor: "#336699", marginBottom: "80px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "80px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            py: "20px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h3" sx={{color: "white"}}>25% OFF</Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "white", fontSize: "14px" }}>
              FOR TODAY'S FASHION
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", fontSize: "12px" }}
            >
              Use code Black 12345 to get best offer.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            py: "20px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "white",
              fontSize: "12px",
              padding: "8px 20px",
              borderColor: "white",
            }}
          >
            SHOP NOW
            <ArrowForwardIcon sx={{ fontSize: "15px", marginLeft: "5px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerThree;
