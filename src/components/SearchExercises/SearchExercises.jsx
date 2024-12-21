import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="2px" justifyContent="center" p="20px">
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
        Awesome Exercises You Should Know
      </Typography>

      <Box
        position="relative"
        mt="38px"
        mb="72px"
        
        sx={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%', 
          borderRadius: '40px',
          border:"none",
        }}
      >
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              padding: '12px 20px', 
              transition: 'box-shadow 0.3s ease, transform 0.3s ease', 
              '&:hover': {
                border:'2px solid #11998e',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
              },
              '&:focus': {
                outline: 'none', 
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
              },
            },
            width: { lg: '770px', xs: '350px' },
            backgroundColor: '#f8f8f8',
            transition: 'border-color 0.3s ease', 
            '&:hover': {
              borderColor: '#11998e', 
            },
            '&:focus-within': {
              borderColor: '#38ef7d', 
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
            className="search-btn"
            sx={{
              bgcolor: '#11998e', 
              color: '#fff',
              textTransform: 'none',
              width: { lg: '173px', xs: '80px' },
              height: '56px',
              fontSize: { lg: '20px', xs: '14px' },
              borderRadius: '40px',
              ml: { xs: '10px', lg: '20px' }, 
              transition: 'background-color 0.3s ease, transform 0.3s ease', 
              '&:hover': {
                bgcolor: 'linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)', 
                transform: 'scale(1.05)', 
              },
              '&:active': {
                transform: 'scale(1)', 
              },
              '&:focus': {
                outline: 'none',
              },
            }}
            fontWeight="900"
            onClick={handleSearch}
          >
            Search
      </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px',display:"flex" }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;