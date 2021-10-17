import React from "react";
import { Box, Button, IconButton, Tab, Tabs, Theme } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { State, TabInfo } from "../../../types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { AppAction, TabsAction } from "../../../redux/actions";

let tabId = 0;

function TabBar(props: any) {
  const { app, tabs, dispatch } = props;
  const useStyles = makeStyles((theme: Theme) => ({
    navButton: {
      margin: "auto 0px auto 2px",
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "10px",
    },
    tabBar: {
      width: "100%",
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
    },
    tabClose: {
      verticalAlign: "middle",
    },
  }));

  const classes = useStyles();

  const setSideBar = () => {
    app.sideBar.isShow = !app.sideBar.isShow;
    dispatch(AppAction.setSideBar(app.sideBar));
  };

  const handleChange = (event: React.SyntheticEvent, index: number) => {
    dispatch(TabsAction.changeTab(index));
  };

  const addTab = () => {
    dispatch(TabsAction.addTab({ label: "TAB" + tabId, id: String(tabId++) }));
  };

  const deleteTab = (event: React.SyntheticEvent, tab: TabInfo) => {
    event.stopPropagation();
    dispatch(TabsAction.deleteTab(tab.id));
  };

  const tabItems = tabs.items.map((tab: TabInfo) => (
    <Tab
      key={tab.id}
      label={
        <Box>
          <span>{tab.label}</span>
          {tabs.items.length > 1 ? (
            <a
              className={classes.tabClose}
              onClick={(event) => deleteTab(event, tab)}
            >
              <Close />
            </a>
          ) : (
            ""
          )}
        </Box>
      }
    />
  ));

  return (
    <Box className={classes.tabBar}>
      <IconButton className={classes.navButton} onClick={setSideBar}>
        <Menu />
      </IconButton>
      <Tabs
        value={tabs.index}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabItems}
      </Tabs>
      <Button onClick={addTab}>ADD</Button>
    </Box>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
