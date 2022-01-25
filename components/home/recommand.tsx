import {
  Box,
  Typography,
  Button,
  Theme,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

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
  },
  info: {
    marginTop: '3rem',
    '& h4': {
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '1.2rem',
    },
    '& h6': {
      fontWeight: '500',
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
  },
  content: {
    marginTop: '3rem',
    '& button': {
      color: '#000',
      borderColor: '#000',
      fontWeight: '600',
      fontSize: '0.95rem',
    },
    '& button + button': {
      marginLeft: '0.5rem',
    },
  },
  buttonList: {
    marginBottom: '1.2rem',
  },
  card: {
    boxShadow: 'none',
    borderRadius: '10px',
    '& img': {
      borderRadius: '10px',
    },
  },
  title: {
    fontWeight: '600',
    marginBottom: '0.4rem',
  },
  author: {
    fontSize: '0.875rem',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  price: { fontWeight: '600' },
}));

const Recommand: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="200" image="/2.png" alt="" />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="200" image="/3.png" alt="" />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Box className={classes.info}>
        <Typography variant="h4">관심있는 책도 딱 골라드려요!</Typography>
        <Typography variant="subtitle1">
          검색어 순위를 통해 뽑은
          <br />
          인기 분야 책들을 확인해보세요
        </Typography>
      </Box>
      <Box className={classes.content}>
        <Box className={classes.buttonList}>
          <Button variant="outlined">카테고리1</Button>
          <Button variant="outlined">카테고리2</Button>
          <Button variant="outlined">카테고리3</Button>
          <Button variant="outlined">카테고리4</Button>
        </Box>
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={book.id}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="230"
                    image={book.image}
                    alt=""
                  />
                  <CardContent>
                    <Typography className={classes.title}>
                      {book.title}
                    </Typography>
                    <Typography className={classes.author}>
                      {book.author}
                    </Typography>
                    <Typography className={classes.price}>
                      {book.price}원
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Recommand;
