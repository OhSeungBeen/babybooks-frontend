import Link from 'next/link';
import React from 'react';

import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    background: '#fffbf4',
    height: '15.5rem',
  },
  container: {
    display: 'flex',
    padding: '1.5rem 0px',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1.5,
  },
  right: {
    flex: 1,
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    fontSize: '0.9rem',
    '& li': {
      display: 'inline-block',
      '& a': {
        textDecoration: 'none',
        color: '#000',
      },
    },
    '& li + li': {
      paddingLeft: '0.5rem',
      marginLeft: '0.5rem',
    },
  },
  linkListBetween: {
    '& li + li': {
      borderLeft: '1px solid',
    },
  },
  infoList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '0.9rem',
    '& li + li': {
      margin: '0.25rem 0',
    },
  },
  copyRight: { fontSize: '0.9rem' },
  info: {
    fontSize: '1rem',
    fontWeight: '600',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container className={classes.container} maxWidth="md">
        <Box className={classes.left}>
          <ul className={`${classes.linkList} ${classes.linkListBetween}`}>
            <li>
              <Link href="#">이용약관</Link>
            </li>
            <li>
              <Link href="#">개인정보처리방침</Link>
            </li>
            <li>
              <Link href="#">사업자정보확인</Link>
            </li>
          </ul>
          <Typography className={classes.info}>(주)베비북스</Typography>
          <ul className={classes.infoList}>
            <li>대표: 대표명 | 사업자 등록번호: 000-00-00000</li>
            <li>
              통신판매신고번호:2021-서울송파-0000 | 호스팅사업자:(주)베비북스
            </li>
            <li>개인정보 관리책임자: 강영석(kangyoungsuk93@gamil.com)</li>
          </ul>
          <Typography className={classes.copyRight}>
            CopyRightⓒ서비스명 All rights reserved. FAX : 02-0000-0000
          </Typography>
        </Box>
        <Box className={classes.right}>
          <ul className={classes.linkList}>
            <li>
              <Link href="#">자주묻는질문</Link>
            </li>
            <li>
              <Link href="#">인스타그램</Link>
            </li>
            <li>
              <Link href="#">페이스북</Link>
            </li>
            <li>
              <Link href="#">플러스친구</Link>
            </li>
          </ul>
          <Typography className={classes.info}>고객센터:0000-0000</Typography>
          <ul className={classes.infoList}>
            <li>영업시간 : 평일 09:00~18:00(주말·공휴일 휴무)</li>
            <li>점심시간: 12:30~13:30</li>
            <li>고객문의 : kangyoungsuk93@gamil.com</li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
