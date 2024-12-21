import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from '../Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          fontWeight: 700,
          color: '#000',
          mb: '33px',
          textAlign: 'center',
        }}
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack
        sx={{
          flexDirection: 'row', 
          justifyContent: 'space-between',
          flexWrap: 'no-wrap', 
          gap: '30px', 
          alignItems: 'center',
        }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              width: 'calc(33.33% - 20px)', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 2,
                height: '100%',
                '&:hover img': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
            </Box>
            <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: { lg: '20px', xs: '16px' },
                  fontWeight: 600,
                  color: '#000',
                  mb: '5px',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#FF2625',
                  },
                }}
              >
                {item.video.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#4F4C4C',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#FF2625',
                  },
                }}
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
