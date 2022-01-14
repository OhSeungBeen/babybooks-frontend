import React from 'react';
import { Category } from 'pages/admin/category';
import CustomTreeView from './customTreeView';
import CustomTreeItem from './customTreeItem';

interface CateogryListProps {
  categoryTree: Category[];
  onNodeSelect: (e: React.SyntheticEvent, id: Array<string> | string) => void;
}

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  treeView: {
    minHeight: '34rem',
    maxHeight: '34rem',
    overflow: 'auto',
    border: 'solid 1px',
    padding: '1rem',
  },
});

const CategoryList: React.FC<CateogryListProps> = ({
  categoryTree,
  onNodeSelect,
}) => {
  const classes = useStyles();

  const renderCategoryTree = (categoryTree: Category[]) =>
    categoryTree.map((categoryTreeItem: Category) => (
      <CustomTreeItem
        key={categoryTreeItem.id}
        nodeId={categoryTreeItem.id}
        label={categoryTreeItem.name}
      >
        {Array.isArray(categoryTreeItem.children)
          ? renderCategoryTree(categoryTreeItem.children)
          : null}
      </CustomTreeItem>
    ));

  return (
    <CustomTreeView
      defaultExpanded={['root']}
      className={classes.treeView}
      onNodeSelect={onNodeSelect}
    >
      <CustomTreeItem nodeId="root" label={'전체 카테고리'}>
        {renderCategoryTree(categoryTree)}
      </CustomTreeItem>
    </CustomTreeView>
  );
};

export default CategoryList;
