import React from 'react';

import CategoryRowItem from './categoryRowItem';
import TextImageInput from './textImageInput';

interface CategoryVisibleTypeRowsProps {
  visible: boolean;
  menuType: 'image' | 'text';
  menuText: string;
  menuImage: string;
  titleType: 'image' | 'text';
  titleText: string;
  titleImage: string;
  onChange: (
    name: string,
    inputName: string,
    value: string | 'text' | 'image'
  ) => void;
}

const CategoryVisibleTypeRow: React.FC<CategoryVisibleTypeRowsProps> = ({
  visible,
  menuType,
  menuText,
  menuImage,
  titleType,
  titleText,
  titleImage,
  onChange,
}) => {
  return (
    <>
      <CategoryRowItem
        title="메뉴노출유형"
        content={
          <TextImageInput
            name="menu"
            type={menuType}
            image={menuImage}
            text={menuText}
            disabled={!visible}
            onChange={onChange}
          />
        }
      />
      <CategoryRowItem
        title="타이틀노출유형"
        content={
          <TextImageInput
            name="title"
            type={titleType}
            image={titleImage}
            text={titleText}
            onChange={onChange}
          />
        }
      />
    </>
  );
};

export default CategoryVisibleTypeRow;
