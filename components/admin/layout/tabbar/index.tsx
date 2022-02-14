import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChevronLeft, Menu } from '@mui/icons-material';
import { Box, IconButton, Tabs, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { AppAction, TabsAction } from '../../../../redux/actions';
import { State } from '../../../../types';
import { TabInfo } from '../../../../types';
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

const TabBar: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const sidebar = useSelector((state: State) => state.app.sideBar);
  const tabs = useSelector((state: State) => state.tabs);

  const onTabsChange = (e: React.SyntheticEvent, index: number) => {
    dispatch(TabsAction.changeTab(index));
  };

  const onSidebarClick = () => {
    sidebar.isShow = !sidebar.isShow;
    dispatch(AppAction.setSideBar(sidebar));
  };

  return (
    <Box className={classes.tabBarContainer}>
      <IconButton onClick={onSidebarClick} className={classes.sidebarButton}>
        {sidebar.isShow ? <ChevronLeft /> : <Menu />}
      </IconButton>
      <Tabs
        value={tabs.index}
        onChange={onTabsChange}
        variant="scrollable"
        scrollButtons="auto"
        selectionFollowsFocus
        allowScrollButtonsMobile
      >
        {tabs.items.map((tab: TabInfo, index: number) => (
          <LinkTab key={index} tab={tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabBar;
