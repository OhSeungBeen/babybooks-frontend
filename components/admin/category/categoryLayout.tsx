import React from 'react';
import { Box, Theme, Typography, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import {
  DragDropContext,
  Droppable,
  DropResult,
  Draggable,
} from 'react-beautiful-dnd';
import { LayoutCategory } from 'pages/admin/category';

interface CategoryLayoutProps {
  categories: LayoutCategory[];
  onDragEnd: ({ destination, source }: DropResult) => void;
  onDelete: (index: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '21rem',
    maxHeight: '21rem',
    overflow: 'auto',
    border: 'solid 1px',
    marginTop: '1rem',
    padding: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
    '& p': {
      color: theme.palette.error.main,
      fontSize: '0.775rem',
    },
    '& button': {
      fontSize: '0.775rem',
    },
  },
  category: {
    minHeight: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '0.5rem',
    backgroundColor: '#616161;',
    color: 'white',
    borderRadius: '4px',
    '& p': {
      textAlign: 'center',
      fontSize: '0.875rem',
      overflow: 'auto',
    },
    '& button': {
      position: 'absolute',
      top: '0',
      right: '0',
      color: '#ffff',
    },
  },
  wrapper: {
    position: 'relative',
  },
  none: {
    backgroundColor: '#ffff;',
    border: 'dashed 1px',
    color: theme.palette.primary.main,
    '& p': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}));

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  categories,
  onDragEnd,
  onDelete,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="body2">
          * 마우스로 드래그해서 레이아웃을 변경할 수 있습니다.
        </Typography>
        <Button variant="contained">등록</Button>
      </Box>
      <Box className={classes.category}>
        <Typography>타이틀(고정)</Typography>
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Box ref={provided.innerRef}>
              {Array.isArray(categories) && categories.length > 0 ? (
                categories.map((category, index) => (
                  <Draggable
                    key={category.id}
                    index={index}
                    draggableId={category.id}
                  >
                    {(provided, snapshot) => (
                      <Box
                        key={category.id}
                        className={classes.category}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Typography>{category.name}</Typography>
                        <IconButton onClick={() => onDelete(index)}>
                          <Close />
                        </IconButton>
                      </Box>
                    )}
                  </Draggable>
                ))
              ) : (
                <Box className={`${classes.category} ${classes.none}`}>
                  <Typography>전시코너를 등록해주세요.</Typography>
                </Box>
              )}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default CategoryLayout;
