import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Delete } from '@mui/icons-material';
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  draggingListButton: {
    background: theme.palette.action.selected,
  },
  itemText: {
    '& .MuiListItemText-primary': {
      fontSize: '16px',
      fontWeight: '600',
    },
  },
}));

export interface FavoritesItemProps {
  favorite: {
    id: string;
    name: string;
  };
  modifiable: boolean;
  index: number;
}

const FavoritesItem: React.FC<FavoritesItemProps> = ({
  favorite,
  modifiable,
  index,
}) => {
  const classes = useStyles();

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('삭제 API 요청 OR 상태 수정');
  };

  return (
    <Draggable
      key={favorite.id}
      index={index}
      draggableId={favorite.id}
      isDragDisabled={!modifiable}
    >
      {(provided, snapshot) => (
        <ListItemButton
          divider={true}
          autoFocus={modifiable}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListButton : null}
        >
          <ListItem
            disablePadding
            secondaryAction={
              modifiable && (
                <IconButton edge="end" onClick={onDelete}>
                  <Delete />
                </IconButton>
              )
            }
          >
            <ListItemText
              className={classes.itemText}
              primary={favorite.name}
            ></ListItemText>
          </ListItem>
        </ListItemButton>
      )}
    </Draggable>
  );
};

export default FavoritesItem;
