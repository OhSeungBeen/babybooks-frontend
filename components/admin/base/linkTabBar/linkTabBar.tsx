import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChevronLeft, Menu } from '@mui/icons-material';
import { Box, IconButton, Tabs, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { RootState } from '../../../../modules';
import { setShowSideBar } from '../../../../modules/app';
import { Tab, changeTab } from '../../../../modules/tabs';
import LinkTab from './linkTab';

const useStyles = makeStyles((theme: Theme) => ({
  tabBarContainer: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },

  sidebarButton: {
    // margin: '0px 8px',
  },
}));

const LinkTabBar: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const sideBar = useSelector((state: RootState) => state.app.sideBar);
  const tabs = useSelector((state: RootState) => state.tabs);

  const onChangeTab = (e: React.SyntheticEvent, index: number) => {
    dispatch(changeTab(index));
  };

  const onClickSidebar = () => {
    dispatch(setShowSideBar(!sideBar.isShow));
  };

  return (
    <Box className={classes.tabBarContainer}>
      <IconButton onClick={onClickSidebar} className={classes.sidebarButton}>
        {sideBar.isShow ? <ChevronLeft /> : <Menu />}
      </IconButton>
      <Tabs
        value={tabs.index}
        onChange={onChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        selectionFollowsFocus
        allowScrollButtonsMobile
      >
        {tabs.data.map((tab: Tab, index: number) => (
          <LinkTab key={index} url={tab.url} index={index} title={tab.title} />
        ))}
      </Tabs>
    </Box>
  );
};

export default LinkTabBar;
