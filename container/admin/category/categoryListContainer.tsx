import React, { useState, useCallback } from 'react';
import { connectState } from 'redux/store';
import { setCategory } from 'redux/actions/category';
import { Category, ComponentProps } from 'types';
import CategoryHeader from 'components/admin/category/categoryHeader';
import CategoryListFilter from 'components/admin/category/categoryListFilter';
import CategoryList from 'components/admin/category/categoryList';
import CategoryAdd from 'components/admin/category/categoryAdd';

const CategoryListContainer: React.FC<ComponentProps> = ({
  state,
  dispatch,
}) => {
  const categories = state.categories;

  const [open, setOpen] = useState(false);
  const [filterdCategories, setFilterdCategories] = useState(null);
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

  const onNodeSelect = useCallback(
    (e: React.SyntheticEvent, id: string) => {
      if (id === 'root') {
        setPlacehoder({ input: '대카테고리명', header: null });
        return;
      }
      const category = foundAddedDepthCategory(categories, id);
      if (category.data) {
        dispatch(setCategory(category));
      }
      if (category.depth === 0) {
        setPlacehoder({ input: '중카테고리명', header: [category.name] });
        return;
      }
      if (category.depth === 1) {
        const parent = foundAddedDepthCategory(categories, category.parentId);
        setPlacehoder({
          input: '소카테고리명',
          header: [parent.name, category.name],
        });
        return;
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
      <CategoryHeader title="전시카테고리" buttonText="추가" onOpen={onOpen} />
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
      />
    </>
  );
};

export default connectState(CategoryListContainer);
