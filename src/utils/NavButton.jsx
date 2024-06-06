import { Button } from "@mui/material";
import { Home } from "@mui/icons-material";

const NavButton = () => {
  return (
    <Button
      sx={{
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
      }}
      variant="contained"
      startIcon={<Home />}
    >
      Home
    </Button>
  );
};

export default NavButton;
