import { ADMIN_PAGE_TITLE } from 'config/strings';
import { State } from 'types';

const initialState: State = {
  app: {
    sideBar: {
      width: '250px',
      isShow: true,
    },
    header: {
      height: '64px',
    },
    footer: {
      height: '40px',
    },
  },
  page: {
    title: ADMIN_PAGE_TITLE,
    breadcrumb: ['First', 'Second'],
    isFavorites: false,
  },
  tabs: {
    index: 0,
    items: [],
  },
  dialog: {},
  categories: [
    {
      id: '1',
      name: '대카테고리1',
      children: [
        {
          parentId: '1',
          id: '1-1',
          name: '중카테고리1-1',
          children: [
            {
              parentId: '1-1',
              id: '1-1-1',
              name: '소카테고리1-1-1',
              data: {
                code: '01000001',
                visible: false,
                use: true,
                menuType: 'text',
                titleType: 'image',
                menuText: '',
                titleText: '',
                menuImage: '',
                titleImage: '',
                cornerNumber: '3',
                registerId: 'Tes***1',
                modifierId: 'Tes***1',
                registeredDate: 'YYYY-MM-DD',
                modifiedDate: 'YYYY-MM-DD',
              },
            },
          ],
        },
        {
          id: '1-2',
          name: '중카테고리1-2',
          parentId: '1',
          children: [
            {
              parentId: '1-2',
              id: '1-2-1',
              name: '소카테고리1-2-1',
              data: {
                code: '01000002',
                visible: true,
                use: true,
                menuType: 'text',
                titleType: 'image',
                menuText: '소카테고리1-2-1',
                titleText: '소카테고리1-2-1',
                menuImage: '',
                titleImage: '',
                cornerNumber: '3',
                registerId: 'Tes***1',
                modifierId: 'Tes***1',
                registeredDate: 'YYYY-MM-DD',
                modifiedDate: 'YYYY-MM-DD',
              },
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: '대카테고리2',
      children: [
        {
          parentId: '2',
          id: '2-1',
          name: '중카테고리2-1',
          data: {
            code: '01000003',
            visible: false,
            use: false,
            menuType: 'text',
            titleType: 'image',
            menuText: '',
            titleText: '',
            menuImage: '',
            titleImage: '',
            cornerNumber: '3',
            registerId: 'Tes***1',
            modifierId: 'Tes***1',
            registeredDate: 'YYYY-MM-DD',
            modifiedDate: 'YYYY-MM-DD',
          },
        },
        {
          parentId: '2',
          id: '2-2',
          name: '중카테고리2-2',
          children: [
            {
              parentId: '2-2',
              id: '2-2-1',
              name: '소카테고리2-2-1',
              data: {
                code: '01000004',
                visible: false,
                use: false,
                menuType: 'text',
                titleType: 'image',
                menuText: '',
                titleText: '',
                menuImage: '',
                titleImage: '',
                cornerNumber: '3',
                registerId: 'Tes***1',
                modifierId: 'Tes***1',
                registeredDate: 'YYYY-MM-DD',
                modifiedDate: 'YYYY-MM-DD',
              },
            },
          ],
        },
      ],
    },
  ],
  category: {
    parentId: '',
    id: 'root',
    name: '',
    data: {
      code: '',
      visible: true,
      use: true,
      menuType: 'text',
      titleType: 'text',
      menuText: '',
      titleText: '',
      menuImage: '',
      titleImage: '',
      cornerNumber: '',
      registerId: '',
      modifierId: '',
      registeredDate: '',
      modifiedDate: '',
    },
  },
  layoutCategories: [
    { id: '1', name: '메인이미지' },
    { id: '2', name: '베스트상품' },
    { id: '3', name: '추천상품' },
    { id: '4', name: '광고배너' },
    { id: '5', name: '분야별 추천 도서' },
    { id: '6', name: '공지사항' },
    { id: '7', name: '기획전' },
  ],
};

export default initialState;
