import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const data = [
  {
    src: "https://live.staticflickr.com/65535/52590653572_0bbdc6fd9a_w.jpg",
    name: "Md Foriduzzaman Sourov",
    title: "Founder & CEO",
  },
  {
    src: "https://live.staticflickr.com/65535/52590630127_5434b566a0_n.jpg",
    name: "Rakibul Hasan",
    title: "Co-Founder & CTO",
  },
  {
    src: "https://live.staticflickr.com/65535/52591141416_1788a82454_w.jpg",
    name: "Md Siyam",
    title: "Graphic Designer",
  },
  {
    src: "https://live.staticflickr.com/65535/52591141306_5c10c001a3_w.jpg",
    name: "Shubhro Dev Mohonto",
    title: "Content Creator",
  },
  {
    src: "https://live.staticflickr.com/65535/52590653737_06dc97e484_w.jpg",
    name: "Md Imran Khan",
    title: "Digital Marketer",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid
      container
      sx={{ alignItem: "center", justifyContent: "center", gap: "20px", mt: 2 }}
    >
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 200 }}>
          {item ? (
            <img
              style={{ width: 200, height: 240 }}
              alt={item.name}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={200} height={200} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
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
