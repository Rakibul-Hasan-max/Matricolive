import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../images/logo.png";
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
                <Box sx={{ marginLeft: -10 }}>
                  <img
                    style={{ width: "162.5px", height: "auto" }}
                    src={logo}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#fff", textAlign: "left" }}
                  >
                    Make your life easier with us
                  </Typography>
                  <Box sx={{ display: "flex", mt: 5, color: "#fff" }}>
                    <Box className="footer-icon" sx={{marginRight: 1, border: "1px solid gray", padding: "3px 5px"}}>
                      <FaFacebookF />
                    </Box>
                    <Box className="footer-icon" sx={{marginRight: 1, border: "1px solid gray", padding: "3px 5px"}}>
                      <FaInstagram />
                    </Box>
                    <Box className="footer-icon" sx={{marginRight: 1, border: "1px solid gray", padding: "3px 5px"}}>
                      <FaTwitter />
                    </Box>
                    <Box className="footer-icon" sx={{marginRight: 1, border: "1px solid gray", padding: "3px 5px"}}>
                      <FaYoutube />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ color: "#fff" }}>
              <Typography variant="h6" sx={{ fontSize: 25, textAlign: "left" }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ my: 3, textAlign: "left", fontSize: 12 }}>
                Here we are ready to provide you with the best quality product
                from our own production. If you need any product, feel free to
                inbox us with the product code and place your order.
              </Typography>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#f42828 !important",
                    borderRadius: "0 !important",
                    py: 1,
                    px: 3,
                    ml: -33,
                  }}
                >
                  More About Us
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={12} md={4} sx={{ color: "#fff" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
              Copyright © 2023 Matricolive, All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
};

export default Footer;
