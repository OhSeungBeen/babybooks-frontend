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
    width: '30.6875rem',
    margin: '0 auto',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '26px',
    marginBottom: '60px',
  },
  input: {
    height: '55px',
    marginBottom: '10px',
    '& + &': {
      marginBottom: '30px',
    },
  },
  loginButton: {
    height: '55px',
    backgroundColor: '#1D1D1D',
    marginBottom: '40px',
    '&:hover': {
      backgroundColor: '#1D1D1D',
    },
  },
  service: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  serviceButton: {
    '& + &': {
      marginLeft: '44px',
    },
  },
  snsLoginWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '42px',
    '& hr': {
      width: '156px',
    },
  },
  snsLogin: {},
  snsLoginContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& button + button': {
      marginLeft: '80px',
    },
  },
  snsLoginButton: {
    minWidth: '52px',
    height: '52px',
    padding: '0',
    boxShadow: '5px 5px 10px #00000033',
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.loginForm}>
        <Typography variant="h6" className={classes.title}>
          안녕하세요.
          <br />
          베비북스입니다.
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
        <Box className={classes.snsLoginWrapper}>
          <hr />
          <Typography className={classes.snsLogin}>간편 로그인</Typography>
          <hr />
        </Box>
        <Box className={classes.snsLoginContainer}>
          <Button className={classes.snsLoginButton}></Button>
          <Button className={classes.snsLoginButton}></Button>
          <Button className={classes.snsLoginButton}></Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
