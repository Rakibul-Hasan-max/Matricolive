import { Box, Button, TextField, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ pt: "50px" }}>
      <Typography variant="h5" sx={{ mt: "80px", fontWeight: 500 }}>
        Get in Touch
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
  );
};

export default ContactUs;
