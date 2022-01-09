import React, { useState } from 'react';
import { OutlinedInput, InputAdornment, Typography, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import MenuList from './menuList';

// DUMY DATA
export interface Menu {
  id: string;
  name: string;
  depth: number;
  children?: Menu[];
  url?: string;
}

const initMenus: Array<Menu> = [
  {
    id: '1',
    depth: 1,
    name: '카테고리1',
    children: [
      {
        id: '1-1',
        depth: 2,
        name: '카테고리1-1',
        children: [
          {
            id: '1-1-1',
            depth: 3,
            name: '전시 카테고리',
            url: '/admin/category',
          },
        ],
      },
      {
        id: '1-2',
        depth: 2,
        name: '카테고리1-2',
        children: [
          {
            id: '1-2-1',
            depth: 3,
            name: '전시 코너',
            url: '/admin/corner',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    depth: 1,
    name: '카테고리2',
    children: [
      {
        id: '2-1',
        depth: 2,
        name: '카테고리2-1',
      },
      {
        id: '2-2',
        depth: 2,
        name: '카테고리2-2',
        children: [
          {
            id: '2-2-1',
            depth: 3,
            name: '카테고리2-2-1',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    depth: 1,
    name: '카테고리2',
    children: [
      {
        id: '2-1',
        depth: 2,
        name: '카테고리2-1',
      },
      {
        id: '2-2',
        depth: 2,
        name: '카테고리2-2',
        children: [
          {
            id: '2-2-1',
            depth: 3,
            name: '카테고리2-2-1',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    depth: 1,
    name: '카테고리2',
    children: [
      {
        id: '2-1',
        depth: 2,
        name: '카테고리2-1',
      },
      {
        id: '2-2',
        depth: 2,
        name: '카테고리2-2',
        children: [
          {
            id: '2-2-1',
            depth: 3,
            name: '카테고리2-2-1',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    depth: 1,
    name: '카테고리2',
    children: [
      {
        id: '2-1',
        depth: 2,
        name: '카테고리2-1',
      },
      {
        id: '2-2',
        depth: 2,
        name: '카테고리2-2',
        children: [
          {
            id: '2-2-1',
            depth: 3,
            name: '카테고리2-2-1',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    depth: 1,
    name: '카테고리2',
    children: [
      {
        id: '2-1',
        depth: 2,
        name: '카테고리2-1',
      },
      {
        id: '2-2',
        depth: 2,
        name: '카테고리2-2',
        children: [
          {
            id: '2-2-1',
            depth: 3,
            name: '카테고리2-2-1',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    depth: 1,
    name: '카테고리2',
    children: [
      {
        id: '2-1',
        depth: 2,
        name: '카테고리2-1',
      },
      {
        id: '2-2',
        depth: 2,
        name: '카테고리2-2',
        children: [
          {
            id: '2-2-1',
            depth: 3,
            name: '카테고리2-2-1',
          },
        ],
      },
    ],
  },
];

const MenuTab: React.FC = () => {
  const [searchValue, setSerachValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerachValue(e.target.value);
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
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />
      <MenuList menus={initMenus} />
    </>
  );
};

export default MenuTab;
