import React from 'react';

import { LockOutlined, PersonOutline, Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#ffff',
    color: '#000',
    height: '4.5rem',
  },
  container: {
    height: '100%',
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    flex: 1,
    padding: '0px',
  },
  logo: {
    fontWeight: '600',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      fontWeight: '500',
      color: '#000',
    },
  },
  menuWrapper: {
    marginRight: '1rem',
    '& button': {
      marginRight: '1rem',
    },
  },
  iconMenuWrapper: {
    '& svg': {
      fontSize: '1.8rem',
    },
  },
});

const pages = [
  '상품',
  'MD추천',
  '이벤트',
  '고객센터',
  '장바구니',
  '마이페이지',
];

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.container} maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.logo}
            variant="h6"
            noWrap
            component="div"
          >
            베비북스
          </Typography>
          <Box className={classes.menu}>
            <Box className={classes.menuWrapper}>
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box className={classes.iconMenuWrapper}>
              <IconButton>
                <Search />
              </IconButton>
              <IconButton>
                <PersonOutline />
              </IconButton>
              <IconButton>
                <LockOutlined />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
