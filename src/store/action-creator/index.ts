import * as UserActionCreator from './user';
import * as PostActionCreator from './post';

export default {
  ...PostActionCreator,
  ...UserActionCreator,
};
