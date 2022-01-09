import React, { useState } from 'react';
import { List } from '@mui/material';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import FavoritesItem from './favoritesItem';

// DUMY DATA
export interface Favorite {
  id: string;
  name: string;
}

const Favorites: Array<Favorite> = [
  {
    id: '1',
    name: '카테고리1',
  },
  {
    id: '2',
    name: '카테고리2',
  },
  {
    id: '3',
    name: '카테고리3',
  },
];

const reorder = <T extends unknown>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export interface FavoritesListProps {
  modifiable: boolean;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ modifiable }) => {
  const [favorites, setFavorites] = useState<Array<Favorite>>(Favorites);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (destination === null) {
      return;
    }

    const reorderFavorites = reorder(
      favorites,
      destination.index,
      source.index
    );
    setFavorites(reorderFavorites);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" isDropDisabled={!modifiable}>
        {(provided) => (
          <List ref={provided.innerRef} disablePadding>
            {favorites.map((favorite, index) => (
              <FavoritesItem
                key={index}
                favorite={favorite}
                modifiable={modifiable}
                index={index}
              />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default React.memo(FavoritesList);
