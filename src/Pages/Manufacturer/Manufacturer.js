import { Box } from "@mui/system";
import image from "../../images/coming-soon.jpg";
import Dense from "../Components/Dense/Dense";

const Manufacturer = () => {
  return (
    <Box>
      <Dense />
      <Box>
        <img src={image} alt="" style={{ width: "100%", maxHeight: "100%" }} />
      </Box>
    </Box>
  );
};

export default Manufacturer;