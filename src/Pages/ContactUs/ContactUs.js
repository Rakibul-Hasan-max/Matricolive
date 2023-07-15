import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ py: "50px" }}>
      <Typography variant="h5" sx={{ mt: "80px", fontWeight: 500 }}>
        Contact Us
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid sm={6} xs={12}>
          <Box>
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
        </Grid>
        <Grid sm={6} xs={12}>
          <Box>
            <Typography variant="h6" sx={{ mt: "80px", fontWeight: 500 }}>
              Get in Touch
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Box sx={{ my: 3 }}>
                <PhoneInTalkIcon sx={{color:"#336699"}}/>
                <Typography>PHONE</Typography>
                <Typography>+880 1705-405323</Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <EmailIcon sx={{color:"#336699"}}/>
                <Typography>EMAIL</Typography>
                <Typography>official@matricolive.com</Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <LocationOnIcon sx={{color:"#336699"}}/>
                <Typography>ADDRESS</Typography>
                <Typography>Dakshin Khan, Uttara, Dhaka 1230</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
