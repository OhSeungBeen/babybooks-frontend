import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Close } from '@mui/icons-material';
import { Box, Tab, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { deleteTab } from '../../../../modules/tabs';
import PlainLink from '../../../common/plainLink';

interface LinkTabPorps {
  index: number;
  title: string;
  url: string;
}

const useStyles = makeStyles({
  labelContainer: {
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
  },
});

const LinkTab: React.FC<any> = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onDeleteTab = (e: React.SyntheticEvent, index: number) => {
    e.persist();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    dispatch(deleteTab(index));
  };

  return (
    <PlainLink href={props.url}>
      <Tab
        {...props}
        label={
          <Box className={classes.labelContainer}>
            <Typography variant="body2">{props.title}</Typography>
            <Close onClick={(e) => onDeleteTab(e, props.index)} />
          </Box>
        }
      />
    </PlainLink>
  );
};

export default LinkTab;
