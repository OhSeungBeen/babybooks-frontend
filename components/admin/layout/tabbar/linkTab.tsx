import React from 'react';
import { useDispatch } from 'react-redux';
import { Tab, Box, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { TabsAction } from '../../../../redux/actions';
import { TabInfo } from '../../../../types';
import PlainLink from '../../../common/plainLink';

export interface LinkTabProps {
  tab: TabInfo;
}

const useStyles = makeStyles({
  labelContainer: {
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
  },
});

const LinkTab: React.FC<any> = (props) => {
  const { tab } = props;
  const classes = useStyles();

  const dispatch = useDispatch();
  const onDeleteTab = (e: React.SyntheticEvent, tab: TabInfo) => {
    e.stopPropagation();
    dispatch(TabsAction.deleteTab(tab.id));
  };

  return (
    <PlainLink href={tab.url}>
      <Tab
        {...props}
        label={
          <Box className={classes.labelContainer}>
            <Typography variant="body2">{tab.label}</Typography>
            <Close onClick={(e) => onDeleteTab(e, tab)} />
          </Box>
        }
      />
    </PlainLink>
  );
};

export default LinkTab;
