import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  if (!exerciseDetail) return <Typography>Loading exercise details...</Typography>;
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart ? bodyPart : 'Unknown Body Part',
    },
    {
      icon: TargetImage,
      name: target ? target : 'Unknown Target',
    },
    {
      icon: EquipmentImage,
      name: equipment ? equipment : 'Unknown Equipment',
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        p: '20px',
        alignItems: 'center',
        background: '#f8f8f8',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: 4,
          '&:hover img': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        {gifUrl ? (
          <img
            src={gifUrl}
            alt={name || 'exercise'}
            loading="lazy"
            className="detail-image"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        ) : (
          <Typography>No image available</Typography>
        )}
      </Box>

      <Stack sx={{ gap: { lg: '35px', xs: '20px' }, flex: 2, textAlign: 'center' }}>
        <Typography
          sx={{ fontSize: { lg: '64px', xs: '30px' }, fontWeight: 700, textTransform: 'capitalize', color: '#1976d2' }}
        >
          {name || 'Unknown Exercise'}
        </Typography>

        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>
            {name || 'exercise'}
          </span>{' '}
          is one of the best exercises to target your{' '}
          {target || 'target area'}. It will help you improve your mood and gain energy.
        </Typography>

        {extraDetail.map((item, index) => (
          <Stack
            key={`${item.name}-${index}`}
            direction="row"
            gap="24px"
            alignItems="center"
            sx={{
              '&:hover': {
                transform: 'translateY(-5px)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Button
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                transition: 'background 0.3s ease',
                '&:hover': {
                  background: '#f2e1a3',
                },
              }}
            >
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{
                fontSize: { lg: '30px', xs: '20px' },
                fontWeight: 600,
                color: '#333',
                '&:hover': {
                  color: '#1976d2',
                  cursor: 'pointer',
                },
              }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
