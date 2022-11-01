import { PostActionType, PostState, PostsAction } from '../types/post';

const initialState = {
  posts: [],
};

export const postReducer = (
  state = initialState,
  action: PostsAction
): PostState => {
  switch (action.type) {
    case PostActionType.GET_POSTS:
      return { posts: action.payload };
    default:
      return state;
  }
};
