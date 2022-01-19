import React, { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { connectState } from 'redux/store';
import { ComponentProps } from 'types';
import {
  changeName,
  setVisible,
  setUse,
  setMenuType,
  setMenuText,
  setMenuImage,
  setTitleType,
  setTitleText,
  setTitleImage,
} from 'redux/actions/category';
import CategoryVisibleRow from 'components/admin/category/categoryVisibleRow';
import CategoryNameRow from 'components/admin/category/categoryNameRow';
import CategoryRowItem from 'components/admin/category/categoryRowItem';
import CategoryDateRow from 'components/admin/category/categoryDateRow';
import CategoryVisibleTypeRow from 'components/admin/category/categoryVisibleTypeRow';
import CategoryHeader from 'components/admin/category/categoryHeader';
import CategoryLayout from 'components/admin/category/categoryLayout';
import {
  deleteLayoutCategories,
  editLayoutOrder,
} from 'redux/actions/layoutCategories';

const CategoryContainer: React.FC<ComponentProps> = ({ state, dispatch }) => {
  const category = state.category;
  const layoutCategories = state.layoutCategories;

  const onEdit = useCallback(() => {}, [category]);

  const onChangeName = useCallback(
    (name) => {
      dispatch(changeName(name));
    },
    [dispatch]
  );

  const onChangeVisbleUse = useCallback(
    ({ name, value }) => {
      if (name === 'visible') {
        dispatch(setVisible(value));
      } else if (name === 'use') {
        dispatch(setUse(value));
        if (!value) dispatch(setVisible(false));
      }
    },
    [dispatch]
  );

  const onChangeVisibleType = useCallback((name, inputName, values) => {
    if (name === 'menu') {
      if (inputName === 'type') {
        dispatch(setMenuType(values));
      } else if (inputName === 'text') {
        dispatch(setMenuText(values));
      } else if (inputName === 'image') {
        dispatch(setMenuImage(values));
      }
    } else if (name === 'title') {
      if (inputName === 'type') {
        dispatch(setTitleType(values));
      } else if (inputName === 'text') {
        dispatch(setTitleText(values));
      } else if (inputName === 'image') {
        dispatch(setTitleImage(values));
      }
    }
  }, []);

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) {
        return;
      }
      dispatch(editLayoutOrder(destination.index, source.index));
    },
    [layoutCategories]
  );

  const onDelteLayout = useCallback(
    (index: number) => {
      dispatch(deleteLayoutCategories(index));
    },
    [layoutCategories]
  );

  return (
    <>
      <CategoryHeader
        title="카테고리 정보"
        buttonText="수정"
        description="*표시항목은 필수 입력항목입니다."
        onOpen={onEdit}
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
        menuType={category.data.menuType}
        menuText={category.data.menuText}
        menuImage={category.data.menuImage}
        titleType={category.data.titleType}
        titleText={category.data.titleText}
        titleImage={category.data.titleImage}
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
    </>
  );
};

export default connectState(CategoryContainer);
