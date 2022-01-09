import React from 'react';
import { Theme } from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { makeStyles } from '@mui/styles';
import { alpha, styled } from '@mui/material/styles';
import { MinusSquare, PlusSquare } from './listCustomIcon';

const useStyles = makeStyles((theme: Theme) => ({
  endIcon: {
    fontWeight: 'bold',
    color: `${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} />
))(({ theme }) => ({
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
}));

const CategoryList: React.FC = () => {
  const classes = useStyles();

  return (
    <TreeView
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<div className={classes.endIcon}>―</div>}
    >
      <StyledTreeItem nodeId="1" label="Main">
        <StyledTreeItem nodeId="2" label="Hello" />
        <StyledTreeItem nodeId="3" label="Subtree with children">
          <StyledTreeItem nodeId="6" label="Hello" />
          <StyledTreeItem nodeId="7" label="Sub-subtree with children">
            <StyledTreeItem nodeId="9" label="Child 1" />
            <StyledTreeItem nodeId="10" label="Child 2" />
            <StyledTreeItem nodeId="11" label="Child 3" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="8" label="Hello" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" label="World" />
        <StyledTreeItem nodeId="5" label="Something something" />
      </StyledTreeItem>
    </TreeView>
  );
};

export default CategoryList;
