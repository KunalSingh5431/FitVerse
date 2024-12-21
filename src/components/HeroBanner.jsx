import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import video1 from '../assets/videos/video1.mp4';

const HeroBanner = () => {
  return (
    <Stack sx={{ width: '100%' }}>
      <Box
        sx={{
          mt: { lg: "2px", xs: "2px" },
          position: "relative",
          width: "100%",
          height: { xs: "90vh", sm: "80vh", lg: "90vh" },
          overflow: "hidden",
          margin: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(50%)",
          }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box sx={{ zIndex: 1, textAlign: "center", color: "white", padding: "20px" }}>
          <Typography
            color="#FF6F61"
            fontWeight="600"
            fontSize="80px"
            fontFamily='sans-serif'
            sx={{
              mt: 18,
              mb: 2,
              transition: "transform 0.3s ease, color 0.3s ease",
              '&:hover': {
                transform: "scale(1.1)",
              },
            }}
          >
            FitVerse 
          </Typography>
          <Typography
            fontWeight={600}
            sx={{
              fontSize: { lg: "65px", xs: "55px" },
              mb: 2,
              color: "#8BC34A",
              transition: "transform 0.3s ease, color 0.3s ease",
              '&:hover': {
                transform: "scale(1.1)",
              },
            }}
          >
            Sweat, Smile and Repeat
          </Typography>
          <Typography
            fontSize={30}
            lineHeight={1.5}
            mb={4}
            fontWeight={"bold"}
            sx={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              '&:hover': {
                transform: "translateY(-5px)",
                opacity: 0.8,
              },
            }}
          >
            "Check out the Most Effective Exercises"
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{
              backgroundColor: "crimson",
              fontSize: "18px",
              padding: "12px 30px",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              '&:hover': {
                backgroundColor: "#FF2625",
                transform: "scale(1.1)",
              },
              '&:active': {
                transform: "scale(1)",
              },
              '&:focus': {
                outline: "none",
              },
              cursor: 'pointer',
              width: 'auto',
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default HeroBanner;
