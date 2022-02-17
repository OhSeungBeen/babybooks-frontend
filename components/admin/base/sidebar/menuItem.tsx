import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { addTab } from '../../../../modules/tabs';
import PlainLink from '../../../common/plainLink';
import MenuList from './menuList';
import { Menu } from './menuTab';

export interface MenuItemProps {
  menu: Menu;
  selected: boolean | null;
  onSelected: (id: string, depth: number) => void | null;
}

export interface StyleProps {
  depth: number;
}

const useStyles = makeStyles({
  listItemText: ({ depth }: StyleProps) => {
    const selector = '& .MuiListItemText-primary';
    if (depth === 1) {
      return {
        [selector]: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      };
    } else if (depth === 2) {
      return {
        [selector]: {
          fontSize: '14px',
          fontWeight: 'bold',
          marginLeft: '6px',
        },
      };
    } else if (depth === 3) {
      return {
        [selector]: {
          fontSize: '12px',
          marginLeft: '12px',
        },
      };
    }
  },
});

const MenuItem: React.FC<MenuItemProps> = ({ menu, selected, onSelected }) => {
  const classes = useStyles({ depth: menu.depth });

  const dispatch = useDispatch();

  const [expand, setExpand] = useState<boolean>(false);

  const onListButtonClick = () => {
    if (menu.depth === 1) {
      onSelected(menu.id, menu.depth);
    } else if (menu.depth === 2) {
      if (Array.isArray(menu.children)) {
        setExpand((prevExpand) => !prevExpand);
      } else {
        dispatch(
          addTab({
            id: menu.id,
            title: menu.name,
            url: menu.url,
          })
        );
      }
    } else if (menu.depth === 3) {
      dispatch(
        addTab({
          id: menu.id,
          title: menu.name,
          url: menu.url,
        })
      );
    }
  };
  return (
    <>
      <PlainLink href={menu.url && menu.url} disabled={menu.url ? false : true}>
        <ListItemButton divider={true} onClick={onListButtonClick}>
          <ListItemText primary={menu.name} className={classes.listItemText} />
          {Array.isArray(menu.children) &&
            menu.children.length > 0 &&
            ((menu.depth === 1 ? selected : expand) ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            ))}
        </ListItemButton>
      </PlainLink>
      <Collapse in={menu.depth === 1 ? selected : expand}>
        {Array.isArray(menu.children) && <MenuList menus={menu.children} />}
      </Collapse>
    </>
  );
};

export default MenuItem;
