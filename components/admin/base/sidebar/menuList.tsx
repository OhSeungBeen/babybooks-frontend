import React, { useState } from 'react';

import { List } from '@mui/material';

import MenuItem from './menuItem';
import { Menu } from './menuTab';

export interface MenuListProps {
  menus: Array<Menu>;
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
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
