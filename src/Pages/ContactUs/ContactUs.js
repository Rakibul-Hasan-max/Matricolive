import { Box, Button, TextField, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ pt: "50px" }}>
      <Typography variant="h5" sx={{ mt: "80px", fontWeight: 500 }}>
        Contact Us
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Typography variant="h6" sx={{ mt: "80px", fontWeight: 500 }}>
            Send Message
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                mx: "15%",
                mt: 5,
              }}
            >
              <TextField id="filled-basic" label="Name" variant="filled" />
              <TextField id="filled-basic" label="Email" variant="filled" />
              <TextField
                id="filled-textarea"
                label="Message"
                multiline
                variant="filled"
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: 5,
                mb: 3,
                background: "#336699 !important",
                borderRadius: "0 !important",
                py: 1,
                px: 3,
              }}
            >
              Send Message
            </Button>
            <Box></Box>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="h6" sx={{ mt: "80px", fontWeight: 500 }}>
            Get in Touch
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Box sx={{ my: 3 }}>
              <Typography>PHONE</Typography>
              <Typography>+880 1705-405323</Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography>EMAIL</Typography>
              <Typography>official@matricolive.com</Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography>ADDRESS</Typography>
              <Typography>Dakshin Khan, Uttara, Dhaka 1230</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
      {/* Map */}
      </Box>
    </Box>
  );
};

export default ContactUs;
