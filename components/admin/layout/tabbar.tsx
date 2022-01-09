import { Close } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";
import { TabsAction } from "redux/actions";
import { connectState } from "redux/store";
import { ComponentProps, TabInfo } from "types";

let tabId = 0;

function TabBar(props: ComponentProps): ReactElement {
  const { state, dispatch } = props;
  const useStyles = makeStyles((theme: Theme) => ({
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

  const tabItems = state.tabs.items.map((tab: TabInfo) => (
    <Tab
      key={tab.id}
      label={
        <Box>
          <span>{tab.label}</span>
          {state.tabs.items.length > 1 ? (
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
      <Tabs
        value={state.tabs.index}
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

export default connectState(TabBar);
