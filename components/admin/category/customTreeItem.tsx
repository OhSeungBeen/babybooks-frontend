import React from 'react';
import { Theme, Typography } from '@mui/material';
import { TreeItem } from '@mui/lab';
import {
  TreeItemProps,
  treeItemClasses,
  useTreeItem,
  TreeItemContentProps,
} from '@mui/lab/TreeItem';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import clsx from 'clsx';

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

const CustomContent = React.forwardRef(function CustomContent(
  props: TreeItemContentProps,
  ref
) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    preventSelection(event);
  };

  const handleExpansionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleSelection(event);
  };

  return (
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
      })}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
      </div>
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
      >
        {label}
      </Typography>
    </div>
  );
});

const CustomTreeItem: React.FC<TreeItemProps> = (props) => {
  const classes = useStyles();

  return (
    <TreeItem
      ContentComponent={CustomContent}
      className={classes.treeItem}
      {...props}
    />
  );
};

export default CustomTreeItem;
