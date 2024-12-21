import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from '../Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      try {
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        setExercises(exercisesData || []);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setExercises([]);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: '109px' },
        p: '20px',
        borderRadius: '8px',
      }}
      mt="50px"
    >
      <Typography
        fontWeight={900}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          textAlign: 'center',
          background: 'linear-gradient(90deg, #FF5722, #673AB7)',
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)', 
          },
        }}
      >
        Explore Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: '107px', xs: '50px' },
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
    <Stack
        sx={{
          mt: { lg: '114px', xs: '70px' },
          alignItems: 'center',
          '& .MuiPagination-root': {
            background: '#ffffff', 
            borderRadius: '20px',
            padding: '10px 20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          },
          '& .MuiPaginationItem-root': {
            color: '#333', 
            padding: '8px 16px', 
            borderRadius: '20px',
            transition: 'all 0.3s ease', 
            '&:hover': {
              backgroundColor: '#3f51b5', 
              color: '#fff',
              cursor: 'pointer', 
            },
            '&.Mui-selected': {
              backgroundColor: '#3f51b5', 
              color: '#fff', 
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            },
          },
        }}
      >
      {exercises.length > 9 && (
        <Pagination
          color="primary" 
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Stack>
    </Box>
  );
};

export default Exercises;
