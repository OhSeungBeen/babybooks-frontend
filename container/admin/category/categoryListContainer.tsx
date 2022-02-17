import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryAdd from '../../../components/admin/category/categoryAdd';
import CategoryHeader from '../../../components/admin/category/categoryHeader';
import CategoryList from '../../../components/admin/category/categoryList';
import CategoryListFilter from '../../../components/admin/category/categoryListFilter';
import { RootState } from '../../../modules';
import {
  Category,
  createCategory,
  getAllCategories,
  setSelectedId,
} from '../../../modules/categories';
import { setCategory } from '../../../modules/category';

const CategoryListContainer: React.FC = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state: RootState) => state.categories.data);
  const selectedId = useSelector(
    (state: RootState) => state.categories.selectedId
  );

  const [open, setOpen] = useState(false);
  const [addAvailable, setaddAvailable] = useState(true);
  const [filterdCategories, setFilterdCategories] = useState(null);
  const [placehoder, setPlacehoder] = useState({
    input: '대카테고리명',
    header: [],
  });

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const filterCategories = (
    categories: Category[],
    filterIndex: { visible: number; use: number }
  ) => {
    let copyCategories = JSON.parse(JSON.stringify(categories));
    return copyCategories.filter((category: Category) => {
      if (category.children)
        category.children = filterCategories(category.children, filterIndex);
      if (category.data) {
        const use = filterIndex.use === 1;
        const visible = filterIndex.visible === 1;
        if (filterIndex.visible === 0) {
          return category.data.use === use;
        } else if (filterIndex.use === 0) {
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

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [open, selectedId]);

  const onConfirm = useCallback(() => {
    setOpen(false);
  }, [open, dispatch]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [open]);

  const getCategoryById = (
    categories: Category[],
    id: string
  ): Category | null => {
    let res = null;

    const findCategory = (categories: Category[], id: string) => {
      categories.forEach((category) => {
        if (category.id === id) {
          res = category;
          return;
        }

        if (category.children) {
          findCategory(category.children, id);
        }
      });
    };
    findCategory(categories, id);
    return res;
  };

  const onNodeSelect = useCallback(
    (e: React.SyntheticEvent, id: string) => {
      dispatch(setSelectedId(id));

      // 루트카테고리일 때
      if (id === '0') {
        setaddAvailable(true);
        setPlacehoder({ input: '대카테고리명', header: [] });
        return;
      }

      const category = getCategoryById(categories, id);

      if (category.data) {
        dispatch(setCategory(category));
      }

      if (category.parentId) {
        const parentCategory = getCategoryById(categories, category.parentId);

        // 소카테고리일 때
        if (parentCategory.parentId) {
          setaddAvailable(false);
        } else {
          // 중카테고리일 때
          setaddAvailable(true);
          setPlacehoder({
            input: '소카테고리명',
            header: [parentCategory.name, category.name],
          });
        }
      } else {
        // 대카테고리일 때
        setaddAvailable(true);
        setPlacehoder({
          input: '중카테고리명',
          header: [category.name],
        });
      }
    },
    [categories]
  );

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
    <>
      <CategoryHeader
        title="전시카테고리"
        buttonText="추가"
        onOpen={onOpen}
        buttonVisible={addAvailable}
      />
      <CategoryAdd
        open={open}
        placeholder={placehoder}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
      <CategoryListFilter onChange={onChangeFilter} />
      <CategoryList
        categories={filterdCategories ? filterdCategories : categories}
        onNodeSelect={onNodeSelect}
        selectedId={selectedId}
      />
    </>
  );
};

export default CategoryListContainer;
