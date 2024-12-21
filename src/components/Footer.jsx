import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#283593', 
      color: '#fff', 
      textAlign: 'center',
      padding: '40px 0',
      position: 'relative',
      bottom: 0,
      width: '100%',
    }}
  >
    {/* Stack for organizing footer content */}
    <Stack spacing={3}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px' }}>
        Connect with me
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={5}>
        <Link
          href="https://github.com/KunalSingh5431"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#fff',
            fontSize: '24px',
            textDecoration:"none",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '&:hover': {
              color: '#ff6e7f',
            },
          }}
        >
          <i className="bx bxl-github" style={{ fontSize: '24px' }}></i>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/kunalsingh5431"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#fff',
            fontSize: '24px',
            textDecoration:"none",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '&:hover': {
              color: '#ff6e7f',
            },
          }}
        >
          <i className="bx bxl-linkedin" style={{ fontSize: '24px' }}></i>
          LinkedIn
        </Link>
        <Link
          href="mailto:kunalsingh5431@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#fff',
            fontSize: '24px',
            textDecoration:"none",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '&:hover': {
              color: '#ff6e7f',
            },
          }}
        >
          <i className="bx bxs-envelope" style={{ fontSize: '24px' }}></i>
          Email
        </Link>
      </Stack>
    </Stack>

    <Box sx={{ mt: 4 }}>
      <Typography variant="body2" sx={{ mb: 1 , fontSize:"24px",}}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#fff',
            fontSize:"24px",
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Kunal Singh
        </Link>{' '}
        © {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" sx={{ fontSize:"18px",}}>
        All rights reserved.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
