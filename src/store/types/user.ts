import { IUser } from '../../components/Users/IUser';

export interface UserState {
  users: IUser[];
}

export enum UserActionType {
  GET_USERS = 'GET_USERS',
}

interface GetUserAction {
  type: UserActionType.GET_USERS;
  payload: IUser[];
}

export type UsersAction = GetUserAction;
