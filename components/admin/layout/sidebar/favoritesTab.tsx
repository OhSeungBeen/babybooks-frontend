import React, { useState } from 'react';
import { Button } from '@mui/material';
import FavoritesList from './favoritesList';

const FavoritesTab: React.FC = () => {
  const [modifiable, setModifiable] = useState<boolean>(false);

  const handleModifiable = () => {
    setModifiable((prevState) => !prevState);

    if (modifiable) {
      console.log('수정 API 요청');
    }
  };

  return (
    <>
      <Button fullWidth variant="outlined" onClick={handleModifiable}>
        {modifiable ? '수정완료' : '수정하기'}
      </Button>
      <FavoritesList modifiable={modifiable} />
    </>
  );
};

export default FavoritesTab;
