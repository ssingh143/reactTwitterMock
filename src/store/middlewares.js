import thunk from 'redux-thunk';

import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import history from '../utils/history';
export const routerMiddleware = createRouterMiddleware(history);

const middlewares = [thunk, routerMiddleware];
export default middlewares;
