import { ArrowBackIosNew, ArrowForwardIos, Pause } from '@mui/icons-material';
import { Box, IconButton, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const sliderItem = [
  { id: 1, src: '/1.png' },
  { id: 2, src: '/2.png' },
  { id: 3, src: '/3.png' },
];

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: 'calc(50vh + 2.25rem)',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  wrapper: {
    height: '50vh',
    display: 'flex',
    transition: 'transform 1s ease',
    transform: ({ index }: { index: number }) =>
      `translateX(${index * -100}vw)`,
  },
  slide: {
    position: 'relative',
    width: '100vw',
    height: '100%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    zIndex: '2',
  },
  button: {
    margin: '0 1.2rem',
    backgroundColor: '#fff',
    borderRadius: '50%',
    color: theme.palette.primary.main,
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  pause: {
    width: '4.5rem',
    height: '4.5rem',
    padding: '0px',
    color: '#000',
    border: '3px solid transparent',
    borderRadius: '50%',
    backgroundImage:
      'linear-gradient(#fff, #fff), linear-gradient(to top, #ff5050 0%,  #ffff55 100%)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
  },
  image: { width: '100%', height: '100%', position: 'relative' },
}));

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const classes = useStyles({ index });

  const timeout = useRef(null);

  useEffect(() => {
    console.log('a');
    console.log(timeout.current);
    const nextSlide = () => {
      setIndex(index < sliderItem.length - 1 ? index + 1 : 0);
    };
    timeout.current = setTimeout(nextSlide, 2000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [timeout.current]);

  const onSlide = (direction: string) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (direction === 'left') {
      setIndex(index > 0 ? index - 1 : sliderItem.length - 1);
    } else if (direction === 'right') {
      setIndex(index < sliderItem.length - 1 ? index + 1 : 0);
    }
  };

  const onPause = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.buttonContainer}>
        <IconButton className={classes.button} onClick={() => onSlide('left')}>
          <ArrowBackIosNew />
        </IconButton>
        <IconButton
          className={`${classes.button} ${classes.pause}`}
          onClick={onPause}
        >
          <Pause />
        </IconButton>
        <IconButton className={classes.button} onClick={() => onSlide('right')}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Box className={classes.wrapper}>
        {sliderItem.map((item) => (
          <Box key={item.id} className={classes.slide}>
            <Image layout="fill" objectFit="cover" src={item.src}></Image>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
