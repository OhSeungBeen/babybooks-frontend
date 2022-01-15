import React from 'react';
import { Category } from 'pages/admin/category';
import CustomTreeView from './customTreeView';
import CustomTreeItem from './customTreeItem';

interface CateogryListProps {
  categories: Category[];
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
  categories,
  onNodeSelect,
}) => {
  const classes = useStyles();

  const renderCategoryTree = (categories: Category[]) =>
    categories.map((category: Category) => (
      <CustomTreeItem
        key={category.id}
        nodeId={category.id}
        label={`${category.name} ${category.data ? category.data.use : 'x'}  `}
      >
        {category.children ? renderCategoryTree(category.children) : null}
      </CustomTreeItem>
    ));

  return (
    <CustomTreeView
      defaultExpanded={['root']}
      className={classes.treeView}
      onNodeSelect={onNodeSelect}
    >
      <CustomTreeItem nodeId="root" label={'전체 카테고리'}>
        {renderCategoryTree(categories)}
      </CustomTreeItem>
    </CustomTreeView>
  );
};

export default CategoryList;
