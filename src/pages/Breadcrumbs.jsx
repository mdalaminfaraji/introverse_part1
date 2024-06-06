import { Box, Typography } from "@mui/material";
const Breadcrumbs = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: "white",
          mt: 5,
          fontSize: { xs: "16px", sm: "18px", md: "24px" },
          ml: { xs: 1, sm: 4, md: 7 },
          pl: { xs: 1, sm: 4, md: 7 },
          fontFamily: "Gilroy-Regular",
        }}
      >
        interiorVerse / About Us / iVr{"'"}s Showcase Series / SC05
      </Typography>
      <Typography
        sx={{
          color: "white",
          ml: { xs: 1, sm: 4, md: 7 },
          pl: { xs: 1, sm: 4, md: 7 },
          fontFamily: "Gilroy-Regular",
          lineHeight: { xs: "40px", sm: "60px", md: "100px" },
          fontSize: { xs: "36px", sm: "48px", md: "78px" },
          fontWeight: 400,
        }}
      >
        <Box component="span">Bakery/Pastry Shop</Box>
        <Box component="span" sx={{ fontWeight: "bold", ml: 1 }}>
          • SC05
        </Box>
      </Typography>
    </Box>
  );
};

export default Breadcrumbs;
