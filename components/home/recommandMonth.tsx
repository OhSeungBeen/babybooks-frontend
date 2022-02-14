import React from 'react';

import { ArrowForwardIos } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
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
    listPrice: '30,000',
    price: '10,000',
    image: '/1.png',
  },
  {
    id: 2,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '20,000',
    price: '10,000',
    image: '/2.png',
  },
  {
    id: 3,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '50,000',
    price: '10,000',
    image: '/1.png',
  },
  {
    id: 4,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '20,000',
    price: '10,000',
    image: '/3.png',
  },
  {
    id: 5,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '20,000',
    price: '10,000',
    image: '/2.png',
  },
  {
    id: 6,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '100,000',
    price: '10,000',
    image: '/1.png',
  },
  {
    id: 10,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '20,000',
    price: '10,000',
    image: '/2.png',
  },
  {
    id: 11,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    listPrice: '20,000',
    price: '10,000',
    image: '/2.png',
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: '8rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    '& button': {
      color: theme.palette.primary.main,
    },
    '& h5': {
      fontWeight: '600',
    },
  },
  card: {
    borderRadius: '10px',
    '& img': {
      borderRadius: '10px',
    },
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '0.4rem',
  },
  author: {
    textAlign: 'center',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  saleInfo: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '0.4rem',
  },
  listPrice: {
    textDecoration: 'line-through',
    color: theme.palette.primary.main,
    fontWeight: '600',
    fontSize: '0.9rem',
    marginRight: '0.3rem',
  },
  sale: {
    color: theme.palette.error.main,
    fontWeight: '600',
  },
  price: { textAlign: 'center', fontWeight: '600' },
}));

const RecommandMonth: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h5">이 달의 추천 도서</Typography>
        <Button variant="text" endIcon={<ArrowForwardIos />}>
          전체보기
        </Button>
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
                  <Box className={classes.saleInfo}>
                    <Typography className={classes.listPrice}>
                      {book.listPrice}원
                    </Typography>
                    <Typography className={classes.sale}>
                      {Math.floor(
                        ((Number(book.listPrice.replace(',', '')) -
                          Number(book.price.replace(',', ''))) /
                          Number(book.listPrice.replace(',', ''))) *
                          100
                      )}
                      %
                    </Typography>
                  </Box>
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
  );
};

export default RecommandMonth;
