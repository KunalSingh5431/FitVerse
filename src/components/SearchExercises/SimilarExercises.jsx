import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from '../Loader';
import HorizontalScrollbarExerciseDetails from '../HorizontalScrollbarExerciseDetails';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises }) => {

  return (
    <Box sx={{ mt: { lg: '100px', xs: '20px' }, px: '20px' }}>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          fontWeight: 700,
          color: '#000',
          mb: '20px',
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>

      <Stack
        direction="row"
        sx={{
          p: 2,
          position: 'relative',
          justifyContent: 'flex-start',
          overflowX: 'auto',
          gap: '20px',
          textAlign: 'center',
          
        }}
      >
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbarExerciseDetails 
            data={targetMuscleExercises}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          fontWeight: 700,
          color: '#000',
          mb: '20px',
          textAlign: 'center',
          mt: { lg: '100px', xs: '60px' },
          lineHeight: 1.2,
        }}
      >
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: 2,
          position: 'relative',
          justifyContent: 'center',  
          overflowX: 'auto',
          gap: '20px',
          alignItems: 'center',
          textAlign: 'center', 
        }}
      >
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbarExerciseDetails
            data={equipmentExercises}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
