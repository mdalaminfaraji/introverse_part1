import { Container, Grid, Box, Typography } from "@mui/material";

const SweetDreamsSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundImage: "url(../../../public/images/image.png)", // Replace with actual path
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        borderRadius: "0 0 66px 66px",
        zIndex: 0,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: "89px",
            fontWeight: "bold",
            color: "#E6E6E6",
            pt: "100px",
          }}
        >
          Sweet Dreams Are Made Of This - The <br />
          <span style={{ color: "white" }}>Bakery/Pastry Shop</span> Showcase
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 3, borderRadius: "8px" }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "#E6E6E6",
                  fontSize: "24px",
                  lineHeight: "35px",
                  textAlign: "justify",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Welcome to the sweetest corner of the interiorVerse Showcase
                Collection. Our Bakery/Pastry Shop VR model is a charming blend
                of rustic charm and modern design, crafted to evoke the aroma of
                freshly baked goods and the warmth of a neighborhood bakery.
                Let’s take a delicious virtual journey through this delectable
                space, where every detail is designed to delight and inspire.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  my: 3,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Features & Highlights
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "#E6E6E6",
                  fontSize: "24px",
                  lineHeight: "35px",
                  textAlign: "justify",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Imagine stepping into a bakery where the comforting smell of
                freshly baked bread fills the air. Our Bakery/Pastry Shop
                captures that nostalgic essence, transporting you to a place
                where simplicity meets sophistication. The wooden shelves lined
                with pastries, the inviting display counter, and the cozy
                seating area create an environment that feels both familiar and
                enchanting.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  my: 3,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Features & Highlights
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "#E6E6E6",
                  fontSize: "24px",
                  lineHeight: "35px",
                  textAlign: "justify",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Our Bakery/Pastry Shop model offers a rich experience with:
                <ul>
                  <li>
                    Charming Decor: Rustic wooden accents and vintage-inspired
                    decor create a warm, welcoming atmosphere.
                  </li>
                </ul>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 3, borderRadius: "8px" }}>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "#E6E6E6",
                  fontSize: "24px",
                  lineHeight: "35px",
                  textAlign: "justify",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Inviting Display Counter: Showcasing an array of delicious
                pastries and baked goods, tempting you with every glance.
                <ul>
                  <li>
                    Cozy Seating Area: Perfect for enjoying a cup of coffee and
                    a pastry, with comfortable seating and charming tables.
                  </li>
                  <li>
                    Functional Kitchen: A behind-the-scenes look at the modern,
                    efficient kitchen where all the magic happens.
                  </li>
                </ul>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  my: 3,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Experience the Sweetness
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "#E6E6E6",
                  fontSize: "24px",
                  lineHeight: "35px",
                  textAlign: "justify",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                With interiorVerse, you can immerse yourself in this delightful
                bakery through our interactive VR walkthrough. Walk around the
                shop, explore the display cases, and even peek into the kitchen
                to see where the baking magic takes place. Feel the ambiance,
                visualize the layout, and get inspired by the charming details.
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "#E6E6E6",
                  fontSize: "24px",
                  lineHeight: "35px",
                  textAlign: "justify",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                Our Bakery/Pastry Shop showcase is more than just a virtual
                model. It{`'`}s an invitation to dream, create, and be inspired.
                Whether you{`'`}re savoring the sweet details or planning your
                own bakery venture, interiorVerse is here to bring your visions
                to life with stunning realism and immersive experiences. Dive
                into our showcase today and see how we can help you create your
                perfect space.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SweetDreamsSection;
