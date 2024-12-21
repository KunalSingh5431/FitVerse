import React, { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import left from '../assets/icons/left-arrow.png';
import right from '../assets/icons/right-arrow.png'
import Icon from '../assets/icons/gym.png';

const HorizontalScrollbarExerciseDetails = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      if (direction === 'left') {
        scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const notify = () => {
    toast.warn(
      <>
        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '5px', color: '#FF5733' }}>
          Under Maintenance
        </Typography>
      </>,
      {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        icon: "🚧",
      }
    );
  };


  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            backgroundColor: 'transparent',
            minWidth: '40px',
            height: '40px',
            borderRadius: '50%',
            padding: 0,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' },
          }}
        >
          <img
            src={left}
            alt="Left Arrow"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          />
        </Button>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'scroll',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            '& > div': {
              flex: '0 0 auto',
              marginRight: '20px',
            },
            padding: '10px 0',
            width: '100%',
          }}
        >
          {data.map((exercise) => (
            <Box
              key={exercise.id || exercise.name || exercise}
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                padding: '10px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => notify()}
            >
              <img
                src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: '20px',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'capitalize',
                  color: '#555',
                }}
              >
                {exercise.name}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            backgroundColor: 'transparent',
            minWidth: '40px',
            height: '40px',
            borderRadius: '50%',
            padding: 0,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' },
          }}
        >
          <img
            src={right}
            alt="Right Arrow"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          />
        </Button>
      </Box>

      <ToastContainer />
    </>
  );
};

export default HorizontalScrollbarExerciseDetails;
