import React, { useState } from 'react';
import { Drawer, Box, Theme, Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuTab from './menuTab';
import FavoritesTab from './favoritesTab';

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  curIndex: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  tabPanel: {
    width: '220px',
    boxSizing: 'border-box',
    margin: '10px auto',
    backgroundColor: theme.palette.secondary.main,
  },
  drawer: {
    width: '100%',
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    width: '100%',
    overflowX: 'hidden',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
}));

const TabPanel: React.FC<TabPanelProps> = ({ children, curIndex, index }) => {
  const classes = useStyles({});
  return (
    <Box className={classes.tabPanel} hidden={curIndex !== index}>
      {children}
    </Box>
  );
};

const Sidebar: React.FC = () => {
  const classes = useStyles({});

  const [curTabIndex, setCurTabIndex] = useState<number>(0);

  const onTabChange = (e: React.SyntheticEvent, index: number) => {
    setCurTabIndex(index);
  };

  return (
    <Drawer
      variant={'persistent'}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      open
    >
      <Tabs variant="fullWidth" value={curTabIndex} onChange={onTabChange}>
        <Tab label="전체 메뉴" />
        <Tab label="즐겨찾기" />
      </Tabs>
      <TabPanel curIndex={curTabIndex} index={0}>
        <MenuTab />
      </TabPanel>
      <TabPanel curIndex={curTabIndex} index={1}>
        <FavoritesTab />
      </TabPanel>
    </Drawer>
  );
};

export default Sidebar;
