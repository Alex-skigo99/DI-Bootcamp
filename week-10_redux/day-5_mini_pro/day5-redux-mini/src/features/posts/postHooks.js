import {useCallback} from 'react';
import {createSelector} from '@reduxjs/toolkit';
import {useSelector, useDispatch } from 'react-redux';
import { fetchData, get_posts, get_loading, get_error} from './fetchSlice';
import { get_currentUser } from '../users/userSlice';


export const usePostsSelector = () => {
    return useSelector(
       createSelector([get_posts, get_currentUser], (posts, currentUser) => {
            console.log('usePostsSelector: ', currentUser);
            if (currentUser == -1) return posts;
            return posts.filter((post) => post.userId == currentUser)
        })
    ) 
};

export const usePostsLoading = () => useSelector(get_loading);

export const usePostsError = () => useSelector(get_error);

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
      dispatch(fetchData());
    }, [dispatch]);
  };
  