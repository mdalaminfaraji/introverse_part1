import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Home, Menu } from "@mui/icons-material";
import { BsFillTagFill } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ModeSwitch from "../../utils/ModeSwitch";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "95%", sm: "95%", md: "1300px" },
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
            src="../../../public/images/logo.png"
            alt="interiorVerse Logo"
            style={{ maxWidth: "150px" }}
          />
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              fontWeight: "bold",
              color: "white",
              fontSize: { xs: "20px", sm: "25px", md: "30px" },
              lineHeight: 0.8,
            }}
          >
            interiorVerse <br />
            <span style={{ fontSize: "16px", lineHeight: 0.5 }}>
              by interioXr™
            </span>
          </Typography>
        </Box>

        {isSmallScreen ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleDrawerToggle}
                onKeyDown={handleDrawerToggle}
              >
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <AiOutlineInfoCircle />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <BsFillTagFill />
                    </ListItemIcon>
                    <ListItemText primary="Pricing" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CgArrowTopRight />
                    </ListItemIcon>
                    <ListItemText primary="interioXr" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CgArrowTopRight />
                    </ListItemIcon>
                    <ListItemText primary="WebApp" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CgArrowTopRight />
                    </ListItemIcon>
                    <ListItemText primary="ios/Android" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
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
            {!isMediumScreen && (
              <>
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
                {isLargeScreen && (
                  <>
                    <Button
                      sx={styleButton}
                      variant="contained"
                      startIcon={<CgArrowTopRight />}
                    >
                      ios/Android
                    </Button>
                    <Button
                      sx={styleButton}
                      variant="contained"
                      startIcon={<Home />}
                    >
                      Contact Us
                    </Button>
                  </>
                )}
              </>
            )}
            <ModeSwitch />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
