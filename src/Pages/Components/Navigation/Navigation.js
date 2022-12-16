import { useLocation } from "react-router-dom";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const location = useLocation();
  if (!location?.pathname?.includes("dashboard"))
    return (
      <div>
        <img
          style={{
            width: "150px",
            backgroundColor: "#0D0D0D",
            padding: "5px 530px",
          }}
          src={logo}
          alt=""
        />
      </div>
    );
};

export default Navigation;
