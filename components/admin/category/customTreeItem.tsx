import React from 'react';
import { Theme } from '@mui/material';
import { TreeItem } from '@mui/lab';
import { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  treeItem: {
    ['& .MuiTreeItem-content']: {
      padding: 0,
    },
    [`& .${treeItemClasses.iconContainer}`]: {
      '& .close': {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      borderLeft: `2px solid ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  },
}));

const CustomTreeItem: React.FC<TreeItemProps> = (props) => {
  const classes = useStyles();

  return <TreeItem className={classes.treeItem} {...props} />;
};

export default CustomTreeItem;
