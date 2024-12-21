import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{marginTop:"20px",borderRadius:"20px",padding:"10px",height:'auto'}}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{borderRadius:"20px"}}/>
    <Stack direction="row" sx={{gap:"15px",alignItems: "center", justifyContent: "center"}} >
      <Button sx={{
              color: '#fff',
              background: 'linear-gradient(90deg, #FF8A00, #FF6F00)',
              fontSize: '14px',
              borderRadius: '20px',
              textTransform: 'capitalize',
              padding: '8px 16px',
              '&:hover': {
                background: 'linear-gradient(90deg, #FF6F00, #FF8A00)',
              },
            }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{
              color: '#fff',
              background: 'linear-gradient(90deg, #FF8A00, #FFC107)',
              fontSize: '14px',
              borderRadius: '20px',
              textTransform: 'capitalize',
              padding: '8px 16px',
              '&:hover': {
                background: 'linear-gradient(90deg, #FFC107, #FF8A00)',
              },
            }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography sx={{
            mt: '12px',
            color: '#333',
            fontWeight: 'bold',
            fontSize: { lg: '24px', xs: '20px' },
            textTransform: 'capitalize',
            textAlign:"center",
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              color: '#FF6F00',
              cursor: 'pointer',
            },
          }}
>
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
