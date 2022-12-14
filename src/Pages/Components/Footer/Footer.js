import { Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo2 from "../../../images/logo2.png";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  if (!location?.pathname?.includes("dashboard"))
    return (
      <Box
        className="footer"
        sx={{
          backgroundColor: "#0D0D0D",
          border: "1px solid black",
          overflow: "hidden",
          color: "inherit",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Box>
                <Box>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={logo2}
                    alt="logo"
                  />
                </Box>
                <Box sx={{mt: 4}}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#fff", textAlign: "left" }}
                  >
                    Connect with our social network
                  </Typography>
                  <Box sx={{ display: "flex", mt: 2, color: "#fff" }}>
                    <Link
                      href="https://www.facebook.com/matricolive"
                      color="inherit"
                    >
                      <Box
                        className="footer-icon"
                        sx={{
                          marginRight: 1,
                          border: "1px solid gray",
                          padding: "3px 5px",
                        }}
                      >
                        <FaFacebookF />
                      </Box>
                    </Link>
                    <Link
                      href="https://www.instagram.com/matricolive/"
                      color="inherit"
                    >
                      <Box
                        className="footer-icon"
                        sx={{
                          marginRight: 1,
                          border: "1px solid gray",
                          padding: "3px 5px",
                        }}
                      >
                        <FaInstagram />
                      </Box>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/matricolive/"
                      color="inherit"
                    >
                      <Box
                        className="footer-icon"
                        sx={{
                          marginRight: 1,
                          border: "1px solid gray",
                          padding: "3px 5px",
                        }}
                      >
                        <FaLinkedin />
                      </Box>
                    </Link>
                    <Link
                      href="https://www.youtube.com/@matricolive"
                      color="inherit"
                    >
                      <Box
                        className="footer-icon"
                        sx={{
                          marginRight: 1,
                          border: "1px solid gray",
                          padding: "3px 5px",
                        }}
                      >
                        <FaYoutube />
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{ color: "#fff" }}>
              <Typography variant="h6" sx={{ fontSize: 25, textAlign: "left" }}>
                About Us
              </Typography>
              <Typography
                variant="body2"
                sx={{ my: 3, textAlign: "left", fontSize: 12 }}
              >
                Here we are ready to provide you with the best quality product
                from our own production. If you need any product, feel free to
                inbox us with the product code and place your order.
              </Typography>
              {/* <NavLink to="/home" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#336699 !important",
                    borderRadius: "0 !important",
                    py: 1,
                    px: 3,
                  }}
                >
                  More About Us
                </Button>
              </NavLink> */}
            </Grid>
            <Grid item xs={12} md={6} sx={{ color: "#fff" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontSize: 25 }}>
                      Quick Link
                    </Typography>
                    <ul style={{ marginTop: "24px" }}>
                      <li>
                        <Typography variant="caption">Home</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Shop</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Blog</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">
                          Terms & conditions
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Contact Us</Typography>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontSize: 25 }}>
                      Careers
                    </Typography>
                    <ul style={{ marginTop: "24px" }}>
                      <li>
                        <Typography variant="caption">
                          Content Writer
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Video Editor</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">
                          Digital Marketer
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="caption">
                          Graphic Designer
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="caption">IT Expert</Typography>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontSize: 25 }}>
                      Our Service
                    </Typography>
                    <ul style={{ marginTop: "24px" }}>
                      <li>
                        <Typography variant="caption">E-Commerce</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Production</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Home Delivery</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">
                          Company Outlet
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="caption">IT Service</Typography>
                      </li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "left", mt: 5 }}>
            <hr />
            <Typography variant="caption" sx={{ color: "#fff" }}>
              Copyright ?? 2023 Matricolive, All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
};

export default Footer;
