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

interface Data {
  code: string;
  visible: boolean;
  use: boolean;
  menuVisibleType: string;
  titleVisibleType: string;
  menuVisibleText: string;
  titleVisibleText: string;
  menuVisibleImage: string;
  titleVisibleImage: string;
  cornerNumber: string;
  registerId: string;
  modifierId: string;
  registeredDate: string;
  modifiedDate: string;
}

export interface Category {
  parentId?: string;
  id: string;
  name: string;
  children?: Category[];
  data?: Data;
  depth?: number;
}

export interface LayoutCategory {
  id: string;
  name: string;
}

const initCategories: Category[] = [
  {
    id: '1',
    name: '대카테고리1',
    children: [
      {
        parentId: '1',
        id: '1-1',
        name: '중카테고리1-1',
        children: [
          {
            parentId: '1-1',
            id: '1-1-1',
            name: '소카테고리1-1-1',
            data: {
              code: '01000001',
              visible: false,
              use: true,
              menuVisibleType: 'text',
              titleVisibleType: 'image',
              menuVisibleText: '',
              titleVisibleText: '',
              menuVisibleImage: '',
              titleVisibleImage: '',
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
        name: '중카테고리1-2',
        parentId: '1',
        children: [
          {
            parentId: '1-2',
            id: '1-2-1',
            name: '소카테고리1-2-1',
            data: {
              code: '01000002',
              visible: true,
              use: true,
              menuVisibleType: 'text',
              titleVisibleType: 'image',
              menuVisibleText: '',
              titleVisibleText: '',
              menuVisibleImage: '',
              titleVisibleImage: '',
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
    name: '대카테고리2',
    children: [
      {
        parentId: '2',
        id: '2-1',
        name: '중카테고리2-1',
        data: {
          code: '01000003',
          visible: false,
          use: false,
          menuVisibleType: 'text',
          titleVisibleType: 'image',
          menuVisibleText: '',
          titleVisibleText: '',
          menuVisibleImage: '',
          titleVisibleImage: '',
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
        name: '중카테고리2-2',
        children: [
          {
            parentId: '2-2',
            id: '2-2-1',
            name: '소카테고리2-2-1',
            data: {
              code: '01000004',
              visible: false,
              use: false,
              menuVisibleType: 'text',
              titleVisibleType: 'image',
              menuVisibleText: '',
              titleVisibleText: '',
              menuVisibleImage: '',
              titleVisibleImage: '',
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

const initCategory: Category = {
  parentId: '',
  id: 'root',
  name: '',
  data: {
    code: '',
    visible: true,
    use: true,
    menuVisibleType: 'text',
    titleVisibleType: 'text',
    menuVisibleText: '',
    titleVisibleText: '',
    menuVisibleImage: '',
    titleVisibleImage: '',
    cornerNumber: '',
    registerId: '',
    modifierId: '',
    registeredDate: '',
    modifiedDate: '',
  },
};

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

  const [categories, setCategoreis] = useState(initCategories);
  const [category, setCategory] = useState(initCategory);
  const [open, setOpen] = useState(false);
  const [categoryNames, setCategoryNames] = useState(['']);
  const [layoutCategories, setLayoutCategories] =
    useState(initLayoutCategories);
  const [placehoder, setPlacehoder] = useState({
    input: '대카테고리명',
    header: null,
  });

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

  const onNamesChange = useCallback(
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

  const foundCategory = (categories: Category[], id: string): Category => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === id) {
        return categories[i];
      }
      if (Array.isArray(categories[i].children)) {
        const category = foundCategory(categories[i].children, id);
        if (category !== undefined) {
          return category;
        }
      }
    }
  };

  const foundAddedDepthCategory = (
    categories: Category[],
    id: string,
    depth: number = 0,
    index: number = 0
  ): Category => {
    if (index < categories.length) {
      if (categories[index].id === id) {
        categories[index].depth = depth;
        return categories[index];
      }
      if (categories[index].children) {
        const category = foundAddedDepthCategory(
          categories[index].children,
          id,
          depth + 1,
          0
        );
        if (category !== undefined) {
          return category;
        }
      }
      return foundAddedDepthCategory(categories, id, depth, index + 1);
    }
  };

  const onNodeSelect = useCallback(
    (e: React.SyntheticEvent, id: string) => {
      // root
      if (id === 'root') {
        setPlacehoder({ input: '대카테고리명', header: null });
        return;
      }
      const category = foundAddedDepthCategory(categories, id);

      if (category.data) {
        setCategory(category);
      }
      // largeCategory
      if (category.depth === 0) {
        setPlacehoder({ input: '중카테고리명', header: [category.name] });
        return;
      }
      // middleCategory
      if (category.depth === 1) {
        const parent = foundAddedDepthCategory(categories, category.parentId);
        setPlacehoder({
          input: '소카테고리명',
          header: [parent.name, category.name],
        });
        return;
      }
    },
    [categories, category]
  );

  const onNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCategory({ ...category, name: e.target.value });
    },
    []
  );

  const onVisibleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const visible = value === 'true';
      setCategory({
        ...category,
        data: { ...category.data, visible },
      });
    },
    [category]
  );
  const onUseChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const use = value === 'true';
      if (use) {
        setCategory({
          ...category,
          data: { ...category.data, use },
        });
      } else {
        setCategory({
          ...category,
          data: { ...category.data, use, visible: false },
        });
      }
    },
    [category]
  );

  const onMenuVisibleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setCategory({
        ...category,
        data: { ...category.data, menuVisibleType: value },
      });
    },
    [category]
  );

  const onTitleVisibleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setCategory({
        ...category,
        data: { ...category.data, titleVisibleType: value },
      });
    },
    [category]
  );

  const onMenuVisibleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files[0]) {
        setCategory({
          ...category,
          data: { ...category.data, menuVisibleImage: e.target.files[0].name },
        });
      }
    },
    [category]
  );

  const onTitleVisibleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files[0]) {
        setCategory({
          ...category,
          data: { ...category.data, titleVisibleImage: e.target.files[0].name },
        });
      }
    },
    [category]
  );

  const onMenuVisibleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setCategory({
        ...category,
        data: { ...category.data, menuVisibleText: e.target.value },
      });
    },
    [category]
  );

  const onTitleVisibleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setCategory({
        ...category,
        data: { ...category.data, titleVisibleText: e.target.value },
      });
    },
    [category]
  );

  return (
    <Box className={classes.container}>
      <Box className={classes.categoryList}>
        <CategoryHeader
          title="전시카테고리"
          buttonText="추가"
          onButtonClick={onOpen}
        />
        <CategoryListFilter />
        <CategoryList categoryTree={categories} onNodeSelect={onNodeSelect} />
      </Box>
      <Box className={classes.cateogoryInfo}>
        <CategoryHeader
          title="카테고리 정보"
          buttonText="수정"
          description="*표시항목은 필수 입력항목입니다."
          onButtonClick={onEdit}
        />
        <CategoryNameRow
          code={category.data.code}
          name={category.name}
          onNameChange={onNameChange}
        />
        <CategoryVisibleRow
          visible={category.data.visible}
          use={category.data.use}
          onVisibleChange={onVisibleChange}
          onUseChange={onUseChange}
        />
        <CategoryVisibleTypeRow
          title="메뉴노출유형"
          visible={category.data.visible}
          visibleType={category.data.menuVisibleType}
          visibleValue={
            category.data.menuVisibleType === 'text'
              ? category.data.menuVisibleText
              : category.data.menuVisibleImage
          }
          onVisibleTypeChange={onMenuVisibleTypeChange}
          onVisibleImageChange={onMenuVisibleImageChange}
          onVisibleTextChange={onMenuVisibleTextChange}
        />
        <CategoryVisibleTypeRow
          title="타이틀노출유형"
          visibleType={category.data.titleVisibleType}
          visibleValue={
            category.data.titleVisibleType === 'text'
              ? category.data.titleVisibleText
              : category.data.titleVisibleImage
          }
          onVisibleTypeChange={onTitleVisibleTypeChange}
          onVisibleImageChange={onTitleVisibleImageChange}
          onVisibleTextChange={onTitleVisibleTextChange}
        />
        <CategoryRowItem
          title="전시코너수"
          content={category.data.cornerNumber}
        ></CategoryRowItem>
        <CategoryDateRow
          registerId={category.data.registerId}
          registeredDate={category.data.registeredDate}
          modifierId={category.data.modifierId}
          modifiedDate={category.data.modifiedDate}
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
        placeholder={placehoder}
        depth={category.depth}
        onAdd={onAdd}
        onDelete={onDelete}
        onNamesChange={onNamesChange}
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
