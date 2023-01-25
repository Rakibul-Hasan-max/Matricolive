import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import PaymentIcon from "@mui/icons-material/Payment";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mood";

const Slides = () => {
  return (
    <Box>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={1}
        // spaceBetween={30}
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              //   border: "1px solid #E5B8F4",
              //   padding: "25px 0px",
              //   margin: "20px 70px 60px 70px",
              //   rowGap: "50px",
            }}
          >
            <Box
              sx={{
                width: "200px",
                paddingRight: "20px",
                // borderRight: "1px solid #E5B8F4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <LocalShippingIcon sx={{ color: "#336699" }} fontSize="large" />
              <Box>
                <Typography variant="body1">Free Delivery</Typography>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  For all orders over ৳5000
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "200px",
                padding: "0 20px",
                // borderRight: "1px solid #E5B8F4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <ManageHistoryIcon sx={{ color: "#336699" }} fontSize="large" />
              <Box>
                <Typography variant="body1">30 Days Return</Typography>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  If goods have problems
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "200px",
                padding: "0 20px",
                // borderRight: "1px solid #E5B8F4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PaymentIcon sx={{ color: "#336699" }} fontSize="large" />
              <Box>
                <Typography variant="body1">Secure Payment</Typography>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  100% secure payment
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "200px",
                padding: "0 20px",
                // borderRight: "1px solid #E5B8F4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PermPhoneMsgIcon sx={{ color: "#336699" }} fontSize="large" />
              <Box>
                <Typography variant="body1">24/7 Support</Typography>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Dedicated support
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "200px",
                paddingLeft: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <RedeemIcon sx={{ color: "#336699" }} fontSize="large" />
              <Box>
                <Typography variant="body1">Gift Service</Typography>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Support gift service
                </Typography>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slides;
