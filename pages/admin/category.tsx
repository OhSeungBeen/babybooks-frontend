import React, { useState, useCallback, useEffect } from 'react';
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
  menuVisibleType: 'text' | 'image';
  titleVisibleType: 'text' | 'image';
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
              menuVisibleText: '소카테고리1-2-1',
              titleVisibleText: '소카테고리1-2-1',
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
        parentId: '2',
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

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(initCategories);
  const [category, setCategory] = useState(initCategory);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterdCategories, setFilterdCategories] = useState(null);
  const [layoutCategories, setLayoutCategories] =
    useState(initLayoutCategories);
  const [placehoder, setPlacehoder] = useState({
    input: '대카테고리명',
    header: null,
  });

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const onConfirm = useCallback(() => {
    setOpen(false);
  }, [open]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [open]);

  const onEdit = useCallback(() => {}, [category]);

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) {
        return;
      }
      const newLayout = Array.from(layoutCategories);
      const [removed] = newLayout.splice(destination.index, 1);
      newLayout.splice(source.index, 0, removed);
      setLayoutCategories(newLayout);
    },
    [layoutCategories]
  );

  const onDelteLayout = useCallback(
    (index: number) => {
      setLayoutCategories([
        ...layoutCategories.slice(0, index),
        ...layoutCategories.slice(index + 1),
      ]);
    },
    [layoutCategories]
  );

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
        if (category) {
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

  const onChangeVisbleUse = useCallback(({ use, visible }) => {
    if (use) {
      setCategory((prev) => ({
        ...prev,
        data: { ...prev.data, use, visible },
      }));
    } else {
      setCategory((prev) => ({
        ...prev,
        data: { ...prev.data, use, visible: false },
      }));
    }
  }, []);

  const onChangeVisibleType = useCallback(({ menuVisible, titleVisible }) => {
    setCategory((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        menuVisibleType: menuVisible.type,
        menuVisibleText: menuVisible.text,
        menuVisibleImage: menuVisible.image,
        titleVisibleType: titleVisible.type,
        titleVisibleText: titleVisible.text,
        titleVisibleImage: titleVisible.image,
      },
    }));
  }, []);

  const onChangeName = useCallback(
    (name) => {
      setCategory((prev) => ({
        ...prev,
        name,
      }));
    },
    [category]
  );

  const filterCategories = (
    categories: Category[],
    filterIdnex: { visible: number; use: number }
  ) => {
    let copyCategories = JSON.parse(JSON.stringify(categories));
    return copyCategories.filter((category: Category) => {
      if (category.children)
        category.children = filterCategories(category.children, filterIdnex);
      if (category.data) {
        const use = filterIdnex.use === 1;
        const visible = filterIdnex.visible === 1;
        if (filterIdnex.visible === 0) {
          return category.data.use === use;
        } else if (filterIdnex.use === 0) {
          return category.data.visible === visible;
        } else {
          return category.data.visible === visible && category.data.use === use;
        }
      } else {
        if (category.children.length > 0) {
          return true;
        } else {
          return false;
        }
      }
    });
  };

  const onChangeFilter = useCallback(
    ({ visible, use }: { visible: number; use: number }) => {
      if (visible === 0 && use === 0) {
        setFilterdCategories(null);
      } else {
        setFilterdCategories(filterCategories(categories, { visible, use }));
      }
    },
    [filterCategories]
  );

  return (
    <Box className={classes.container}>
      <Box className={classes.categoryList}>
        <CategoryHeader
          title="전시카테고리"
          buttonText="추가"
          onClickButton={onOpen}
        />
        <CategoryListFilter onChange={onChangeFilter} />
        <CategoryList
          categories={filterdCategories ? filterdCategories : categories}
          onNodeSelect={onNodeSelect}
        />
      </Box>
      <Box className={classes.cateogoryInfo}>
        <CategoryHeader
          title="카테고리 정보"
          buttonText="수정"
          description="*표시항목은 필수 입력항목입니다."
          onClickButton={onEdit}
        />
        <CategoryNameRow
          code={category.data.code}
          name={category.name}
          onChange={onChangeName}
        />
        <CategoryVisibleRow
          visible={category.data.visible}
          use={category.data.use}
          onChange={onChangeVisbleUse}
        />
        <CategoryVisibleTypeRow
          visible={category.data.visible}
          menuVisibleType={category.data.menuVisibleType}
          menuVisibleText={category.data.menuVisibleText}
          menuVisibleImage={category.data.menuVisibleImage}
          titleVisibleType={category.data.titleVisibleType}
          titleVisibleText={category.data.titleVisibleText}
          titleVisibleImage={category.data.titleVisibleImage}
          onChange={onChangeVisibleType}
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
          onDelete={onDelteLayout}
        />
      </Box>
      <CategoryAdd
        open={open}
        placeholder={placehoder}
        depth={category.depth}
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
