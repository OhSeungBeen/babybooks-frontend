import React, { useState } from 'react';

import { List } from '@mui/material';
import { makeStyles } from '@mui/styles';

import MenuItem from './menuItem';

interface Menu {
  id: string;
  name: string;
  depth: number;
  children?: Menu[];
  url?: string;
}

export interface MenuListProps {
  menus: Array<Menu>;
  isRoot?: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ menus, isRoot }) => {
  const [curSelectedId, setCurSelectedId] = useState<string>('');

  const onSelected = (id: string, depth: number) => {
    if (depth === 1) {
      if (curSelectedId === id) {
        setCurSelectedId('');
      } else {
        setCurSelectedId(id);
      }
    }
  };

  return (
    <List disablePadding>
      {menus.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          selected={menu.depth === 1 ? menu.id === curSelectedId : null}
          onSelected={menu.depth === 1 ? onSelected : null}
        />
      ))}
    </List>
  );
};

export default MenuList;
