// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';

import FTable from './pages/FTable/FTable';
import TableInfo from './pages/TableInfo/index';
import ContractSearch from './pages/ContractSearch';
import AddColoum from './pages/ReliableBasic/index';
import UploadFile from './pages/UploadFile/UploadFile';

import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
import Page22 from './pages/Page22';
import Page23 from './pages/Page23';
import Page24 from './pages/Page24';
import TreeSearch from './pages/TreeSearch/treeSearch';
//import DragLayout from './pages/EditInterface/Tuozhuai/DragLayout'

const routerConfig = [
  {
    path: '/page18',
    component: Page18,
  },
  {
    path: '/TableInfo',
    component: TableInfo,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/FTable',
    component: FTable,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/UploadFile',
    component: UploadFile,
  },
  {
    path: '/TreeSearch',
    component: TreeSearch,
  },
  {
    path: '/AddColoum',
    component: AddColoum,
  },
  {
    path: '/page19',
    component: Page19,
  },
  {
    path: '/page20',
    component: Page20,
  },
  {
    path: '/page21',
    component: Page21,
  },
  {
    path: '/page22',
    component: Page22,
  },
  {
    path: '/page23',
    component: Page23,
  },
  {
    path: '/page24',
    component: Page24,
  },
];

export default routerConfig;
