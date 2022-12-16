import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SectionOne = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Box
          sx={{
            padding: "20px 30px",
            margin: "50px 20px",
            // backgroundColor: "gray",
            border: "1px solid gray",
          }}
        >
          <Typography variant="body1">Free Delivery</Typography>
          <Typography variant="caption">For all oders over 5000tk</Typography>
        </Box>
        <Box
          sx={{
            padding: "20px 30px",
            margin: "50px 20px",
            // backgroundColor: "gray",
            border: "1px solid gray",
          }}
        >
          <Typography variant="body1">90 Days Return</Typography>
          <Typography variant="caption">If goods have problems</Typography>
        </Box>
        <Box
          sx={{
            padding: "20px 30px",
            margin: "50px 20px",
            // backgroundColor: "gray",
            border: "1px solid gray",
          }}
        >
          <Typography variant="body1">Secure Payment</Typography>
          <Typography variant="caption">100% secure payment</Typography>
        </Box>
        <Box
          sx={{
            padding: "20px 30px",
            margin: "50px 20px",
            // backgroundColor: "gray",
            border: "1px solid gray",
          }}
        >
          <Typography variant="body1">24/7 Support</Typography>
          <Typography variant="caption">Dedicated support</Typography>
        </Box>
        <Box
          sx={{
            padding: "20px 30px",
            margin: "50px 20px",
            // backgroundColor: "gray",
            border: "1px solid gray",
          }}
        >
          <Typography variant="body1">Gift Service</Typography>
          <Typography variant="caption">Support gift service</Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default SectionOne;
