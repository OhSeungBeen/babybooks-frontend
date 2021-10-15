import React from "react";
import { Box, Button, Tab, Tabs, Theme } from "@mui/material";
import { State, TabInfo } from "../../../types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { TabsAction } from "../../../redux/actions";

let tabId = 0;

function TabBar(props: any) {
  const { tabs, dispatch } = props;

  const useStyles = makeStyles((theme: Theme) => ({
    tabBar: {
      width: "100%",
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
    },
  }));

  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, index: number) => {
    dispatch(TabsAction.changeTab(index));
  };

  const addTab = () => {
    dispatch(TabsAction.addTab({ label: "TAB" + tabId, id: String(tabId++) }));
  };

  const deleteTab = (event: React.SyntheticEvent) => {
    if (event.target instanceof Element) {
      event.stopPropagation();
      dispatch(TabsAction.deleteTab(event.target.id));
    }
  };

  const tabItems = tabs.items.map((tab: TabInfo) => (
    <Tab
      key={tab.id}
      label={tab.label}
      icon={
        <Button id={tab.id} onClick={deleteTab}>
          X
        </Button>
      }
    />
  ));

  return (
    <Box className={classes.tabBar}>
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
