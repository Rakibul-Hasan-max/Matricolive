import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const data = [
  {
    src: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000",
    name: "Md Foriduzzaman Sourov",
    title: "Founder & CEO",
  },
  {
    src: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
    name: "Rakibul Hasan",
    title: "Founder & CTO",
  },
  {
    src: "https://t4.ftcdn.net/jpg/02/87/35/99/360_F_287359914_HU3P7rhmyJMyyhBBcILcWd2S7DDwkJSs.jpg",
    name: "Shubhro Dev Mohonto",
    title: "Content Creator",
  },
  {
    src: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
    name: "Md Siyam",
    title: "Graphic Designer",
  },
  {
    src: "https://cdn.webshopapp.com/shops/50297/files/404926835/image.jpg",
    name: "Md Imran Khan",
    title: "Digital Marketer",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid
      container
      wrap="nowrap"
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
