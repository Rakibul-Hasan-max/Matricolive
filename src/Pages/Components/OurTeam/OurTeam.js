import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const data = [
  {
    src: "https://i.ibb.co/grQPFsz/sourov-removebg-preview.png",
    name: "Foriduzzaman Sourov",
    title: "Founder & CEO",
  },
  {
    src: "https://i.ibb.co/1MpxYqd/hasan.jpg",
    name: "Rakibul Hasan",
    title: "Co-Founder & CTO",
  },
  {
    src: "https://live.staticflickr.com/65535/52591141416_1788a82454_w.jpg",
    name: "Md Siyam",
    title: "Graphic Artist & Photographer",
  },
  {
    src: "https://live.staticflickr.com/65535/52591141306_5c10c001a3_w.jpg",
    name: "Shubhro Dev Mohonto",
    title: "Business Development Officer",
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
              style={{ width: 200, height: 200 }}
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
