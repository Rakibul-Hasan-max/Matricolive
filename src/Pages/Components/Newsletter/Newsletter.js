import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Newsletter = () => {
  return (
    <Box sx={{ backgroundColor: "#336699" }}>
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
          <MailOutlinedIcon sx={{ color: "white", fontSize: "43px" }} />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "white", fontSize: "14px" }}>
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", fontSize: "12px" }}
            >
              Get all the latest information on Events, Sales and Offers.
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
          <Input
            placeholder="Your E-mail Address"
            sx={{
              backgroundColor: "white",
              width: "450px",
              padding: "3px 10px",
              borderRadius: "3px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333333",
              fontSize: "12px",
              padding: "8px 20px",
            }}
          >
            SUBSCRIBE
            <ArrowForwardIcon sx={{ fontSize: "15px", marginLeft: "5px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
