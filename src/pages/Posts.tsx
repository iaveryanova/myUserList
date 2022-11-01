import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import SearchUser from '../components/Search';
import { useAction } from '../hooks/useAction';
import { useSearch } from '../hooks/useSearch';
import { useTypedSelector } from '../hooks/useTypedSelectors';

const Posts = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const [search, setSearch] = useState('');
  const searchedPost = useSearch(posts, search, 'title');
  const { getPosts } = useAction();

  useEffect(() => {
    getPosts();
  }, []);

  let key = 0;

  return (
    <>
      <SearchUser setSearch={setSearch} name={'Title'} />
      {posts ? (
        searchedPost.map((post) => {
          return (
            <div className='card mb-3' key={key++}>
              <h4 className='card-header'>{post.title}</h4>
              <div className='card-body'>
                <h5 className='card-title'>Author: {post.author}</h5>
                <h5 className='card-title'>Genre: {post.genre}</h5>
                <p className='card-text'>{post.content}</p>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Posts;
