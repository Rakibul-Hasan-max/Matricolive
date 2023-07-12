import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const data = [
  {
    src: "https://live.staticflickr.com/65535/52682054572_50ec6536e5_w.jpg",
    name: "Foriduzzaman Sourov",
    title: "Founder & CEO",
  },
  {
    src: "https://live.staticflickr.com/65535/53040338895_995c27c62c_n.jpg",
    name: "Rakibul Hasan",
    title: "Co-Founder & CTO",
  },
  {
    src: "https://live.staticflickr.com/65535/53040348310_a87b9535de_n.jpg",
    name: "Sirajuddin Siyam",
    title: "Director",
  },
  {
    src: "https://live.staticflickr.com/65535/52591141306_5c10c001a3_w.jpg",
    name: "Shubhro Dev Mohonto",
    title: "Director",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid
      container
      sx={{ alignItem: "center", justifyContent: "center", gap: "20px", mt: 5 }}
    >
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 280, backgroundColor: "#E4EBFE", py: 3, px: 5, textAlign: "center" }}>
          {item ? (
            <img
              style={{ width: 120, height: 120, borderRadius: "50%" }}
              alt={item.name}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={200} height={200} />
          )}

          {item ? (
            <Box>
              <Typography gutterBottom variant="body1" sx={{fontWeight: "500"}} >
                {item.name}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.title}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function OurTeam() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Media />
    </Box>
  );
}
