import { Dispatch } from 'react';
import httpsPosts from '../../https/httpsPosts';
import { PostActionType, PostsAction } from '../types/post';

export const getPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    const res = await httpsPosts.get('');
    dispatch({ type: PostActionType.GET_POSTS, payload: res.data.data });
  };
};
