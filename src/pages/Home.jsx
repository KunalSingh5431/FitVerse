import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises/SearchExercises';
import Exercise from '../components/Exercise/Exercises';
import Footer from '../components/Footer';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Stack sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', margin: 0 }}>
        <HeroBanner />
        <Box sx={{background: 'linear-gradient(to bottom, #f0f4c3, #b2ebf2)'}}>
        <SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercise exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      </Box>
      <Footer/>
    </Stack>
  );
};

export default Home;
