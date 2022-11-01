import { IPosts } from '../../components/IPosts';

export interface PostState {
  posts: IPosts[];
}

export enum PostActionType {
  GET_POSTS = 'GET_POSTS',
}

interface GetPostAction {
  type: PostActionType.GET_POSTS;
  payload: IPosts[];
}

export type PostsAction = GetPostAction;
