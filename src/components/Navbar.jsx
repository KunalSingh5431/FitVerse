import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/images/logo.avif';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      justifyContent="space-between" 
      alignItems="center" 
      sx={{
        gap: { sm: "32px", xs: "15px" },
        px: "20px",
        background: "linear-gradient(90deg, #11998e, #38ef7d)",

        padding: "10px 20px",
        borderRadius: "2px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link>
        <img 
          src={logo} 
          alt="Fit" 
          style={{
            width: "90px",
            height: "90px",
            margin: "0 20px",
            borderRadius: "50%",
            border: "4px solid #FF2625", 
            transition: "transform 0.3s ease", 
          }} 
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"} 
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        />
      </Link>
      <Stack 
        direction="row" 
        gap="58px" 
        mr={10}
        fontSize="34px" 
        alignItems="center"
        sx={{
          '& a': {
            textDecoration: "none",
            color: "white",
            fontWeight: "900",
            fontFamily:'sans-serif',
            padding: "5px 0",
            transition: "all 0.3s ease", 
          },
          '& a:hover': {
            color: "#E63946", 
          }
        }}
      >
        <Link to="/">Home</Link>
        <a href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

