import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
