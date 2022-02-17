import React, { Children, useState } from 'react';

import { Search } from '@mui/icons-material';
import { InputAdornment, OutlinedInput, Typography } from '@mui/material';

import MenuList from './menuList';

export interface Menu {
  id: string;
  name: string;
  depth: number;
  children?: Menu[];
  url?: string;
}

const initMenus: Menu[] = [
  {
    id: '1',
    depth: 1,
    name: '전시관리',
    children: [
      {
        id: '1-1',
        depth: 2,
        name: '전시카테고리관리',
        url: '/admin/category',
      },
      {
        id: '1-2',
        depth: 2,
        name: '전시코너관리',
        url: '/admin/corner',
      },
    ],
  },
];

const filterMenus = (menus: Menu[], serachValue: string) => {
  let copyMenus = JSON.parse(JSON.stringify(menus));
  return copyMenus.filter((menu: Menu) => {
    if (menu.children) {
      menu.children = filterMenus(menu.children, serachValue);

      if (menu.children.length > 0) {
        return true;
      }
    }

    return menu.name.includes(serachValue) ? true : false;
  });
};

const MenuTab: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [menu, setMenus] = useState(initMenus);
  const [filterMenu, setFilterMenu] = useState(null);

  const onChangeSerachValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setFilterMenu(filterMenus(menu, e.target.value));
  };

  return (
    <>
      <Typography align="center" variant="subtitle2">
        메뉴 검색
      </Typography>
      <OutlinedInput
        fullWidth
        size="small"
        value={searchValue}
        onChange={onChangeSerachValue}
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />
      <MenuList menus={filterMenu ? filterMenu : menu} />
    </>
  );
};

export default MenuTab;
