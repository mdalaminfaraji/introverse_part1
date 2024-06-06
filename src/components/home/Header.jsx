import { Box, Button, Typography } from "@mui/material";

import { BsFillTagFill } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import ModeSwitch from "../../utils/ModeSwitch";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Home } from "@mui/icons-material";
const Header = () => {
  const styleButton = {
    boxShadow: "5rem 2 6 1rem #7F1DFF",
    backgroundColor: "#7F1DFF",
    borderRadius: "14px",
    color: "white",
    textTransform: "capitalize",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "white",
      borderColor: "#0062cc",
      color: "#7F1DFF",
    },
    "&:active": {
      boxShadow: 5,
      backgroundColor: "white",
      borderColor: "white",
    },
    "&:focus": {
      boxShadow: "0 0 0 .2rem #7F1DFF",
      borderColor: "white",
    },
  };
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: "100%", md: "1300px" },
        height: "90px",
        mx: "auto",
        borderRadius: "35px",
        px: 3,
        background: "linear-gradient(45deg, #3C0089, #9747FF)",
        boxShadow: "0px 10px 20px rgb(48, 79, 254, .3)", // Spread box shadow
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logo.png"
            alt="interiorVerse Logo"
            style={{ maxWidth: "150px" }}
          />
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              fontWeight: "bold",
              color: "white",
              fontSize: { xs: "20px", sm: "25px", md: "30px", lineHeight: 0.8 }, // Responsive font size
            }}
          >
            interiorVerse <br />
            <span style={{ fontSize: "16px", lineHeight: 0.5 }}>
              by interioXr™
            </span>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
          <Button sx={styleButton} variant="contained" startIcon={<Home />}>
            Home
          </Button>
          <Button
            sx={styleButton}
            variant="contained"
            startIcon={<AiOutlineInfoCircle />}
          >
            About Us
          </Button>
          <Button
            sx={styleButton}
            variant="contained"
            startIcon={<BsFillTagFill />}
          >
            Pricing
          </Button>
          <Button
            sx={styleButton}
            variant="contained"
            startIcon={<CgArrowTopRight />}
          >
            interioXr
          </Button>
          <Button
            sx={styleButton}
            variant="contained"
            startIcon={<CgArrowTopRight />}
          >
            WebApp
          </Button>
          <Button
            sx={styleButton}
            variant="contained"
            startIcon={<CgArrowTopRight />}
          >
            ios/Android
          </Button>
          <Button sx={styleButton} variant="contained" startIcon={<Home />}>
            Contact Us
          </Button>
          <ModeSwitch />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import PriceCheckIcon from "@mui/icons-material/PriceCheck";
// import WebIcon from "@mui/icons-material/Web";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

// const Header = () => {
//   const [darkMode, setDarkMode] = React.useState(false);

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         background: "linear-gradient(45deg, #3b0077, #ab47bc)",
//         boxShadow: "none",
//         padding: 1,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <img
//             src="/path/to/logo.png"
//             alt="interiorVerse"
//             style={{ height: 40, marginRight: 10 }}
//           />
//           <Typography variant="h6" noWrap>
//             interiorVerse by interioXr™
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <Button
//             startIcon={<HomeIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             Home
//           </Button>
//           <Button
//             startIcon={<InfoIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             About Us
//           </Button>
//           <Button
//             startIcon={<PriceCheckIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             Pricing
//           </Button>
//           <Button
//             startIcon={<WebIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             interioXr
//           </Button>
//           <Button
//             startIcon={<WebIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             WebApp
//           </Button>
//           <Button
//             startIcon={<PhoneIphoneIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             iOS/Android
//           </Button>
//           <Button
//             startIcon={<ContactMailIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: "20px",
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton onClick={handleThemeChange} color="inherit">
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
