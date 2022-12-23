import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const data = [
  {
    src: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000",
    title: "Md Foriduzzaman Sourov",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
    title: "Rakibul Hasan",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://t4.ftcdn.net/jpg/02/87/35/99/360_F_287359914_HU3P7rhmyJMyyhBBcILcWd2S7DDwkJSs.jpg",
    title: "Shubhro Dev Mohonto",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
  {
    src: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
    title: "Md Siyam",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
  {
    src: "https://cdn.webshopapp.com/shops/50297/files/404926835/image.jpg",
    title: "Md Imran Khan",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 200 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
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
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}
