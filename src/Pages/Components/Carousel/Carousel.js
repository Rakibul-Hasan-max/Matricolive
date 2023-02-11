import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "./slider.json";

function banner() {
  return (
    <Carousel sx={{ pt: {xs: "55px", sm: "0px", md: "0px"} }}>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default banner;
