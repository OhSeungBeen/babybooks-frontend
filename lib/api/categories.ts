import client from './client';

export interface CreateRequest {
  displayName: string;
  displayYn: string;
  useYn: string;
  ordering: number;
  parentId: number;
}

export const getAll = () => client.get('/v1/api/categories');

export const create = ({
  displayName,
  displayYn,
  ordering,
  parentId,
  useYn,
}: CreateRequest) =>
  client.post('/v1/api/categories', {
    displayName,
    displayYn,
    ordering,
    parentId,
    useYn,
  });
