import React, { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { resetServerContext, DropResult } from 'react-beautiful-dnd';
import AdminLayout from 'components/admin/layout';
import CategoryVisibleRow from 'components/admin/category/categoryVisibleRow';
import CategoryNameRow from 'components/admin/category/categoryNameRow';
import CategoryHeader from 'components/admin/category/categoryHeader';
import CategoryListFilter from 'components/admin/category/categoryListFilter';
import CategoryList from 'components/admin/category/categoryList';
import CategoryRowItem from 'components/admin/category/categoryRowItem';
import CategoryDateRow from 'components/admin/category/categoryDateRow';
import CategoryAdd from 'components/admin/category/categoryAdd';
import CategoryLayout from 'components/admin/category/categoryLayout';
import CategoryVisibleTypeRow from 'components/admin/category/categoryVisibleTypeRow';

interface Category {
  code: string;
  name: string;
  visible: boolean;
  use: boolean;
  menuVisibleType: string;
  titleVisibleType: string;
  cornerNumber: string;
  registerId: string;
  modifierId: string;
  registeredDate: string;
  modifiedDate: string;
}

export interface CategoryListItem {
  parentId?: string;
  id: string;
  name: string;
  children?: CategoryListItem[];
  category?: Category;
}

export interface LayoutCategory {
  id: string;
  name: string;
}

const initCategoryList: CategoryListItem[] = [
  {
    id: '1',
    name: '카테고리1',
    children: [
      {
        parentId: '1',
        id: '1-1',
        name: '카테고리1-1',
        children: [
          {
            parentId: '1-1',
            id: '1-1-1',
            name: '카테고리1-1-1',
            category: {
              code: '01000001',
              name: '카테고리1-1-1',
              visible: true,
              use: false,
              menuVisibleType: 'text',
              titleVisibleType: 'image',
              cornerNumber: '3',
              registerId: 'Tes***1',
              modifierId: 'Tes***1',
              registeredDate: 'YYYY-MM-DD',
              modifiedDate: 'YYYY-MM-DD',
            },
          },
        ],
      },
      {
        id: '1-2',
        name: '카테고리1-2',
        children: [
          {
            parentId: '1-2',
            id: '1-2-1',
            name: '카테고리1-2-1',
            category: {
              code: '01000002',
              name: '카테고리1-2-1',
              visible: true,
              use: false,
              menuVisibleType: 'text',
              titleVisibleType: 'image',
              cornerNumber: '3',
              registerId: 'Tes***1',
              modifierId: 'Tes***1',
              registeredDate: 'YYYY-MM-DD',
              modifiedDate: 'YYYY-MM-DD',
            },
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '카테고리2',
    children: [
      {
        parentId: '2',
        id: '2-1',
        name: '카테고리2-1',
        category: {
          code: '01000003',
          name: '카테고리2-1',
          visible: true,
          use: false,
          menuVisibleType: 'text',
          titleVisibleType: 'image',
          cornerNumber: '3',
          registerId: 'Tes***1',
          modifierId: 'Tes***1',
          registeredDate: 'YYYY-MM-DD',
          modifiedDate: 'YYYY-MM-DD',
        },
      },
      {
        parentId: '2-1',
        id: '2-2',
        name: '카테고리2-2',
        children: [
          {
            parentId: '2-2',
            id: '2-2-1',
            name: '카테고리2-2-1',
            category: {
              code: '01000004',
              name: '카테고리2-2-1',
              visible: true,
              use: false,
              menuVisibleType: 'text',
              titleVisibleType: 'image',
              cornerNumber: '3',
              registerId: 'Tes***1',
              modifierId: 'Tes***1',
              registeredDate: 'YYYY-MM-DD',
              modifiedDate: 'YYYY-MM-DD',
            },
          },
        ],
      },
    ],
  },
];

const initLayoutCategories: LayoutCategory[] = [
  { id: '1', name: '메인이미지' },
  { id: '2', name: '베스트상품' },
  { id: '3', name: '추천상품' },
  { id: '4', name: '광고배너' },
  { id: '5', name: '분야별 추천 도서' },
  { id: '6', name: '공지사항' },
  { id: '7', name: '기획전' },
];

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  categoryList: {
    flex: 1,
    padding: '1rem',
    border: 'solid 1px',
  },
  cateogoryInfo: {
    flex: 2,
    padding: '1rem',
    border: 'solid 1px',
  },
});

const CategoryPage = () => {
  const classes = useStyles();

  const [categoryList, setCategoryList] = useState(initCategoryList);
  const [category, setCategory] = useState({
    code: '',
    name: '',
    visible: false,
    use: false,
    menuVisibleType: '',
    titleVisibleType: '',
    cornerNumber: '',
    registerId: '',
    modifierId: '',
    registeredDate: '',
    modifiedDate: '',
  });
  const [open, setOpen] = useState(false);
  const [categoryNames, setCategoryNames] = useState(['']);
  const [layoutCategories, setLayoutCategories] =
    useState(initLayoutCategories);

  const onAdd = useCallback(
    (index: number) => {
      if (categoryNames.length < 10) {
        setCategoryNames([
          ...categoryNames.slice(0, index + 1),
          '',
          ...categoryNames.slice(index + 1),
        ]);
      }
    },
    [categoryNames]
  );

  const onDelete = useCallback(
    (index: number) => {
      if (categoryNames.length > 1) {
        setCategoryNames([
          ...categoryNames.slice(0, index),
          ...categoryNames.slice(index + 1),
        ]);
      }
    },
    [categoryNames]
  );

  const onInputChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      index: number
    ) => {
      setCategoryNames([
        ...categoryNames.slice(0, index),
        e.target.value,
        ...categoryNames.slice(index + 1),
      ]);
    },
    [categoryNames]
  );

  const onConfirm = useCallback(() => {
    setOpen(false);
    setCategoryNames(['']);
  }, [open, categoryNames]);

  const onCancel = useCallback(() => {
    setOpen(false);
    setCategoryNames(['']);
  }, [open, categoryNames]);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const onEdit = () => {};

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      const newLayout = Array.from(layoutCategories);
      const [removed] = newLayout.splice(destination.index, 1);
      newLayout.splice(source.index, 0, removed);
      setLayoutCategories(newLayout);
    },
    [layoutCategories]
  );

  const onLayoutDelete = useCallback(
    (index: number) => {
      setLayoutCategories([
        ...layoutCategories.slice(0, index),
        ...layoutCategories.slice(index + 1),
      ]);
    },
    [layoutCategories]
  );

  const foundCategoryListItem = (
    categoryList: CategoryListItem[],
    id: string
  ): CategoryListItem => {
    let result;
    categoryList.map((categoryListItem) => {
      if (categoryListItem.id === id) {
        return (result = categoryListItem);
      } else {
        if (Array.isArray(categoryListItem.children)) {
          let found = foundCategoryListItem(categoryListItem.children, id);
          if (found !== undefined) {
            return (result = found);
          }
        }
      }
    });
    return result;
  };

  const onNodeSelect = useCallback(
    (e: React.SyntheticEvent, nodeId: string) => {
      if (nodeId === '0') {
        return;
      }
      const categoryListItem = foundCategoryListItem(categoryList, nodeId);
      if (categoryListItem.category) {
        setCategory(categoryListItem.category);
      }
    },
    [categoryList]
  );

  const onMenuVisibleChange = () => {};
  const onMenuUseChange = () => {};

  return (
    <Box className={classes.container}>
      <Box className={classes.categoryList}>
        <CategoryHeader
          title="전시카테고리"
          buttonText="추가"
          onButtonClick={onOpen}
        />
        <CategoryListFilter />
        <CategoryList categoryTree={categoryList} onNodeSelect={onNodeSelect} />
      </Box>
      <Box className={classes.cateogoryInfo}>
        <CategoryHeader
          title="카테고리 정보"
          buttonText="수정"
          description="*표시항목은 필수 입력항목입니다."
          onButtonClick={onEdit}
        />
        <CategoryNameRow code={category.code} name={category.name} />
        <CategoryVisibleRow
          visible={category.visible}
          use={category.use}
          onMenuVisibleChange={onMenuVisibleChange}
          onMenuUseChange={onMenuUseChange}
        />
        <CategoryVisibleTypeRow
          title="메뉴노출유형"
          visibleType={category.menuVisibleType}
        />
        <CategoryVisibleTypeRow
          title="타이틀노출유형"
          visibleType={category.titleVisibleType}
        />
        <CategoryRowItem
          title="전시코너수"
          content={category.cornerNumber}
        ></CategoryRowItem>
        <CategoryDateRow
          registerId={category.registerId}
          registeredDate={category.registeredDate}
          modifierId={category.modifierId}
          modifiedDate={category.modifiedDate}
        />
        <CategoryLayout
          categories={layoutCategories}
          onDragEnd={onDragEnd}
          onDelete={onLayoutDelete}
        />
      </Box>
      <CategoryAdd
        open={open}
        categoryNames={categoryNames}
        onAdd={onAdd}
        onDelete={onDelete}
        onInputChange={onInputChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

CategoryPage.layout = AdminLayout;
export default CategoryPage;
