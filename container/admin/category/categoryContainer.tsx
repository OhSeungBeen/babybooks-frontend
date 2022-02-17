import { RootState } from 'modules';
import React, { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import CategoryDateRow from '../../../components/admin/category/categoryDateRow';
import CategoryHeader from '../../../components/admin/category/categoryHeader';
import CategoryNameRow from '../../../components/admin/category/categoryNameRow';
import CategoryRowItem from '../../../components/admin/category/categoryRowItem';
import CategoryVisibleRow from '../../../components/admin/category/categoryVisibleRow';
import CategoryVisibleTypeRow from '../../../components/admin/category/categoryVisibleTypeRow';
import ConerLayout from '../../../components/admin/category/cornerLayout';
import {
  changeName,
  setMenuImage,
  setMenuText,
  setMenuType,
  setTitleImage,
  setTitleText,
  setTitleType,
  setUse,
  setVisible,
} from '../../../modules/category';
import { deleteCorner, editLayoutOrder } from '../../../modules/coners';

const CategoryContainer: React.FC = () => {
  const dispatch = useDispatch();

  const category = useSelector((state: RootState) => state.category);
  const corners = useSelector((state: RootState) => state.corners.data);

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
      dispatch(
        editLayoutOrder({
          destination: destination.index,
          source: source.index,
        })
      );
    },
    [corners, dispatch]
  );

  const onDelteLayout = useCallback(
    (index: number) => {
      dispatch(deleteCorner(index));
    },
    [corners, dispatch]
  );

  return (
    <>
      <CategoryHeader
        title="카테고리 정보"
        buttonText="수정"
        buttonVisible={true}
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
      <ConerLayout
        corners={corners}
        onDragEnd={onDragEnd}
        onDelete={onDelteLayout}
      />
    </>
  );
};

export default CategoryContainer;
