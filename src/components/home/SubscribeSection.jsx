// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardMedia,
//   Grid,
// } from "@mui/material";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// const SubscribeSection = () => {
//   return (
//     <Box
//       sx={{
//         maxWidth: "1324px",
//         mx: "auto",
//         my: "68px",
//         height: "100vh",
//         padding: "2rem",
//         backgroundColor: "#1F0037",
//         color: "white",
//         borderRadius: "190px",
//         position: "relative",
//       }}
//     >
//       <Box

//       >
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           sx={{ mt: { md: "110px" }, px: { md: 5 } }}
//         >
//           <Grid item xs={12} md={6}>
//             <Card
//               sx={{
//                 borderRadius: "20px",
//                 boxShadow: "none",
//                 background: "none",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image="../../../public/images/subscribeImage.png"
//                 alt="Room Image"
//                 sx={{ borderRadius: "20px" }}
//               />
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
//             <Typography
//               variant="h1"
//               sx={{
//                 fontWeight: "500",
//                 textShadow: "1px 1px 3px white",
//               }}
//             >
//               Subscribe To Our Updates
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "1rem",
//                 marginBottom: "1.5rem",
//                 fontSize: "1.2rem",
//                 lineHeight: "1.5",
//               }}
//             >
//               Stay in the loop with latest
//               <br /> developments as we welcome
//               <br /> the future, together.
//             </Typography>
//             <Button
//               variant="text"
//               startIcon={<PlayCircleOutlineIcon />}
//               sx={{
//                 color: "white",
//                 textTransform: "none",
//                 marginBottom: "1.5rem",
//               }}
//             >
//               View Past Newsletters
//             </Button>
//             <Box sx={{ position: "relative" }}>
//               <TextField
//                 variant="outlined"
//                 placeholder="Email Address"
//                 size="small"
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: "50px",
//                   marginRight: "1rem",
//                   width: "70%",
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderRadius: "50px",
//                     },
//                   },
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 size="small"
//                 sx={{
//                   borderRadius: "50px",
//                   position: "absolute",
//                   right: 5,
//                   textTransform: "none",
//                   fontWeight: "bold",
//                   padding: "0.60rem 1.5rem",
//                   background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
//                   "&:hover": {
//                     background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
//                   },
//                 }}
//               >
//                 Sign Up! ➜
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//         <Box
//           sx={{
//             width: "310px",
//             height: "6px",
//             bgcolor: "white",
//             mx: "auto",
//             borderRadius: "5px",
//             mt: { md: 5 },
//             position: "absolute",
//             bottom: "5%",
//             left: "40%",
//           }}
//         ></Box>
//       </Box>
//     </Box>
//   );
// };

// export default SubscribeSection;

import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import subscribeImage from "../../../public/images/subscribeImage.png"; // Make sure to use correct path

const SubscribeSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1324px",
        mx: "auto",
        my: { xs: "40px", sm: "50px", md: "68px" },
        height: "auto",
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        backgroundColor: "#1F0037",
        color: "white",
        borderRadius: { xs: "30px", sm: "50px", md: "190px" },
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ mt: { md: "110px" }, px: { md: 5 } }}
      >
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: "20px",
              boxShadow: "none",
              background: "none",
            }}
          >
            <CardMedia
              component="img"
              image={subscribeImage}
              alt="Room Image"
              sx={{ borderRadius: "20px", width: "100%" }}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              textShadow: "1px 1px 3px white",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            }}
          >
            Subscribe To Our Updates
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "1rem",
              marginBottom: "1.5rem",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              lineHeight: "1.5",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            Stay in the loop with latest
            <br /> developments as we welcome
            <br /> the future, together.
          </Typography>
          <Button
            variant="text"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              color: "white",
              textTransform: "none",
              marginBottom: "1.5rem",
            }}
          >
            View Past Newsletters
          </Button>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email Address"
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "50px",
                width: { xs: "60%", sm: "70%", md: "70%" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "50px",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "50px",
                marginLeft: { xs: "0.5rem", md: "1rem" },
                textTransform: "none",
                fontWeight: "bold",
                padding: { xs: "0.5rem 1rem", sm: "0.6rem 1.5rem" },
                background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
                "&:hover": {
                  background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
                },
              }}
            >
              Sign Up! ➜
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "310px",
          height: "6px",
          bgcolor: "white",
          mx: "auto",
          borderRadius: "5px",
          mt: { xs: 3, md: 5 },
          position: "absolute",
          bottom: { xs: "3%", md: "5%" },
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></Box>
    </Box>
  );
};

export default SubscribeSection;
