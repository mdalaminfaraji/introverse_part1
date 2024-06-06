/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { CgMail } from "react-icons/cg";
import { PiPhoneCallThin } from "react-icons/pi";
import bgImage from "../../../public/images/footerImagebg.png";
import { IoLocationOutline } from "react-icons/io5";
import { styled } from "@mui/system";
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "24px",
    backgroundColor: "#fff",

    width: "296px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#ccc",
  },
}));
const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          backgroundColor: "#f3e8f3",
          pt: "110px",
          pb: 5,
          backgroundImage: `url(${bgImage})`, // Replace with actual path
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0px -5px 15px rgba(0,0,0,0.1)",
          mt: "-40px",
          borderEndStartRadius: "80px",
          borderEndEndRadius: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Column 1: Logo and Description */}
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ textAlign: { xs: "left" } }}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src="../../../public/images/logo.png"
                    alt="interiorVerse Logo"
                    style={{ maxWidth: "150px" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      color: "#3C0089",
                      lineHeight: 0.8,
                      fontSize: "30px",
                    }}
                  >
                    interiorVerse <br />
                    <span style={{ fontSize: "16px", lineHeight: 0.5 }}>
                      by interioXr™
                    </span>
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, color: "#808080", textAlign: "justify" }}
                >
                  Welcome to interiorVerse, where design dreams come to life in
                  breathtaking virtual reality! Step into a world of
                  hyper-realistic and fully immersive VR walkthroughs that
                  redefine how we envision and create interior spaces. Welcome
                  to interiorVerse – where your dream spaces await!
                </Typography>
              </Box>
            </Grid>

            {/* Column 2: Get in Touch */}
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ textAlign: { xs: "left" } }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Get in Touch
                </Typography>
                <Box sx={{ mt: 2, display: "flex" }}>
                  <IoLocationOutline
                    style={{
                      color: "#3C0089",
                      width: "24px",
                      height: "24px",
                    }}
                  />{" "}
                  <Typography sx={{ color: "#808080", ml: 1 }}>
                    1004, 10th Floor, Galleria Mkt.,
                    <br /> DLF Phase IV, Gurugram
                  </Typography>
                </Box>

                <Box sx={{ mt: 2, display: "flex" }}>
                  <CgMail
                    style={{
                      color: "#3C0089",
                      width: "24px",
                      height: "24px",
                    }}
                  />{" "}
                  <Typography sx={{ color: "#808080", ml: 1 }}>
                    info@interioXr.com
                  </Typography>
                </Box>
                <Box sx={{ mt: 2, display: "flex" }}>
                  <PiPhoneCallThin
                    style={{
                      color: "#3C0089",
                      width: "24px",
                      height: "24px",
                    }}
                  />{" "}
                  <Typography sx={{ color: "#808080", ml: 1 }}>
                    +91 9560013324
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Column 3: Recent Posts */}
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ textAlign: { xs: "left" } }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Recent Posts
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={3}>
                    <img
                      src="../../../public/images/post1.png"
                      alt="Recent Post 1"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body1" sx={{ color: "#333333" }}>
                      {`"`}Designing in a New Dimension: Unleashing Your
                      Creativity with interiorVerse{`"`}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={3}>
                    <img
                      src="../../../public/images/post1.png"
                      alt="Recent Post 2"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body1" sx={{ color: "#333333" }}>
                      {`"`}The Future of Design Visualization: Embracing
                      Hyper-Realism with interiorVerse{`"`}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Column 4: Newsletter Signup */}
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ textAlign: { xs: "left" } }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Join Our Newsletter
                </Typography>
                <Typography
                  sx={{ color: "#808080", mt: 2, lineHeight: 1.5, pl: 2 }}
                >
                  {" "}
                  Your Email
                </Typography>
                <CustomTextField
                  variant="outlined"
                  placeholder="Enter Your Email"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 2,
                    width: "296px",
                    textTransform: "capitalize",
                    backgroundColor: "#7F1DFF",
                    fontWeight: "bold",
                    fontSize: "23px",
                    borderRadius: "25px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "#660066",
                      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
