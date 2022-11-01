import { Dispatch } from 'redux';
import httpUsers from '../../https/httpUsers';
import { UserActionType, UsersAction } from '../types/user';

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await httpUsers.get('api/users?page=2');
    dispatch({ type: UserActionType.GET_USERS, payload: response.data.data });
  };
};
