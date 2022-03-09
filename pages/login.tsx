import React from 'react';

import {
  Box,
  Button,
  IconButton,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import Footer from '../components/base/footer';
import Header from '../components/base/header';

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 4.5rem - 15.5rem)',
    width: '20rem',
    margin: '0 auto',
  },
  desc: {
    marginBottom: '2rem',
  },
  input: {
    marginBottom: '1rem',
  },
  loginButton: {
    backgroundColor: '#1D1D1D',
    marginBottom: '1rem',
    '&:hover': {
      backgroundColor: '#1D1D1D',
    },
  },
  service: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '2rem',
    '& div + div': {
      borderLeft: '1px solid #000000',
    },
  },
  serviceButton: {
    fontSize: '0.875rem',
    padding: '0 0.5rem',
  },
  snsLogin: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  snsLoginContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& button + button': {
      marginLeft: '1rem',
    },
  },
  iconButton: {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'crimson',
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.loginForm}>
        <Typography variant="h6">안녕하세요.</Typography>
        <Typography variant="h6" className={classes.desc}>
          베비북스 입니다.
        </Typography>
        <OutlinedInput
          size="small"
          className={classes.input}
          placeholder="아이디를 입력해 주세요."
        ></OutlinedInput>
        <OutlinedInput
          size="small"
          className={classes.input}
          placeholder="비밀번호를 입력해 주세요."
        ></OutlinedInput>
        <Button
          className={classes.loginButton}
          variant="contained"
          color="info"
        >
          로그인
        </Button>
        <Box className={classes.service}>
          <Box className={classes.serviceButton}>아이디 찾기</Box>
          <Box className={classes.serviceButton}>비밀번호 찾기</Box>
          <Box className={classes.serviceButton}>회원 가입</Box>
        </Box>
        <Typography className={classes.snsLogin}>간편 로그인</Typography>
        <Box className={classes.snsLoginContainer}>
          <IconButton className={classes.iconButton}></IconButton>
          <IconButton className={classes.iconButton}></IconButton>
          <IconButton className={classes.iconButton}></IconButton>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
