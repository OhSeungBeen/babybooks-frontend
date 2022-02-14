import React from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const books = [
  {
    id: 1,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/3.png',
  },
  {
    id: 2,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/1.png',
  },
  {
    id: 3,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/2.png',
  },
  {
    id: 4,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/3.png',
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: '4rem',
    '& h5': {
      fontWeight: '500',
      marginBottom: '1rem',
    },
    '& p': {
      textAlign: 'center',
    },
  },
}));

const Event: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h5">베비북스만의 이벤트</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="200" image="/2.png" alt="" />
            </CardActionArea>
          </Card>
          <Typography variant="body1">
            2022 베비북스와 함께하는 다양한 혜택을 지금 바로 확인해보세요.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="200" image="/3.png" alt="" />
            </CardActionArea>
          </Card>
          <Typography variant="body1">
            2022 베비북스와 함께하는 다양한 혜택을 지금 바로 확인해보세요.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Event;
