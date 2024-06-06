import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import thumbanil from "../../../public/images/thumbanil.jpeg";

const VideoSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderRadius: "99px",
        height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
        mt: "51px",
        backgroundColor: "black",
        mb: "-100px",
        zIndex: 100,
        position: "relative",
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Card
        sx={{
          position: "relative",
          maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          zIndex: 100,
          borderRadius: 2,
          overflow: "hidden",
          "&:hover .MuiCardMedia-root": {
            opacity: 0.7,
          },
          "&:hover .playButton": {
            opacity: 1,
          },
        }}
      >
        <CardMedia
          component="img"
          image={thumbanil}
          alt="Video Thumbnail"
          sx={{
            width: "100%",
            height: "auto",
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
        />
        <IconButton
          className="playButton"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: { xs: 40, sm: 60, md: 80 },
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          onClick={() => {
            // Handle play button click, e.g., show video controls, start playback, etc.
          }}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Card>
    </Box>
  );
};

export default VideoSection;
