import { ArrowForwardIos } from '@mui/icons-material';
import {
  Box,
  Typography,
  Button,
  Theme,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

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
  card: {
    marginTop: '3rem',
    borderRadius: '10px',
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
    display: 'flex',
    width: '50%',
    margin: 'auto',
    overflow: 'auto',
  },
  carouselItem: {
    minWidth: 'calc(100% / 3)',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      color: theme.palette.primary.main,
    },
  },
}));

const Exhibition = () => {
  const classes = useStyles();
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
      <Card className={classes.card}>
        <CardMedia component="img" height="230" image="/1.png" alt="" />
        <CardContent>
          <Typography variant="h5">이정록 작가님의 베스트셀러</Typography>
          <Typography variant="subtitle1">
            작가님의 이달의 신작 기대되죠?
          </Typography>
          <Box className={classes.carousel}>
            <Box className={classes.carouselItem}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="/1.png"
                    alt=""
                  />
                  <CardContent>aaaaaaaaaaaaaaaaaaa</CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box className={classes.carouselItem}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="/1.png"
                    alt=""
                  />
                  <CardContent>aaaaaaaaaaaaaaaaaaa</CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box className={classes.carouselItem}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="/1.png"
                    alt=""
                  />
                  <CardContent>aaaaaaaaaaaaaaaaaaa</CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box className={classes.carouselItem}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="/1.png"
                    alt=""
                  />
                  <CardContent>aaaaaaaaaaaaaaaaaaa</CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Exhibition;
