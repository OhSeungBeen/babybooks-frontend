import { ArrowForwardIos, HorizontalRule } from '@mui/icons-material';
import {
  Box,
  Typography,
  Button,
  Theme,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const books = [
  {
    id: 1,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/1.png',
  },
  {
    id: 2,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/2.png',
  },
  {
    id: 3,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/3.png',
  },
  {
    id: 4,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/3.png',
  },
  {
    id: 5,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/1.png',
  },
  {
    id: 6,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/2.png',
  },
  {
    id: 7,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/3.png',
  },
  {
    id: 8,
    title: '아들과 아버지(단비어린이 문학)(양장본)',
    author: '이정록 | 단비어린이',
    price: '10,000',
    image: '/1.png',
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
  mainCard: {
    marginTop: '3rem',
    borderRadius: '10px',
    '& img': {
      borderRadius: '10px',
    },
    '& h5': {
      fontWeight: '500',
      textAlign: 'center',
    },
    '& h6': {
      textAlign: 'center',
      marginBottom: '1.2rem',
    },
  },
  carousel: {
    width: '70%',
    margin: 'auto',
  },
  cardContainer: {
    display: 'flex',
  },
  card: {
    margin: '0.5rem',
  },
  title: {
    fontSize: '0.8rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '0.4rem',
  },
  price: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '0.8rem',
  },
  author: {
    textAlign: 'center',
    fontSize: '0.675rem',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      color: theme.palette.primary.main,
    },
  },
}));

const Exhibition: React.FC = () => {
  const classes = useStyles();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const carouselItems: number = books.length > 4 ? 4 : books.length;
    const items: Array<JSX.Element> = [];
    for (let i = 0; i < books.length; i += carouselItems) {
      if (i % carouselItems === 0) {
        items.push(
          <Box className={classes.cardContainer}>
            {books.slice(i, i + carouselItems).map((book) => (
              <Card key={book.id} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
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
            ))}
          </Box>
        );
      }
    }
    setItems(items);
  }, [books]);

  return (
    <Box className={classes.container}>
      <Box className={classes.info}>
        <Typography variant="h4">베비북스 기획전</Typography>
        <Typography variant="subtitle1">
          베비북스와 함께하는 기획전
          <br />
          여러 작가님들의 작품을 만나보세요!
        </Typography>
      </Box>
      <Card className={classes.mainCard}>
        <CardMedia component="img" height="230" image="/1.png" alt="" />
        <CardContent>
          <Typography variant="h5">이정록 작가님의 베스트셀러</Typography>
          <Typography variant="subtitle1">
            작가님의 이달의 신작 기대되죠?
          </Typography>
          <Carousel
            navButtonsAlwaysInvisible
            className={classes.carousel}
            IndicatorIcon={<HorizontalRule />}
          >
            {items}
          </Carousel>
          <Box className={classes.footer}>
            <Button variant="text" endIcon={<ArrowForwardIos />}>
              전체보기
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Exhibition;
