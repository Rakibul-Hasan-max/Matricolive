import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Details = () => {
  return (
    <Box>
      <Box sx={{mt: 5}}>
        <Typography variant="body1">Product details coming soon...</Typography>
      </Box>
      <Box sx={{ textAlign: "left", mx: "10%", my: 5}}>
        <Typography variant="body1">Description</Typography>
        <Typography variant="caption">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;
