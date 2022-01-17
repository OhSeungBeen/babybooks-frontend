import React, { useCallback, useRef, useState, useEffect } from 'react';
import CategoryRowItem from './categoryRowItem';
import TextImageInput from './textImageInput';

interface CategoryVisibleTypeRowsProps {
  visible: boolean;
  menuVisibleType: 'image' | 'text';
  menuVisibleText: string;
  menuVisibleImage: string;
  titleVisibleType: 'image' | 'text';
  titleVisibleText: string;
  titleVisibleImage: string;
  onChange: (params: {
    menuVisible: {
      menuVisibleType: 'image' | 'text';
      menuVisibleText: string;
      menuVisibleImage: string;
    };
    titleVisible: {
      titleVisibleType: 'image' | 'text';
      titleVisibleText: string;
      titleVisibleImage: string;
    };
  }) => void;
}

const CategoryVisibleTypeRow: React.FC<CategoryVisibleTypeRowsProps> = ({
  visible,
  menuVisibleType,
  menuVisibleText,
  menuVisibleImage,
  titleVisibleType,
  titleVisibleText,
  titleVisibleImage,
  onChange: onUpdate,
}) => {
  const mounted = useRef(false);
  const [values, setValues] = useState({
    menuVisible: { menuVisibleType, menuVisibleText, menuVisibleImage },
    titleVisible: { titleVisibleType, titleVisibleText, titleVisibleImage },
  });

  const onChange = useCallback(
    ({
      name,
      values,
    }: {
      name: string;
      values: { type: string; text: string; image: string };
    }) => {
      setValues((prev) => ({ ...prev, [name]: values }));
    },
    []
  );

  useEffect(() => {
    if (!mounted.current) return;
    onUpdate(values);
  }, [values, onUpdate]);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return (
    <>
      <CategoryRowItem
        title="메뉴노출유형"
        content={
          <TextImageInput
            name="menuVisible"
            type={menuVisibleType}
            image={menuVisibleImage}
            text={menuVisibleText}
            disabled={!visible}
            onChange={onChange}
          />
        }
      />
      <CategoryRowItem
        title="타이틀노출유형"
        content={
          <TextImageInput
            name="titleVisible"
            type={titleVisibleType}
            image={titleVisibleImage}
            text={titleVisibleText}
            onChange={onChange}
          />
        }
      />
    </>
  );
};

export default CategoryVisibleTypeRow;
